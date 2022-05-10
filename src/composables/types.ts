const Feedbacks = {
	BUG: {
		title: 'Trouble',
		icon: PhWarningOctagon
	},
	IDEA: {
		title: 'Idea',
		icon: PhLightbulb
	},
	OTHER: {
		title: 'Other',
		icon: PhGhost
	}
}

type IFeedbackType = keyof typeof Feedbacks;

type IFeedbackStatus = "IDDLING" | "EDITING" | "SENT" | "FAILED";

type WidgetContentProps = {
	title: string;
	icon: typeof PhGhost;
};

interface IFeedbackResponse {
	data: { success: boolean }
}

type ISendFeedbackFunction = (
	type: IFeedbackType,
	comment: string,
	screenshot: string
) => Promise<boolean>


export {
	Feedbacks,
	IFeedbackType,
	IFeedbackStatus,
	IFeedbackResponse,
	ISendFeedbackFunction,
	WidgetContentProps
}
