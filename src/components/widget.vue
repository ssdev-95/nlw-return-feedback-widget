<script setup lang="ts">
//import { ref } from 'vue'
import {
  Popover, PopoverButton
} from '@headlessui/vue'
import { PhChatTeardropDots } from "phosphor-vue";
import WidgetContent from "./widget-content.vue"
</script>

<template>
	<Popover class=" flex flex-col items-end fixed bottom-5 right-5">
    <WidgetContent title="LOL" />

  	<PopoverButton class="flex relative items-center bg-brand-def hover:bg-brand-hover rounded-full text-brand-text px-3 h-12 group">
	   	<PhChatTeardropDots class="h-6 w-6" />
			<span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-ezr">
		    <span class="pl-2"></span>
			  Feedback
			</span>
  	</PopoverButton>
  </Popover>
</template>
