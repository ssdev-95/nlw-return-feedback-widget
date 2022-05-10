import { ref, Ref } from 'vue'
import { api } from './api.ts'

import {
	PhGhost, PhLightbulb, PhWarningOctagon
} from "phosphor-vue";

import html2canvas from "html2canvas"

import {
	Feedbacks,
	IFeedbackType,
	IFeedbackStatus,
	IFeedbackResponse,
	ISendFeedbackFunction,
	WidgetContentProps
} from "./types.ts"

const feedbackStatus:Ref<IFeedbackStatus> = "IDDLING"

const hasSentFeedback: Ref<boolean> = ref(false)
const screenshot: Ref<strig> = ref('')

function updateFeedbackStatus(status:IFeedbackStatus) {
	feedbackStatus.value = status
}

async function takeScreenshot() {
	const canvas = await html2canvas(document.body)
	const base64 = canvas.toDataURL()
	screenshot.value = base64
	return base64;
}

const selectedType: Ref<IFeedbackType> = ref("BUG")
function toggleType(type:IFeedebackRef) {/*
	selectedType.value = type ?? "BUG"
	if(feedbackStatus.value !== "EDITING") {
	  feedbackStatus.value = "EDITING"          
  }
	*/alert(type)
}

const sendFeedback:ISendFeedbackFunction = async (
	type, comment, screenshot
) => {
	console.log({
		type,
		comment,
		screenshot
  })
	/*const { data } = await api.post<IFeedbackResponse>(
		"/feedbacks",
		{ comment, screenshot, type }
	)

	return data.success;*/
 return true;
}

export {
	Feedbacks,
	IFeedbackType,
	IFeedbackStatus,                            
	IFeedbackResponse,                      
	ISendFeedbackFunction,
	WidgetContentProps,

	feedbackStatus,
	hasSentFeedback,
	screenshot,
	takeScreenshot,
	sendFeedback,
	updateFeedbackStatus,
	toggleType,
	selectedType
}
