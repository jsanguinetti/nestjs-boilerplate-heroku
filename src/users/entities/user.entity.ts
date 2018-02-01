import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, QueryFailedError} from 'typeorm';
import {IsEmail, IsNotEmpty, Validator} from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
    private static DEFAULT_SALT_ROUNDS = 10;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @IsNotEmpty()
    public email: string;

    @Column()
    @IsNotEmpty()
    public password: string;

    @Column()
    @IsNotEmpty()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public age: number;

    public toJSON() {
        return {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age
        }
    }

    @BeforeInsert()
    private async encryptPassword() {
        this.password = await bcrypt.hash(this.password, User.DEFAULT_SALT_ROUNDS);
    }

    @BeforeInsert()
    @BeforeUpdate()
    private validateEmail() {
        const validator = new Validator();
        if (!validator.isEmail(this.email)) throw new QueryFailedError('', [], 'email is not a valid email');
    }
}
