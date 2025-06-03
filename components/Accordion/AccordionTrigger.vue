<script setup lang="ts">
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "reka-ui";

type AccordionTriggerPropsExtended = AccordionTriggerProps & {
  class?: string;
};

const props = defineProps<AccordionTriggerPropsExtended>();
</script>

<template>
  <AccordionHeader class="flex w-full">
    <AccordionTrigger
      v-bind="props"
      :class="[
        'flex w-full flex-1 items-center justify-between px-4 py-3 text-left font-medium text-text transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface ',
        props.class,
      ]"
    >
      <slot />
      <Icon
        name="lucide:chevron-down"
        class="h-5 w-5 shrink-0 text-muted transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] [&[data-state=open]]:rotate-180"
      />
    </AccordionTrigger>
  </AccordionHeader>
</template>
