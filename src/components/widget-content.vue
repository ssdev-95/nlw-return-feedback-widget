<script setup lang="ts" >
import { PopoverPanel } from '@headlessui/vue'
import FeedbackTypes from "./widget-feedback-types.vue"
</script>

<template>
<PopoverPanel
 as="div"
 class="flex flex-col items-end justify-between w-[calc(100vw-2.5rem)] md:w-80 bg-brand-hover h-80 py-4 mb-8 text-brand-text rounded-xl"
>
	<FeedbackTypes />
	<footer class="flex items-center justify-center w-full h-3">
	  <p>Made with 🧡 by xSallus&trade;</p>
	</footer>
</PopoverPanel>
</template>
