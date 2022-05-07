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
			comment: "Its getting worse",
			screenshot: "data:image/png;base64,aisujsjskdkkdkdk"
		})).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();
	})

	it(
		'should not be able to submit a feedback with no type',
		 async ()=>{
			 await expect(useCase.exec({
				type: "",
				comment: "Its getting worse",
				screenshot: "data:image/png;base64aisujsjskdkkdk"
			 })).rejects.toThrow();
		 }
	)

	it(
		'should not be able to submit a feedback with no comments',
		async ()=>{
			await expect(useCase.exec({
				type: "BUG",
				comment: "",
				screenshot: "data:image/png;base64aisujsjskdkkdk"  
			})).rejects.toThrow();
		} 
	)

	it(
		'should not be able to submit a feedback with invalid srennshot',
		async ()=>{
			await expect(useCase.exec({
				type: "BUG",
				comment: "",
				screenshot: "aisujsjskdkkdk"
			})).rejects.toThrow();
		}
	)
});
