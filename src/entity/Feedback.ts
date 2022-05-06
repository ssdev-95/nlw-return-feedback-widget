import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

type FeedbackTypes = "BUG" | "IDEA" | "OTHER"

@Entity()
export class Feedback {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
			type: "enum",
			enum: ["BUG", "IDEA", "OTHER"],
			default: "BUG"
    })
    type: FeedbackTypes

    @Column()
    comment: string

    @Column()
    screenshot?: string | null

}
