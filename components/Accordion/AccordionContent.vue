<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from "reka-ui";

type AccordionContentPropsExtended = AccordionContentProps & {
  class?: string;
};

const props = defineProps<AccordionContentPropsExtended>();
</script>

<template>
  <AccordionContent
    v-bind="props"
    :class="[
      'overflow-hidden text-sm text-muted transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      props.class,
    ]"
  >
    <div class="px-4 pb-4 pt-2">
      <slot />
    </div>
  </AccordionContent>
</template>

<style>
@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}

.animate-accordion-down {
  animation: accordion-down 0.2s ease-out;
}

.animate-accordion-up {
  animation: accordion-up 0.2s ease-out;
}
</style>
