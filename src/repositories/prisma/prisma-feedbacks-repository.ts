import {
	FeedbacksRepository, FeedbackCreateData
} from "../feedbacks-repository";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implememts FeedbacksRepository {
	create(data:FeedbackCreateData) {
		await prisma.feedback.create({ data });
	}
}
