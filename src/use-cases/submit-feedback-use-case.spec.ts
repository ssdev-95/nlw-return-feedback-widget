import {
	SubmitFeedbackUseCase
} from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const useCase = new SubmitFeedbackUseCase(
	{ create: createFeedbackSpy },
	{ semdMail: sendMailSpy }
)

describe("Feedback submiting", () => {
	it('should be able to submit a feedback', async ()=>{
		await expect(useCase.exec({
			type: "BUG",
			comments: "Its getting worse",
			screenshot: "data:image/png;base64,aisujsjskdkkdkdk",
			user: "Mixto-Quente"
		})).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();
	})

	it(
		'should not be able to submit a feedback with no type',
		 async ()=>{
			 await expect(useCase.exec({
				type: "",
				comments: "Its getting worse",
				screenshot: "data:image/png;base64aisujsjskdkkdk",  
				user: "Mixto-Quente"
			 })).rejects.toThrow();
		 }
	)

	it(
		'should not be able to submit a feedback with no comments',
		async ()=>{
			await expect(useCase.exec({
				type: "BUG",
				comments: "",
				screenshot: "data:image/png;base64aisujsjskdkkdk",
				user: "Mixto-Quente"      
			})).rejects.toThrow();
		} 
	)

	it(
		'should not be able to submit a feedback with invalid srennshot',
		async ()=>{
			await expect(useCase.exec({
				type: "BUG",
				comments: "",
				screenshot: "aisujsjskdkkdk",
				user: "Mixto-Quente"
			})).rejects.toThrow();
		}
	)
});
