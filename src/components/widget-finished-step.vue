<script setup lang="ts">
import CloseButton from './widget-close-button.vue'
import { PhCheckSquare } from 'phosphor-vue'
import { updateFeedbackStatus } from '../composables/feedbacks'
import { 
	Feedbacks,
	IFeedbackType
} from '../composables/types'
import { darkModeEnabled } from '../composables/theme'

function onClick() {
	updateFeedbackStatus("IDDLING")
}
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
	<CloseButton />
</header>
<div class="w-full flex flex-col gap-6 justify-center items-center py-4">
  <PhCheckSquare
	  weight="fill"
		class="relative text-[green] h-14 w-14"
	/>
	<p class="text-xl font-bold">Thanks for the feedback!</p>
  <button
		class="w-[75%] flex max-h-[2.5rem] rounded-md justify-center items-center py-[2rem]"
		:class="darkModeEnabled ? 'bg-[rgba(255,255,255,0.05)] text-brand-text' : 'bg-[rgba(5,5,43,0.05)] text-zinc-700'"
	  @click="onClick"
	>
	  <p>Send another feedback</p>
	</button>
</div>
</template>

