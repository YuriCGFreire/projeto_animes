import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePost1624471606346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "posts",
            columns:[
                {
                    name: "id",
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: "title",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "content",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "like",
                    type: "int",
                    default: 0
                },
                {
                    name: "dislike",
                    type: "int",
                    default: 0
                },
                {
                    name: "user_id",
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
            foreignKeys: [
                {
                    name: "FKUser",
                    referencedTableName:"users",
                    referencedColumnNames:["id"],
                    columnNames: ["user_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts")
    }

}
