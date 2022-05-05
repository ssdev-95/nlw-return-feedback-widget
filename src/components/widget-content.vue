<script setup lang="ts" >
import { ref, Ref } from 'vue'
import { PopoverPanel } from '@headlessui/vue'
import FeedbackTypes from './widget-feedback-types.vue'
import FeedbackForm from './widget-feedback-form.vue'
import { IFeedbackType, Feedbacks } from '../composables/feedbacks.ts'

type IFeedebackRef = IFeedbackType | null

const selectedType: Ref<IFeedebackRef> = ref(null)

function toggleType(type:IFeedebackRef) {
  selectedType.value = type
}
</script>

<template>
<PopoverPanel
 as="div"
 class="flex flex-col items-end justify-between w-[calc(100vw-2.5rem)] md:w-80 bg-brand-hover h-80 py-4 mb-8 text-brand-text rounded-xl"
>
	<FeedbackForm
	  v-if="selectedType"
		:feedback="Feedbacks[selectedType]"
		:reset="toggleType"
	/>
	<FeedbackTypes
		v-else
		:onClick="toggleType"
	/>
	<footer class="flex items-center justify-center w-full h-3">
	  <p>Made with 🧡 by <a href="https://git@github.com/xSallus" target="__blank" class="text-underline">xSallus&trade;</a></p>
	</footer>
</PopoverPanel>
</template>
