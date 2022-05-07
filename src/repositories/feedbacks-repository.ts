export interface FeedbackCreateData {
  type: string;
	comment: string;
	screenshot?: string;
}

export interface FeedbackCreateReponse extends FeedbackCreateData {
	id: string;
}

export interface FeedbacksRepository {
	create: (data: FeedbackCreateData) => Promise<void>;
}
