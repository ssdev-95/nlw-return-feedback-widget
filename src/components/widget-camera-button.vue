<script setup lang="ts">
import { defineProps } from 'vue'
import { PhCamera } from 'phosphor-vue'

interface CameraButtonProps {
	preview: string;
	handleClick: () => void;
}

const { handleClick, preview } = defineProps<CameraButtonProps>()
</script>

<template>
<img
	v-if="preview"
	:src="preview"
	alt="Preview of taken screenshot"
/>
<button
	v-else
	type="button"
	class="py-3 px-4 flex items-center justify-center rounded-md active:text-[orange] active:bg-[rgba(0,0,0,0.18)] lg:hover:bg-[rgba(0,0,0,0.18)]"
	@click="handleClick"
>
	<PhCamera class="h-6 w-6" />
</button>
</template>
