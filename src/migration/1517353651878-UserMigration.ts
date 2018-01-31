import {MigrationInterface, QueryRunner} from 'typeorm';

export class UserMigration1517353651878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "users"
            (
                "id" SERIAL NOT NULL,
                "email" character varying NOT NULL,
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "age" integer NOT NULL,
                PRIMARY KEY("id")
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
