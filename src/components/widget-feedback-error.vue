<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import { PhX, PhWarningOctagon } from 'phosphor-vue'
import {
	Feedbacks,
	IFeedbackType,
	hasSentFeedback,
	feedbackStatus
} from '../composables/feedbacks.ts'
import { darkModeEnabled } from '../composables/theme.ts'

const { reset } = defineProps<{
  reset: (type: IFeedbackType|null) => void;
}>()

function onClick() {
	reset(null)
	hasSentFeedback.value = false
	feedbackStatus.value = "IDDLING"
}
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
	<PopoverButton
	  class="absolute right-3"
		@click="onClick"
	>
		<PhX class="h-6 w-6" />
	</PopoverButton>
</header>
<div class="w-full flex flex-col gap-6 justify-center items-center py-4">
  <PhWarningOctagon
	  weight="duotone"
		class="relative h-14 w-14"
		:class="darkModeEnabled ? 'text-[tomato]' : 'text-[red]'"
	/>
	<p class="text-xl font-bold max-w-[70%] text-center">Something went wrong, please try again later.</p>
  <button
		class="w-[75%] flex max-h-[2.5rem] rounded-md justify-center items-center py-[2rem]"
		:class="darkModeEnabled ? 'bg-[tomato] text-brand-text' : 'bg-[red] text-zinc-700'"
	  @click="onClick"
	>
	  <p class="text-[white] font-bold">Go back.</p>
	</button>
</div>
</template>

