import { Module, NestModule, forwardRef, MiddlewaresConsumer, Component } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import {UsersService} from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    components: [UsersService],
    controllers: [UsersController],
    exports: [UsersService]
})
export class UsersModule {}
