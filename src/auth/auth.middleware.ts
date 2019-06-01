import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import * as cors from 'cors';
import * as jwt from 'jsonwebtoken';
import { AuthService } from './auth.service';
import * as passport from 'passport';

@Injectable()
export class IsAuthenticated implements NestMiddleware {
    constructor(private authService: AuthService) {

    }
    public use(req: Request, res: Response, next: () => void): any {
        if (process.env.AUTHENTICATION === 'passport') {
            return passport.authenticate('jwt', { session: false })(req, res, next);
        } else {
            if (req.headers.authorization && (req.headers.authorization as string).split(' ')[0] === 'Bearer') {
                const token = (req.headers.authorization as string).split(' ')[1];
                let decoded: any;
                try {
                    decoded = jwt.verify(token, process.env.SECRET);
                } catch (e) {
                    if (e.name === 'TokenExpiredError') throw new HttpException('Expired token', HttpStatus.UNAUTHORIZED);
                    throw new HttpException('Authentication Error', HttpStatus.UNAUTHORIZED);
                }

                this.authService.validateUser(decoded._id).
                    then(() => next());
            } else {
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
            }
        }
    }

}
