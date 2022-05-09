import "reflect-metadata"
import path from "node:path"
import { DataSource } from "typeorm"
import { Feedback } from "./entity/Feedback"

const DB_VARS = {
	HOST: process.env.DB_HOST,
	PORT: Number(process.env.DB_PORT),
	USERNAME: process.env.DB_USERNAME,
	PASSWORD: process.env.DB_PASSWORD,
	DATABASE: process.env.DATABASE_URL
}

const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_VARS.HOST,
    port: DB_VARS.PORT,
    username: DB_VARS.USERNAME,
    password: DB_VARS.PASSWORD,
    database: DB_VARS.DATABASE,
    synchronize: true,
    logging: false,
    entities: [ Feedback ],
    migrations: ["./migration/**.ts"],
    subscribers: []
})

export { AppDataSource, Feedback }

