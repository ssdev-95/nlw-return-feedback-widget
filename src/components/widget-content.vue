<script setup lang="ts" >
import { ref, Ref } from 'vue'
import { PopoverPanel } from '@headlessui/vue'
import { IFeedbackType, Feedbacks, hasSentFeedback } from '../composables/feedbacks'
import FeedbackTypes from './widget-feedback-types.vue'
import FeedbackForm from './widget-feedback-form.vue'
import FeedbackSent from './widget-finished-step.vue'
import { darkModeEnabled } from '../composables/theme'

type IFeedebackRef = IFeedbackType | null

const selectedType: Ref<IFeedebackRef> = ref(null)

function toggleType(type:IFeedebackRef) {
  selectedType.value = type
}
</script>

<template>
<PopoverPanel
 as="div"
 class="flex flex-col shadow-lg items-end justify-between w-[calc(100vw-2.5rem)] md:w-80 h-80 py-4 mb-8 rounded-xl"
 :class="darkModeEnabled ? 'bg-zinc-900 shadow-white/40 text-brand-text' : 'bg-white shadow-zinc-900/40 text-zinc-600'"
>
	<FeedbackForm
	  v-if="selectedType && !hasSentFeedback"
		:feedback="Feedbacks[selectedType]"
		:reset="toggleType"
	/>
	<FeedbackSent
		v-else-if="hasSentFeedback"
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
