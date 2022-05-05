<script setup lang="ts">
import { defineProps } from 'vue'
import { PopoverButton } from '@headlessui/vue'
import { PhX, PhCheckSquare } from 'phosphor-vue'
import { Feedbacks, IFeedbackType } from '../composables/feedbacks.ts'
import { darkModeEnabled } from '../composables/theme.ts'

const { onClick } = defineProps<FeedbackTypeProps>()
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
	<PopoverButton class="absolute right-3">
		<PhX class="h-6 w-6" />
	</PopoverButton>
</header>
<div class="w-full flex flex-col gap-4 justify-center items-center px-4">
  <PhCheckSquare
	  weight="fill"
		class="text-[green] h-10 w-10"
	/>
	<p class="text-8 text-bold">Thanks for the feedback!</>
  <button
		class="flex-1 flex flex-col gap-2 rounded-md justify-center items-center py-[2rem]"
		:class="darkModeEnabled ? 'bg-[rgba(255,255,255,0.05)] text-brand-def' : 'bg-[rgba(5,5,43,0.05)] text-brand-def'"
	  @click="()=>onClick(null)"
	>
	  <p>Send another feedback</p>
	</button>
</div>
</template>

