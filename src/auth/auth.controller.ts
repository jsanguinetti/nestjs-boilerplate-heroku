import {Controller, Post, Body, Query} from '@nestjs/common';
import {LoginDto} from './auth.dto';
import {AuthService} from './auth.service';
import {ApiOperation} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('/login')
    public async login(@Body() body: LoginDto) {
        return await this.authService.login(body.email, body.password);
    }
}
