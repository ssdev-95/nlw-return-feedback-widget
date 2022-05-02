<script setup lang="ts">
//import { ref } from 'vue'
import {
  Popover, PopoverButton, PopoverPanel
} from '@headlessui/vue'


//defineProps<{ msg: string }>()

//const count = ref(0)
</script>

<template>
	<Popover class="h-100 w-50 bg-surface">
    <PopoverPanel>
	    <div>
		  	<h1 class="text-brand-def">LOL</h1>
			</div>
    </PopoverPanel>

    <div class="fixed bottom-5 right-5">
  		<PopoverButton class="flex relative items-center bg-brand-def hover:bg-brand-hover rounded-full text-brand-text px-3 h-12 group">
	     	<ph-chat-teardrop-dots class="h-6 w-6" />
				<span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
			  	<span class="pl-2"></span>
				  Feedback
				</span>
  		</PopoverButton>
		</div>
  </Popover>
</template>
