import {
	FeedbacksRepository, FeedbackCreateData
} from "../feedbacks-repository";
import { AppDataSource } from '../../data-source';
import { Feedback } from '../../entity/Feedback';

export class OrmFeedbacksRepository implements FeedbacksRepository {
	async create(data:FeedbackCreateData) {
		const repository = AppDataSource.getRepository(Feedback)
		const res = await repository.save(data as unknown).catch(err=>console.log(err))
		//return res;
	}
}
