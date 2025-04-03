<script setup lang="ts">
import { computed } from "vue";

export type CardVariant = "default" | "bordered" | "elevated";

interface Props {
  variant?: CardVariant;
  class?: string;
  hover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  hover: false,
});

const baseClasses = computed(() => [
  "rounded-lg overflow-hidden",
  "backdrop-blur-sm",
  "transition-all duration-200",
  props.class,
  {
    "bg-base-100 border border-base-200": props.variant === "default",
    "bg-base-100 border-2 border-primary/30": props.variant === "bordered",
    "bg-base-100 shadow-lg": props.variant === "elevated",
    "hover:shadow-xl hover:bg-base-200 hover:scale-[1.01]": props.hover,
  },
]);
</script>

<template>
  <div :class="baseClasses">
    <slot />
  </div>
</template>
