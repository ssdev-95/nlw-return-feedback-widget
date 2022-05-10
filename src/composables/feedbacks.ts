import { ref, Ref } from 'vue'
import { api } from './api'

import html2canvas from "html2canvas"

import {
	IFeedbackType,
	IFeedbackStatus,
	ISendFeedbackFunction,
	IFeedbackResponse
} from "./types"

export const feedbackStatus: Ref<IFeedbackStatus> = ref("IDDLING")
export const selectedType: Ref<IFeedbackType> = ref("BUG")

export const comment: Ref<string> = ref('')
export const screenshot: Ref<string> = ref('')

export function updateFeedbackStatus(status:IFeedbackStatus) {
	feedbackStatus.value = status
}

export async function takeScreenshot() {
	const canvas = await html2canvas(document.body)
	const base64 = canvas.toDataURL()
	screenshot.value = base64
}

export function toggleType(type:IFeedbackType) {
	selectedType.value = type ?? "BUG"
	if(feedbackStatus.value !== "EDITING") {
	  feedbackStatus.value = "EDITING"          
  }
}

export const sendFeedback:ISendFeedbackFunction = async (
	type, comment, screenshot
) => {
	const { data } = await api.post<IFeedbackResponse>(
		"/feedbacks",
		{ comment, screenshot, type }
	)

	return data.success;
}
