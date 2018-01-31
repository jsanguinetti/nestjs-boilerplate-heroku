import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
