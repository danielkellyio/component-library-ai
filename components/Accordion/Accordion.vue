<script setup lang="ts">
import { AccordionRoot, type AccordionRootProps } from "reka-ui";
import { useForwardExpose } from "reka-ui";

type AccordionProps = AccordionRootProps;

const props = defineProps<AccordionProps>();

useForwardExpose();
</script>

<template>
  <AccordionRoot
    v-bind="props"
    class="w-full rounded-lg border border-border bg-surface"
  >
    <slot />
  </AccordionRoot>
</template>

<style scoped>
/* Using a CSS variable from the theme for border color if needed in style tags */
.border-border {
  border-color: var(--color-border);
}
.bg-surface {
  background-color: var(--color-surface);
}
</style>
