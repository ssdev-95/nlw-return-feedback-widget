<script setup lang="ts">
import CloseButton from './widget-close-button.vue'
import {
  Feedbacks,
	IFeedbackType,
	feedbackStatus,
	toggleType,
	updateFeedbackStatus
} from '../composables/feedbacks.ts'
import { darkModeEnabled } from '../composables/theme.ts'

const keys = Object.keys(Feedbacks) as IFeedbackType[];

function handleClick(type:IFeedbackType) {
  //toggleType(type)
	alert(type)
	//updateFeedbackStatus("EDITING")
}
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
	<span class="text-bold text-xl">Havin' trouble?</span>

	<CloseButton />
</header>
<div class="w-full flex gap-4 justify-center px-4">
  <button
		class="flex-1 flex flex-col gap-2 rounded-md justify-center items-center py-[2rem]"
		:class="darkModeEnabled ? 'bg-[rgba(255,255,255,0.05)] text-brand-def' : 'bg-[rgba(5,5,43,0.05)] text-brand-def'"
		v-for="key of keys"
		:key="key"
		@click="()=>handleClick(key)"
	>
	  <component :is="Feedbacks[key].icon" class="w-8 h-8" weight="duotone" />
	  <p>{{Feedbacks[key].title}}</p>
	</button>
</div>
</template>

