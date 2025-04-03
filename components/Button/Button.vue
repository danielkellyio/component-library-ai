<script setup lang="ts">
import { computed } from "vue";
import type {
  size as ButtonSize,
  color as ButtonColor,
  gradient as ButtonGradient,
} from "@/types/props";

interface Props {
  variant?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  class?: string;
  rounded?: boolean;
  gradient?: ButtonGradient;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
  type: "button",
  rounded: false,
  gradient: false,
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
    // Solid variants with proper theme classes
    [props.gradient ? "primary-bg-gradient" : "primary-bg"]:
      props.variant === "primary",
    [props.gradient ? "secondary-bg-gradient" : "secondary-bg"]:
      props.variant === "secondary",
    [props.gradient ? "neutral-bg-gradient" : "neutral-bg"]:
      props.variant === "neutral",
    [props.gradient ? "info-bg-gradient" : "info-bg"]: props.variant === "info",
    [props.gradient ? "success-bg-gradient" : "success-bg"]:
      props.variant === "success",
    [props.gradient ? "warning-bg-gradient" : "warning-bg"]:
      props.variant === "warning",
    [props.gradient ? "error-bg-gradient" : "error-bg"]:
      props.variant === "error",
    // Content colors
    "primary-content": props.variant === "primary",
    "secondary-content": props.variant === "secondary",
    "neutral-content": props.variant === "neutral",
    "info-content": props.variant === "info",
    "success-content": props.variant === "success",
    "warning-content": props.variant === "warning",
    "error-content": props.variant === "error",
    // Border styles
    "border border-primary/50": props.variant === "primary",
    "border border-secondary/50": props.variant === "secondary",
    "border border-neutral/50": props.variant === "neutral",
    "border border-info/50": props.variant === "info",
    "border border-success/50": props.variant === "success",
    "border border-warning/50": props.variant === "warning",
    "border border-error/50": props.variant === "error",
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
      class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current"
    />
    <slot name="before" />
    <slot />
    <slot name="after" />
  </button>
</template>
