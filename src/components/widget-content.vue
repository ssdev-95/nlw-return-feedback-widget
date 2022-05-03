<script lang="ts" >
import { PopoverPanel } from '@headlessui/vue'
//import { WidgetContentProps } from '../types.d.ts'

type WidgetContentProps = {
  title: string;
}

const { title } = defineProps<WidgetContentProps>()
</script>

<template>
<PopoverPanel
 as="div"
 class="flex w-50 bg-green-300 h-12"
>
 <h1 class="text-brand-def">{{title}}</h1>
</PopoverPanel>
</template>
