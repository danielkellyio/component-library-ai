<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from "reka-ui";

type AccordionItemPropsExtended = AccordionItemProps & {
  class?: string;
};

const props = defineProps<AccordionItemPropsExtended>();
</script>

<template>
  <AccordionItem
    v-bind="props"
    :class="['border-b border-border last:border-b-0', props.class]"
  >
    <slot />
  </AccordionItem>
</template>

<style scoped>
.border-border {
  border-color: var(--color-border);
}
</style>
