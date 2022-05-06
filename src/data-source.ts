import "reflect-metadata"
import { DataSource } from "typeorm"
import { Feedback } from "./entity/Feedback"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [ Feedback ],
    migrations: ["./migration/*.*"],
    subscribers: [],
})

export { Feedback, AppDataSource }
