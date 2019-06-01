import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ICreateUser } from './user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    public async create(userData: ICreateUser): Promise<User> {
        if (!userData.email) throw new HttpException('Email is required', 422);
        if (!userData.firstName) throw new HttpException('First Name is required', 422);
        const newUser = this.userRepository.create(userData);
        return await this.userRepository.save(newUser);
    }

    public async validateUser(userId: string): Promise<boolean> {
        const foundUser = await this.userRepository.findOne(userId);
        if (!foundUser) throw { err: 'Invalid user.' };

        return !!foundUser;
    }

    public async isValidPassword(user: User, password: string): Promise<boolean> {
        return await bcrypt.compare(password, user.password);
    }
}
