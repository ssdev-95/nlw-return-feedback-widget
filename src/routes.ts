import {  Router, Request, Response } from "express";
import { transport, DESTINATARY } from "./nodemailer";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { OrmFeedbacksRepository } from "./repositories/orm/orm-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

const router = Router();

router.post(
	'/feedbacks',
	async (req:Request, res:Response) => {
		const { type, comment, screenshot } = req.body;
		const ormFeedbacksRepository = new OrmFeedbacksRepository();
		const nodeMailerAdapter = new NodemailerMailAdapter();
		const feedbackUseCase = new SubmitFeedbackUseCase(
		  ormFeedbacksRepository,
			nodeMailerAdapter
		);

		let err: unknown;
		await feedbackUseCase.exec({
			type, comment, screenshot
		}).catch(error => {
			err = error
		});

	 if (err) {
		 return res.status(666).json({ success: false })
	 }

		return res.status(201).json({ success: true });
	}
)

export { router };
