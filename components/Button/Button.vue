<script setup lang="ts">
import { computed, ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

interface Props {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
  type: "button",
});

const buttonRef = ref<HTMLButtonElement | null>(null);
const { elementX: mouseX, elementY: mouseY } = useMouseInElement(buttonRef);

const mousePosition = computed(() => ({
  "--mouse-x": `${mouseX.value}px`,
  "--mouse-y": `${mouseY.value}px`,
}));

const baseClasses = computed(() => [
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 relative overflow-hidden",
  "focus:outline-none focus:ring-2 focus:ring-offset-2",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  "backdrop-blur-sm shadow-lg",
  // Size variants
  {
    "px-3 py-1.5 text-sm": props.size === "sm",
    "px-4 py-2 text-base": props.size === "md",
    "px-6 py-3 text-lg": props.size === "lg",
  },
  // Style variants
  {
    "bg-gradient-to-br from-primary-500/90 via-primary-600/90 to-primary-700/90 text-white hover:from-primary-600/90 hover:via-primary-700/90 hover:to-primary-800/90 focus:ring-primary-500 hover:shadow-primary-500/20 hover:shadow-xl border border-white/10":
      props.variant === "primary",
    "bg-gradient-to-br from-secondary-500/90 via-secondary-600/90 to-secondary-700/90 text-white hover:from-secondary-600/90 hover:via-secondary-700/90 hover:to-secondary-800/90 focus:ring-secondary-500 hover:shadow-secondary-500/20 hover:shadow-xl border border-white/10":
      props.variant === "secondary",
    "bg-white/10 border-2 border-primary-500/50 text-primary-600 hover:bg-primary-50/20 focus:ring-primary-500 hover:shadow-primary-500/20 hover:shadow-lg":
      props.variant === "outline",
    "bg-white/5 text-primary-600 hover:bg-primary-50/20 focus:ring-primary-500 hover:shadow-primary-500/10 hover:shadow-lg":
      props.variant === "ghost",
  },
]);
</script>

<template>
  <button
    ref="buttonRef"
    :type="type"
    :disabled="disabled || loading"
    :class="baseClasses"
    :style="mousePosition"
  >
    <div class="light-effect" />

    <span
      v-if="loading"
      class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-200 border-t-primary-600"
    >
      <Icon name="heroicons:arrow-path" class="h-4 w-4" />
    </span>
    <slot name="before" />
    <slot />
    <slot name="after" />
  </button>
</template>

<style scoped>
.light-effect {
  pointer-events: none;
  position: absolute;
  inset: -100%;
  opacity: 0;
  transition: opacity 0.2s ease;
  background: radial-gradient(
    circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(255, 255, 255, 0.4) 0%,
    transparent 60%
  );
  mix-blend-mode: soft-light;
}

button:hover .light-effect {
  opacity: 1;
}

/* Ensure the button contents stay above the light effect */
button {
  isolation: isolate;
}

.light-effect {
  z-index: 1;
}

slot {
  z-index: 2;
  position: relative;
}
</style>
