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
                    type: "text",
                    isNullable: false
                },
                {
                    name: "author_id",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "like",
                    type: "int"
                },
                {
                    name: "dislike",
                    type: "int"
                },
                {
                    name: "middle_finger",
                    type: "int"
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
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts")
    }

}
