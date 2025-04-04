<script setup lang="ts">
import { computed } from "vue";
import type { color as ColorType } from "~/types/props";

type Size = "sm" | "md" | "lg" | "xl";

interface Props {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: Size;
  class?: string;
  rounded?: boolean;
  color?: ColorType;
  gradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  rounded: true,
  color: "default",
  gradient: false,
});

const initials = computed(() => {
  if (!props.fallback) return "";
  return props.fallback
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
});

const sizeClasses = computed(() => ({
  "h-6 w-6 text-xs": props.size === "sm",
  "h-8 w-8 text-sm": props.size === "md",
  "h-10 w-10 text-base": props.size === "lg",
  "h-12 w-12 text-lg": props.size === "xl",
}));

const colorClasses = computed(() => {
  if (props.color === "default") {
    return "bg-gray-100 text-gray-600";
  }

  const baseClasses = [
    props.gradient ? `${props.color}-bg-gradient` : `${props.color}-bg`,
    `${props.color}-content`,
    `border border-${props.color}/50`,
  ];

  return baseClasses;
});
</script>

<template>
  <div
    :class="[
      'relative inline-flex items-center justify-center',
      props.class,
      sizeClasses,
      colorClasses,
      { 'rounded-full': props.rounded, 'rounded-md': !props.rounded },
    ]"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :class="[
        'object-cover w-full h-full',
        { 'rounded-full': props.rounded, 'rounded-md': !props.rounded },
      ]"
    />
    <span v-else class="font-medium">{{ initials }}</span>
  </div>
</template>

<style scoped>
.avatar-image-loaded {
  opacity: 1;
}
</style>
