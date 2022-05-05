<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import { PhX, PhCheckSquare } from 'phosphor-vue'
import {
	Feedbacks,
	IFeedbackType,
	hasSentFeedback
} from '../composables/feedbacks.ts'
import { darkModeEnabled } from '../composables/theme.ts'

const { reset } = defineProps<{
  reset: (type: IFeedbackType|null) => void;
}>()

function onClick() {
	reset()
	hasSentFeedback.value = false
}
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
	<PopoverButton class="absolute right-3">
		<PhX class="h-6 w-6" />
	</PopoverButton>
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
	  @click="()=>onClick(null)"
	>
	  <p>Send another feedback</p>
	</button>
</div>
</template>

