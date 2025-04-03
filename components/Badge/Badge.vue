<script setup lang="ts">
import { computed } from "vue";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "info";
export type BadgeSize = "sm" | "md" | "lg";

interface Props {
  variant?: BadgeVariant;
  size?: BadgeSize;
  class?: string;
  rounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "md",
  rounded: false,
});

const baseClasses = computed(() => [
  "inline-flex items-center justify-center",
  "font-medium transition-colors",
  {
    "rounded-md": !props.rounded,
    "rounded-full": props.rounded,
    "px-2 py-0.5 text-xs": props.size === "sm",
    "px-2.5 py-1 text-sm": props.size === "md",
    "px-3 py-1.5 text-base": props.size === "lg",
    "bg-base-300 text-base-content": props.variant === "default",
    "bg-primary text-primary-content": props.variant === "primary",
    "bg-secondary text-secondary-content": props.variant === "secondary",
    "bg-accent text-accent-content": props.variant === "accent",
    "bg-neutral text-neutral-content": props.variant === "neutral",
    "bg-info text-info-content": props.variant === "info",
    "bg-success text-success-content": props.variant === "success",
    "bg-warning text-warning-content": props.variant === "warning",
    "bg-error text-error-content": props.variant === "error",
  },
  props.class,
]);
</script>

<template>
  <span :class="baseClasses">
    <slot />
  </span>
</template>
