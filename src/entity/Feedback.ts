import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

type FeedbackTypes = "BUG" | "IDEA" | "OTHER"

@Entity()
class Feedback {

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

    @Column({
			type: 'longtext',
			default: null
		})
    screenshot?: string | null

}

export { Feedback }
