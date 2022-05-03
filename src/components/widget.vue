<script setup lang="ts">
//import { ref } from 'vue'
import {
  Popover, PopoverButton, PopoverPanel
} from '@headlessui/vue'


//defineProps<{ msg: string }>()

//const count = ref(0)
</script>

<template>
	<Popover class="fixed bottom-5 right-5">
    <PopoverPanel as="div" class="flex w-50 bg-green-300 h-12">
	    <h1 class="text-brand-def">LOL</h1>
    </PopoverPanel>

  	<PopoverButton class="flex relative items-center bg-brand-def hover:bg-brand-hover rounded-full text-brand-text px-3 h-12 group">
	   	<ph-chat-teardrop-dots class="h-6 w-6" />
			<span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-ezr">
		    <span class="pl-2"></span>
			  Feedback
			</span>
  	</PopoverButton>
  </Popover>
</template>
