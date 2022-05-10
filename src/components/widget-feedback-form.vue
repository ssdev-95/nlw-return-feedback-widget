<script setup lang="ts">
import { PhCaretDoubleLeft } from 'phosphor-vue'

import CloseButton from './widget-close-button.vue'
import CameraButton from './widget-camera-button.vue'
import { darkModeEnabled } from '../composables/theme'

import {
	sendFeedback,
	updateFeedbackStatus,
	comment,
	screenshot,
	selectedType
} from '../composables/feedbacks'

import {
	Feedbacks
} from "../composables/types"

const feedback = Feedbacks[selectedType.value]

async function handleSubmit(e:Event) {
  e.preventDefault()
	
	const success = await sendFeedback(
	  selectedType.value, 
		comment.value,
		screenshot.value
	).catch((err)=>console.log(err));

	setTimeout(() => {
		updateFeedbackStatus(success ? "SENT" : "FAILED")
	}, 2000)
}
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
  <button
	  type="button"
		@click="() => updateFeedbackStatus('IDDLING')"
		class="absolute left-3"
	>
	  <PhCaretDoubleLeft class="h-6 w-6" />
	</button>
	<span class="text-bold text-2xl flex gap-2 text-md w-bold items-center">
	  <component
			:is="feedback.icon"
			color="orange"
			weight="duotone"
		/>
	  {{feedback.title}}
	</span>

	<CloseButton />
</header>
<form class="w-full flex flex-col gap-4 h-[calc(100%-5rem)] justify-center px-4" @submit="handleSubmit">
  <textarea
	  class="bg-transparent border-[1px] rounded-md flex-1 w-full border-brand-text placeholder:text-brand-def focus:text-[orange] focus:outline-0 focus:ring-0 focus:border-[orange] resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
		v-model="comment"
		:class="darkModeEnabled ? 'border-brand-def' : 'border-zinc-700'"
	  placeholder="Tell us whats goin' on.."
	/>
	<div class="w-full flex gap-4 justify-center bprder-1 border-brand-text">
		<CameraButton />
		<button
		  type="submit"
			:disabled="!comment.length"
			class="flex-1 py-3 rounded-md bg-brand-def text-brand-text disabled:opacity-50"
		>Send feedback</button>
	</div>
</form>
</template>

