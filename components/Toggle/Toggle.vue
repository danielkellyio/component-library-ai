<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: boolean;
  variant?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  label?: string;
  srLabel?: string;
  name?: string;
  disabled?: boolean;
  gradient?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  variant: "primary",
  size: "md",
  disabled: false,
  gradient: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const baseClasses = computed(() => [
  "relative inline-flex items-center cursor-pointer",
  {
    "opacity-50 cursor-not-allowed": props.disabled,
  },
  props.class,
]);

const trackClasses = computed(() => [
  "relative flex items-center rounded-full transition-colors",
  {
    "bg-base-300": !internalValue.value,
    "h-5 w-9": props.size === "sm",
    "h-6 w-11": props.size === "md",
    "h-7 w-14": props.size === "lg",
  },
  internalValue.value && {
    [props.gradient ? "primary-bg-gradient" : "primary-bg"]:
      props.variant === "primary",
    [props.gradient ? "secondary-bg-gradient" : "secondary-bg"]:
      props.variant === "secondary",
    [props.gradient ? "info-bg-gradient" : "info-bg"]: props.variant === "info",
    [props.gradient ? "success-bg-gradient" : "success-bg"]:
      props.variant === "success",
    [props.gradient ? "warning-bg-gradient" : "warning-bg"]:
      props.variant === "warning",
    [props.gradient ? "error-bg-gradient" : "error-bg"]:
      props.variant === "error",
    "border border-primary/50": props.variant === "primary",
    "border border-secondary/50": props.variant === "secondary",
    "border border-info/50": props.variant === "info",
    "border border-success/50": props.variant === "success",
    "border border-warning/50": props.variant === "warning",
    "border border-error/50": props.variant === "error",
  },
]);

const handleClasses = computed(() => [
  "absolute inline-block bg-base-100 rounded-full transform ring-0 transition-transform shadow-md",
  {
    "h-3.5 w-3.5 translate-x-0.75": props.size === "sm" && !internalValue.value,
    "h-3.5 w-3.5 translate-x-5": props.size === "sm" && internalValue.value,
    "h-4.5 w-4.5 translate-x-0.75": props.size === "md" && !internalValue.value,
    "h-4.5 w-4.5 translate-x-6": props.size === "md" && internalValue.value,
    "h-5.5 w-5.5 translate-x-0.75": props.size === "lg" && !internalValue.value,
    "h-5.5 w-5.5 translate-x-8": props.size === "lg" && internalValue.value,
  },
]);

const labelClasses = computed(() => [
  "ml-2",
  {
    "text-xs": props.size === "sm",
    "text-sm": props.size === "md",
    "text-base": props.size === "lg",
  },
  internalValue.value && {
    "primary-content": props.variant === "primary",
    "secondary-content": props.variant === "secondary",
    "info-content": props.variant === "info",
    "success-content": props.variant === "success",
    "warning-content": props.variant === "warning",
    "error-content": props.variant === "error",
  },
]);
</script>

<template>
  <label :for="toggleId" :class="baseClasses">
    <input
      :id="toggleId"
      v-model="internalValue"
      type="checkbox"
      :name="name"
      class="sr-only"
      :disabled="disabled"
    />
    <span class="sr-only">{{ srLabel || label }}</span>

    <div :class="trackClasses">
      <span :class="handleClasses" />
    </div>

    <span v-if="label" :class="labelClasses">{{ label }}</span>
  </label>
</template>

<style scoped>
.h-3\.5 {
  height: 0.875rem;
}
.w-3\.5 {
  width: 0.875rem;
}
.h-4\.5 {
  height: 1.125rem;
}
.w-4\.5 {
  width: 1.125rem;
}
.h-5\.5 {
  height: 1.375rem;
}
.w-5\.5 {
  width: 1.375rem;
}
</style>
