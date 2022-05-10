import {
	FeedbacksRepository
} from "../repositories/feedbacks-repository";

import { MailAdapter } from "../adapters/mail-adapter";

interface SubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	constructor(
		private repository:FeedbacksRepository,
		private adapter:MailAdapter
	) {}

	async exec(request:SubmitFeedbackUseCaseRequest) {
		const { type, comment, screenshot } = request;

		if (!type) {
			throw new Error("Type is required hrere");
		}

		if(!comment) {
			throw new Error("Comments is required hrere")
		}

		if(screenshot && !screenshot.startsWith("data:image/png;base64")) {
			throw new Error("Inavlid image format, not base64");
		}

		await this.repository.create({
			type, comment, screenshot
		});

		await this.adapter.sendMail({
			subject: "Don't reply. Feedback sent.",
			body: [
				'<div style="font-family:sans-serif; font-size:16px; color:#111;">',                                          
				`<p>Feedback type: ${type}`,
				`<p>Feedback comments: ${comment}`,
				`<img src="${screenshot}" alt="[${type}] Feedback's screenshot" />`,
				'</div>'
			].join("\n")
		});
	}
}
