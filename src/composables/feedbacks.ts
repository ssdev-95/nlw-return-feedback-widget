import {
	PhGhost, PhLightbulb, PhWarningOctagon
} from "phosphor-vue";

import html2canvas from "html2canvas"

export const Feedbacks= {
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

export type IFeedbackType =	keyof typeof Feedbacks;

export type WidgetContentProps = {
	title: string;
	icon: typeof PhGhost;
};

export async function takeScreenshot() {
	const canvas = await html2canvas(document.body)
	const base64 = canvas.toDataURL()
	return base64;
}