<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import { PhX } from 'phosphor-vue'
import { Feedbacks, IFeedbackType } from '../composables/feedbacks.ts'
import { darkModeEnabled } from '../composables/theme.ts'

interface FeedbackTypeProps {
  onClick: (type: IFeedbackType|null) => void;
}

const keys = Object.keys(Feedbacks);
const { onClick } = defineProps<FeedbackTypeProps>()
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
	<span class="text-bold text-xl">Havin' trouble?</span>

	<PopoverButton class="absolute right-3">
		<PhX class="h-6 w-6" />
	</PopoverButton>
</header>
<div class="w-full flex gap-4 justify-center px-4">
  <button
		class="flex-1 flex flex-col gap-2 rounded-md justify-center items-center py-[2rem]"
		:class="darkModeEnabled ? 'bg-[rgba(255,255,255,0.05)] text-brand-def' : 'bg-[rgba(5,5,43,0.05)] text-brand-def'"
		v-for="key of keys"
		:key="key"
		@click="()=>onClick(key)"
	>
	  <component :is="Feedbacks[key].icon" class="w-8 h-8" weight="duotone" />
	  <p>{{Feedbacks[key].title}}</p>
	</button>
</div>
</template>

