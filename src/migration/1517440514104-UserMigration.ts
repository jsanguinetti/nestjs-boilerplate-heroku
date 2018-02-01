import {MigrationInterface, QueryRunner} from 'typeorm';

export class UserMigration1517440514104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "users"
            ("id" SERIAL NOT NULL,
            "email" character varying NOT NULL,
            "password" character varying NOT NULL,
            "firstName" character varying,
            "lastName" character varying,
            "age" integer,
            PRIMARY KEY("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
