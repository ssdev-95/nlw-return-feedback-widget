<script setup lang="ts">
import { Ref, ref, watch } from 'vue'
import { PhCamera, PhCircleNotch } from 'phosphor-vue'

interface CameraButtonProps {
	preview: string;
	handleClick: () => void;
}
const { handleClick:onPress } = defineProps<CameraButtonProps>()
const isTakingScreenshot:Ref<boolean> = ref(false)

function handlePress() {
  onPress()
	isTakingScreenshot.value = true
}

watch(isTakingScreenshot, () => {
	setTimeout(() => {
	  isTakingScreenshot.value = false
	}, 2500)
})
</script>

<template>
<button
	type="button"
	class="py-3 px-4 flex items-center justify-center rounded-md active:text-[orange] active:bg-[rgba(0,0,0,0.18)] lg:hover:bg-[rgba(0,0,0,0.18)]"
	:disabled="isTakingScreenshot"
	@click="handlePress"
>
  <PhCircleNotch
    class="text-brand-hover h-6 w-6 motion-safe:animate-spin duration-200 ease-ez"
    v-if="isTakingScreenshot"
	/>
	<PhCamera v-else class="h-6 w-6" />
</button>
</template>
