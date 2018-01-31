import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public email: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public age: number;

}
