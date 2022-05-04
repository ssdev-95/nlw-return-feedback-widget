import {
	FeedbacksRepository
} from "../repositories/feedbacks-repositories";

import { MailAdapter } from "../adapters/mail-adapter";

interface SubmitFeedbackUseCaseRequest {
	type: string;
	comments: string;
	screenshot?: string;
	user?: string;
}

export class SubmitFeedbackUseCase {
	constructor(
		private repository:FeedbacksRepository
		private adapter:MailAdapter
	) {}

	async exec(request:SubmitFeedbackUseCaseRequest) {
		const { type, comments, screenshot, user } = request;

		await this.repository.create({
			type, comments, screenshot, user
		});

		await this.adapter.sendMail({
			subject: "Don't reply. Feedback sent.",
			body: [
				'<div style="font-family:sans-serif; font-size:16px; color:#111;">',                                          
				`<p>Feedback type: ${type}`,
				`<p>Feedback comments: ${comments}`,     
				'</div>'
			].join("\n")
		});
	}
}
