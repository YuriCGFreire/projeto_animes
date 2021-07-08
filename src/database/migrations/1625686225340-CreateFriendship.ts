import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateFriendship1625686225340 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "friends",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: "user_id_requester",
                    type: "uuid"
                },
                {
                    name: "user_id_requested",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: 'now()'
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))

        await queryRunner.createForeignKey("friends", new TableForeignKey({
            columnNames: ["user_id_requester"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("friends", new TableForeignKey({
            columnNames: ["user_id_requested"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("friends")
    }

}
