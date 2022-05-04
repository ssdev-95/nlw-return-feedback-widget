import { MailAdapter, SendMailData } from "../mail-adapter";import { transport, DESTINATARY } from "../../nodemailer";

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail ({subject, body}:SendMailData) {
		await transport.sendMail({
			from: "Equipe feedbacker <oi@feedbacker.dev>",
			to: `xSallus <${DESTINATARY}>`,
			subject,
			html: body   
		});
	}
}
