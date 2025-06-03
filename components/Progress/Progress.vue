<script setup lang="ts">
import { Primitive } from "reka-ui";
import { computed } from "vue";

interface Props {
  value?: number | null;
  max?: number;
  class?: string;
  size?: "sm" | "md" | "lg";
  // TODO: Add color variants based on theme (e.g., primary, secondary, success, error)
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  size: "md",
});

const percentage = computed(() => {
  if (props.value === null || props.value === undefined) return null;
  return Math.max(0, Math.min(100, (props.value / props.max) * 100));
});

const heightClasses = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};
</script>

<template>
  <Primitive
    :as-child="false"
    role="progressbar"
    :aria-valuemax="max"
    :aria-valuemin="0"
    :aria-valuenow="value === null ? undefined : value"
    :data-state="value === null ? 'indeterminate' : 'determinate'"
    :class="[
      'relative w-full overflow-hidden rounded-full bg-surface',
      heightClasses[props.size],
      props.class,
    ]"
  >
    <Primitive
      :as-child="false"
      :style="{ transform: `translateX(-${100 - (percentage ?? 0)}%)` }"
      :class="[
        'h-full w-full flex-1 bg-primary transition-transform duration-300 ease-in-out stripes',
        { 'animate-pulse': percentage === null }, // Basic indeterminate animation
      ]"
    />
  </Primitive>
</template>

<style scoped>
.bg-primary {
  background-color: var(--color-primary);
}
.bg-surface {
  background-color: var(--color-surface);
}

.stripes {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 8px,
    rgba(0, 0, 0, 0.15) 8px,
    rgba(0, 0, 0, 0.15) 16px
  );
  background-size: 56.56px 56.56px; /* Approx sqrt(2) * 40px for a 40px diagonal repeat */
}
</style>
