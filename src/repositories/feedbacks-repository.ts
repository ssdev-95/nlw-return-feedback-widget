export interface FeedbackCreateData {
  type: string;
	comments: string;
	screenshot?: string;
	user?: string;
}

export interface FeedbackCreateReponse extends FeedbackCreateData {
	id: string;
}

export interface FeedbacksRepository {
	create: (data: FeedbackCreateData) => Promise<void>;
}
