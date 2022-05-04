import {  Router, Request, Response } from "express";
import { prisma } from "./prisma";
import { transport, DESTINATARY } from "./nodemailer";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

const router = Router();

router.post(
	'/feedbacks',
	async (req:Request, res:Response) => {
		const { type, comments, screenshot, user } = req.body;
		const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
		const nodeMailerAdapter = new NodemailerMailAdapter();
		const feedbackUseCase = new SubmitFeedbackUseCase(
			prismaFeedbacksRepository,
			nodeMailerAdapter
		);

		await feedbackUseCase.exect({
			type, comments, screenshot, user
		});

		/*const feedback = await prisma.feedback.create({
			data: { type, comments, screenshot, user	}
		});*/

		return res.status(201).send();
	}
)

export { router };
