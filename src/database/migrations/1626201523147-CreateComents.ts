import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateComents1626201523147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "coments",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "post_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
        }))

        await queryRunner.createForeignKey("coments", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }))

        await queryRunner.createForeignKey("coments", new TableForeignKey({
            columnNames: ["post_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "posts",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("coments")
    }

}
