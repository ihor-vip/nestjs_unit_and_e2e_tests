import {MigrationInterface, QueryRunner} from "typeorm";

export class User1658576575307 implements MigrationInterface {
    name = 'User1658576575307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "createAt" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
