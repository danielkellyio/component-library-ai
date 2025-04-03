<script setup lang="ts">
import { computed } from "vue";

interface Props {
  class?: string;
}

const props = defineProps<Props>();

const baseClasses = computed(() => [
  "p-4 border-b border-base-200",
  "bg-base-100/50",
  props.class,
]);
</script>

<template>
  <div :class="baseClasses">
    <slot />
  </div>
</template>
