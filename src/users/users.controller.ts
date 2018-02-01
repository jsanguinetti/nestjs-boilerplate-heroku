import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Post()
    public async create(@Body() body: CreateUserDto) {
        return await this.userService.create(body);
    }
}
