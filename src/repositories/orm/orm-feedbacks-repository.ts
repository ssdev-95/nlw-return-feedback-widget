import {
	FeedbacksRepository, FeedbackCreateData
} from "../feedbacks-repository";
import { Feedback, AppDataSource } from '../../data-source';
//import { prisma } from "../../prisma";

export class OrmFeedbacksRepository implememts FeedbacksRepository {
	async create(data:FeedbackCreateData) {
		const repository = AppDataSource.getRepository(Feedback)
		const res = await repository.save(data)
		console.log(res)
		//await prisma.feedback.create({ data });
	}
}
