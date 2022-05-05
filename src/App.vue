<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, watch } from 'vue'
import { Switch } from '@headlessui/vue'
import Widget from './components/widget.vue'
import { darkModeEnabled, persistTheme, key } from './composables/theme.ts'

/*onMounted(() => {
  const isDarkMode = localStorage.getItem(key);
	const hasTheme = isDarkMode!==undefined||isDarkMode!==null
	if(hasTheme) {
		darkModeEnabled.value = Boolean(isDarkMode);
	} else {
		darkModeEnabled.value = true;
	}
})*/
watch(darkModeEnabled, persistTheme)
</script>

<template>
<div
	class="w-[100vw] h-[100vh]"
	:class="darkModeEnabled ? 'bg-zinc-900' : 'bg-white'"
>
 <div class="w-full flex items-center justify-center py-4">
	<Switch
	  v-model="darkModeEnabled"
		:class="darkModeEnabled ? 'bg-brand-def' : 'bg-brand-hover'"
		class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="darkModeEnabled ? 'translate-x-9' : 'translate-x-0'"
        class="inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
	</Switch>
 </div>
  <Widget />
</div>
</template>
