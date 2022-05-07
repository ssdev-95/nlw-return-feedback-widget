import {
	MigrationInterface, QueryRunner
} from "typeorm"

export class CreateTable1651887924604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
          name: "feedback",
					columns: [
            {
              name: "id",
							type: "varchar",
							isPrimary: true,
            },
            {
							name: "type",
							type: "varchar",
            },
						{
							name: "comment",
							type: "varchar",
						},
						{
							name: "screenshot",
							type: "varchar",
	  				}
          ],
        }),
        true,
			)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropColumn(
				"type", "comment", "screenshot"
	    )
			await queryRunner.dropTable("feedback")
    }

}
