<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "success"
    | "warning"
    | "error"
    | "info";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  class?: string;
  rounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
  type: "button",
  rounded: false,
});

const baseClasses = computed(() => [
  "inline-flex items-center justify-center font-medium transition-all duration-200",
  "focus:outline-none focus:ring-2 focus:ring-offset-2",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  {
    "rounded-md": !props.rounded,
    "rounded-full": props.rounded,
    // Size variants
    "px-3 py-1 text-xs": props.size === "sm",
    "px-4 py-2 text-sm": props.size === "md",
    "px-5 py-2.5 text-base": props.size === "lg",
    // Style variants
    "bg-base-300 text-base-content hover:bg-base-200 focus:ring-base-200":
      props.variant === "default",
    "bg-primary text-primary-content hover:bg-primary/90 active:bg-primary/80 focus:ring-primary/30":
      props.variant === "primary",
    "bg-secondary text-secondary-content hover:bg-secondary/90 active:bg-secondary/80 focus:ring-secondary/30":
      props.variant === "secondary",
    "bg-accent text-accent-content hover:bg-accent/90 active:bg-accent/80 focus:ring-accent/30":
      props.variant === "accent",
    "bg-neutral text-neutral-content hover:bg-neutral/90 active:bg-neutral/80 focus:ring-neutral/30":
      props.variant === "neutral",
    "bg-info text-info-content hover:bg-info/90 active:bg-info/80 focus:ring-info/30":
      props.variant === "info",
    "bg-success text-success-content hover:bg-success/90 active:bg-success/80 focus:ring-success/30":
      props.variant === "success",
    "bg-warning text-warning-content hover:bg-warning/90 active:bg-warning/80 focus:ring-warning/30":
      props.variant === "warning",
    "bg-error text-error-content hover:bg-error/90 active:bg-error/80 focus:ring-error/30":
      props.variant === "error",
  },
  props.class,
]);
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled || props.loading"
    :class="baseClasses"
  >
    <span
      v-if="props.loading"
      class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-content/30 border-t-primary-content"
    />
    <slot name="before" />
    <slot />
    <slot name="after" />
  </button>
</template>
