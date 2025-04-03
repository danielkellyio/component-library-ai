<script setup lang="ts">
import { computed } from "vue";

interface Props {
  colors?: Record<string, string[]>;
  showCopyButton?: boolean;
  class?: string;
}

// Define the color palette based on theme.css values
const props = withDefaults(defineProps<Props>(), {
  colors: () => ({
    base: ["bg-base-100", "bg-base-200", "bg-base-300", "text-base-content"],
    primary: ["bg-primary", "text-primary-content"],
    secondary: ["bg-secondary", "text-secondary-content"],
    neutral: ["bg-neutral", "text-neutral-content"],
    info: ["bg-info", "text-info-content"],
    success: ["bg-success", "text-success-content"],
    warning: ["bg-warning", "text-warning-content"],
    error: ["bg-error", "text-error-content"],
  }),
  showCopyButton: false,
});

// Organize colors for display
const organizedColors = computed(() => {
  const result = {} as Record<string, string[]>;

  for (const [colorName, shades] of Object.entries(props.colors)) {
    result[colorName] = [...shades];
  }

  return result;
});

const getContrastTextColor = (colorClass: string): string => {
  // Logic to determine text color based on background color
  if (colorClass.includes("primary")) {
    return "text-primary-content";
  }
  if (colorClass.includes("secondary")) {
    return "text-secondary-content";
  }
  if (colorClass.includes("neutral")) {
    return "text-neutral-content";
  }
  if (colorClass.includes("info")) {
    return "text-info-content";
  }
  if (colorClass.includes("success")) {
    return "text-success-content";
  }
  if (colorClass.includes("warning")) {
    return "text-warning-content";
  }
  if (colorClass.includes("error")) {
    return "text-error-content";
  }
  return "text-base-content";
};
</script>

<template>
  <div :class="['w-full', props.class]">
    <div class="space-y-8">
      <div
        v-for="(shades, colorName) in organizedColors"
        :key="colorName"
        class="space-y-2"
      >
        <h3 class="text-lg font-medium capitalize mb-2">{{ colorName }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div
            v-for="(colorClass, index) in shades"
            :key="index"
            :class="[
              colorClass,
              'relative h-12 rounded-md flex items-center justify-between px-3 transition-all',
              colorClass.startsWith('text-')
                ? 'border border-base-300 p-2'
                : '',
            ]"
          >
            <span
              :class="
                colorClass.startsWith('text-')
                  ? colorClass
                  : getContrastTextColor(colorClass)
              "
            >
              {{ colorClass }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
