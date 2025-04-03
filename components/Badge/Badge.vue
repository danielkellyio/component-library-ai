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
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: BadgeSize;
  class?: string;
  rounded?: boolean;
  gradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "md",
  rounded: false,
  gradient: false,
});

const baseClasses = computed(() => [
  "inline-flex items-center justify-center px-2.5 py-0.5 text-xs font-medium rounded-full",
  {
    "bg-base-300 text-base-content": props.variant === "default",
    // Theme variants
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
  <span :class="baseClasses">
    <slot />
  </span>
</template>
