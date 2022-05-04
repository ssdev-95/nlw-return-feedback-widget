export const FEEDBACKS = {
	BUG: {
		title: 'Trouble'
	},
	IDEA: {
		title: 'Idea'
	},
	OTHER: {
		title: 'Other'
	}
}

export type FeedbackType = typeof	keysof FEEDBACKS | null;

export type WidgetContentProps = {
	title: string;
};
