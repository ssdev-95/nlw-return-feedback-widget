<script setup lang="ts">
//import { ref } from 'vue'
import {
  Popover, PopoverButton, PopoverPanel
} from '@headlessui/vue'


//defineProps<{ msg: string }>()

//const count = ref(0)
</script>

<template>
	<Popover>
    <PopoverPanel class="flex item-center mx-auto bg-green-500">
			<h1>LOL</h1>
    </PopoverPanel>

    <div class="absolute bottom-2 right-8">
  		<PopoverButton class="flex relative items-center bg-violet-500 rounded-full text-white px-3 h-11">
	     	<ph-chat-teardrop-dots class="text-lg" />
  		</PopoverButton>
		</div>
  </Popover>
</template>
