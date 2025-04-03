<script setup lang="ts">
import { computed } from "vue";

export type ToggleSize = "sm" | "md" | "lg";
export type ToggleVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info";

interface Props {
  modelValue?: boolean;
  size?: ToggleSize;
  variant?: ToggleVariant;
  disabled?: boolean;
  label?: string;
  srLabel?: string;
  name?: string;
  id?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: "md",
  variant: "primary",
  disabled: false,
});

const emit = defineEmits<{
  (e: "update:modelValue" | "change", value: boolean): void;
}>();

const internalValue = computed({
  get: () => props.modelValue,
  set: (value: boolean) => {
    emit("update:modelValue", value);
    emit("change", value);
  },
});

const toggleId = computed(
  () => props.id || `toggle-${Math.random().toString(36).substring(2, 9)}`
);

const baseClasses = computed(() => [
  "relative inline-flex items-center",
  props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
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
    "bg-primary": props.variant === "primary",
    "bg-secondary": props.variant === "secondary",
    "bg-info": props.variant === "info",
    "bg-success": props.variant === "success",
    "bg-warning": props.variant === "warning",
    "bg-error": props.variant === "error",
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
  "ml-2 text-base-content",
  {
    "text-xs": props.size === "sm",
    "text-sm": props.size === "md",
    "text-base": props.size === "lg",
  },
  internalValue.value && {
    "text-primary-content": props.variant === "primary",
    "text-secondary-content": props.variant === "secondary",
    "text-info-content": props.variant === "info",
    "text-success-content": props.variant === "success",
    "text-warning-content": props.variant === "warning",
    "text-error-content": props.variant === "error",
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
.translate-x-0\.75 {
  --tw-translate-x: 0.1875rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
