<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, watch, ref, Ref } from 'vue'
import { Switch } from '@headlessui/vue'
import Widget from './components/widget.vue'

const key = "@feedbacker:theme"
const enabled:Ref<boolean> = ref(false)

function toggle () {
  document.querySelector('body').style.background = enabled.value ? "#111" : "#fff"
	localStorage.setItem(key, enabled.value ? 1 : 0)
}

onMounted(() => {
  const isDarkMode = localStorage.getItem(key);
	enabled.value = Boolean(isDarkMode)
})
watch(enabled, toggle)
</script>

<template>
 <div class="w-full flex items-center justify-center py-4">
	<Switch
	  v-model="enabled"
		:class="enabled ? 'bg-brand-def' : 'bg-brand-hover'"
		class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
	</Switch>
 </div>
  <Widget />
</template>
