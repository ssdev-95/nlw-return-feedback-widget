import {
	PhGhost, PhLightbulb, PhWarningOctagon
} from "phosphor-vue";

export const Feedbacks = {
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

export type IFeedbackType = keyof typeof Feedbacks;

export type IFeedbackStatus = "IDDLING" | "EDITING" | "SENT" | "FAILED";

export type WidgetContentProps = {
	title: string;
	icon: typeof PhGhost;
};

export interface IFeedbackResponse {
	success: boolean;
}

export type ISendFeedbackFunction = (
	type: IFeedbackType,
	comment: string,
	screenshot: string
) => Promise<boolean>
