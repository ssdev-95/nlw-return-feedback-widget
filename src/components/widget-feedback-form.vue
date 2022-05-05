<script setup lang="ts">
import { defineProps, ref, Ref } from 'vue'
import { PopoverButton } from '@headlessui/vue'
import { PhX, PhCaretDoubleLeft } from 'phosphor-vue'
import CameraButton from './widget-camera-button.vue'
import {
  IFeedbackType, WidgetContentProps, takeScreenshot, hasSentFeedback
} from '../composables/feedbacks'
import { darkModeEnabled } from '../composables/theme.ts'

interface IFeedbackFormProps {
	feedback: WidgetContentProps;
	reset: (type: IFeedbackType|null) => void;
}

const { feedback, reset } = defineProps<IFeedbackFormProps>()

const comment: Ref<string> = ref('')
const screenshot: Ref<string> = ref('')

function handleShot() {
  takeScreenshot().then(image => {
	  screenshot.value = image
	})
}

function handleSubmit(e:Event) {
  e.preventDefault()
  console.log(comment.value)

	setTimeout(() => {
		hasSentFeedback.value = true;
	}, 2000)
}
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
  <button
	  type="button"
		class="absolute left-3"
		@click="()=>reset(null)"
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

	<PopoverButton class="absolute right-3">
		<PhX class="h-6 w-6" />
	</PopoverButton>
</header>
<form class="w-full flex flex-col gap-4 h-[calc(100%-5rem)] justify-center px-4" @submit="handleSubmit">
  <textarea
		v-model="comment"
	  class="bg-transparent border-[1px] rounded-md flex-1 w-full border-brand-text placeholder:text-brand-def focus:text-[orange] focus:outline-0 focus:ring-0 focus:border-[orange]"
		:class="darkModeEnabled ? 'border-brand-def' : 'border-zinc-700'"
	  placeholder="Tell us whats goin' on.."
	/>
	<div class="w-full flex gap-4 justify-center bprder-1 border-brand-text">
		<CameraButton :handleClick="handleShot" :preview="screenshot.value" />
		<button
		  type="submit"
			:disabled="!comment.length"
			class="flex-1 py-3 rounded-md bg-brand-def text-brand-text disabled:opacity-50"
		>Send feedback</button>
	</div>
</form>
</template>

