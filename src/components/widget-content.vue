<script setup lang="ts" >
import {
  PopoverPanel, PopoverButton
} from '@headlessui/vue'
import type { WidgetContentProps } from '../types.ts'

/*export type WidgetContentProps = {
  title: string;
};*/

const { title } = defineProps<WidgetContentProps>()
</script>

<template>
<PopoverPanel
 as="div"
 class="flex flex-col items-end justify-between w-[calc(100vw-2.5rem)] md:w-80 bg-brand-hover h-80 py-4 mb-8 text-brand-text rounded-xl"
>
	<header class="flex items-center justify-center w-full h-3 relative">
		<span>Havin trouble?</span>
		<PopoverButton class="absolute right-3">
		  <ph-x class="h-6 w-6" />
		</PopoverButton>
	</header>
	<div class=" flex w-full justify-center px-4">
	  <p>{{title}}</p>
	</div>
	<footer class="flex items-center justify-center w-full h-3">
	  <p>Made with 🧡 by xSallus&trade;</p>
	</footer>
</PopoverPanel>
</template>
