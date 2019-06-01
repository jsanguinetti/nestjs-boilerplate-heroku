import * as jwt from 'jsonwebtoken';
import { Injectable, HttpException, Inject } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
    private tokenExp = '2 days';

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly usersService: UsersService
    ) { }

    public async validateUser(userId: string) {
        return await this.usersService.validateUser(userId);
    }

    public async login(email, password) {
        if (!email) throw new HttpException('Email is required', 422);
        if (!password) throw new HttpException('Password is required', 422);

        const foundUser = await this.userRepository.findOne({ email });
        if (!foundUser) throw new HttpException('User not found', 401);
        if (!(await this.usersService.isValidPassword(foundUser, password))) throw new HttpException('User not found', 401);
        return this.createToken(foundUser);
    }

    private async createToken(user: User) {
        const data = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id
        };
        const token = jwt.sign(data, process.env.SECRET, { expiresIn: this.tokenExp });

        return {
            access_token: token
        };
    }
}
