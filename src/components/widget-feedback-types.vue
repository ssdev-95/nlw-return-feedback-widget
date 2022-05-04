<script setup lang="ts">
import { PopoverButton } from '@headlessui/vue'
import { PhX } from "phosphor-vue"
//import { FEEDBACKS } from "../types.ts"

const FEEDBACKS = {
	BUG: {
		title: 'Trouble'
	},
	IDEA: {
		title: 'Idea'
	},
	OTHER: {
		title: 'Other'                          
	}
}

const keys = Object.keys(FEEDBACKS);
</script>

<template>
<header class="flex items-center justify-center w-full h-3 relative">
	<span>Havin' trouble?</span>

	<PopoverButton class="absolute right-3">
		<PhX class="h-6 w-6" />
	</PopoverButton>
</header>
<div class="w-full flex gap-4 justify-center px-4">
  <button class="flex-1 flex items-center bg-brand-hover" v-for="key of keys" :key="key">
	  <p>{{FEEDBACKS[key].title}}</p>
	</button>
</div>
</template>

