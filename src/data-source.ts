import "reflect-metadata"
import path from "node:path"
import { DataSource } from "typeorm"
import { Feedback } from "./entity/Feedback"

const DB_VARS = {
	TYPE: process.env.DB_TYPE || "mysql",
	HOST: process.env.DB_HOST,
	PORT: Number(process.env.DB_PORT),
	USERNAME: process.env.DB_USERNAME,
	PASSWORD: process.env.DB_PASSWORD,
	DATABASE_URL: process.env.DATABASE_URL,
	MIGRATION_DIR: path.join(
	  process.cwd(),
		"src/migration"
	)
}

const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_VARS.HOST,
    port: DB_VARS.PORT,
    username: DB_VARS.USERNAME,
    password: DB_VARS.PASSWORD,
    database: DB_VARS.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [ Feedback ],
    migrations: ["./migration/**.*"],
    subscribers: [],
    "cli": {
        "migrationsDir": DB_VARS.MIGRATION_DIR
    }
})

module.exports = { Feedback, AppDataSource }
