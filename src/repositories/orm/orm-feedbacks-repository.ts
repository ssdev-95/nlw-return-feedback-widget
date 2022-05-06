import {
	FeedbacksRepository, FeedbackCreateData
} from "../feedbacks-repository";
import { Feedback, AppDataSource } from '../../data-source';
//import { prisma } from "../../prisma";

export class OrmFeedbacksRepository implements FeedbacksRepository {
	async create(data:FeedbackCreateData) {
		const repository = AppDataSource.getRepository(Feedback)
		const res = await repository.save(data as unknown)
		console.log(res)
		//await prisma.feedback.create({ data });
	}
}
