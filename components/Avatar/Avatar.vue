<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback } from "reka-ui";

interface Props {
  src?: string;
  alt?: string;
  fallbackText?: string;
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
  class?:
    | string
    | Record<string, boolean>
    | (string | Record<string, boolean>)[];
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  shape: "circle",
  fallbackText: "",
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "h-8 w-8 text-xs";
    case "lg":
      return "h-16 w-16 text-lg";
    case "md":
    default:
      return "h-12 w-12 text-base";
  }
});

const shapeClasses = computed(() => {
  return props.shape === "circle" ? "rounded-full" : "rounded-md"; // using --radius-md for square
});

const initials = computed(() => {
  if (props.fallbackText) {
    return props.fallbackText
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }
  return "";
});
</script>

<template>
  <AvatarRoot
    :class="[
      'inline-flex select-none items-center justify-center overflow-hidden align-middle bg-surface',
      sizeClasses,
      shapeClasses,
      props.class,
    ]"
  >
    <AvatarImage
      v-if="props.src"
      :src="props.src"
      :alt="props.alt"
      class="h-full w-full object-cover"
    />
    <AvatarFallback
      :class="[
        'flex h-full w-full items-center justify-center font-medium text-text',
      ]"
      :delay-ms="300"
    >
      {{ initials }}
    </AvatarFallback>
  </AvatarRoot>
</template>

<style scoped>
/* No specific styles needed here as Tailwind is used directly */
</style>
