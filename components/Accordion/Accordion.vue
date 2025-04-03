<script setup lang="ts">
import { computed, ref, provide } from "vue";

export type AccordionType = "single" | "multiple";

interface Props {
  type?: AccordionType;
  defaultValue?: string | string[];
  collapsible?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "single",
  collapsible: true,
});

const value = ref<string | string[]>(
  props.defaultValue || (props.type === "multiple" ? [] : "")
);

function toggle(itemValue: string) {
  if (props.type === "multiple") {
    const values = [...(value.value as string[])];
    const index = values.indexOf(itemValue);

    if (index > -1) {
      values.splice(index, 1);
    } else {
      values.push(itemValue);
    }

    value.value = values;
  } else {
    if (props.collapsible && value.value === itemValue) {
      value.value = "";
    } else {
      value.value = itemValue;
    }
  }
}

const isExpanded = (itemValue: string) => {
  if (props.type === "multiple") {
    return (value.value as string[]).includes(itemValue);
  }
  return value.value === itemValue;
};

provide("accordion", {
  type: props.type,
  toggle,
  isExpanded,
});

const baseClasses = computed(() => [
  "rounded-lg overflow-hidden",
  "bg-base-200 backdrop-blur-sm shadow-md",
  "divide-y divide-base-300",
  props.class,
]);
</script>

<template>
  <div :class="baseClasses">
    <slot />
  </div>
</template>
