<script setup lang="ts">
import { computed, inject, ref, watch } from "vue";

interface Props {
  value: string;
  title: string;
  class?: string;
}

const props = defineProps<Props>();

type AccordionContext = {
  type: "single" | "multiple";
  toggle: (value: string) => void;
  isExpanded: (value: string) => boolean;
};

const accordion = inject<AccordionContext>("accordion");
if (!accordion) {
  throw new Error("AccordionItem must be used within an Accordion component");
}

const expanded = computed(() => accordion.isExpanded(props.value));
const contentHeight = ref("0px");
const contentRef = ref<HTMLElement | null>(null);

watch(
  expanded,
  (newExpanded) => {
    if (newExpanded && contentRef.value) {
      contentHeight.value = `${contentRef.value.scrollHeight}px`;
    } else {
      contentHeight.value = "0px";
    }
  },
  { immediate: true }
);

const headerClasses = computed(() => [
  "flex justify-between items-center p-4 cursor-pointer",
  "text-left w-full font-medium text-base",
  "transition-colors duration-200",
  expanded.value ? "text-primary" : "hover:text-primary",
]);

const contentClasses = computed(() => [
  "overflow-hidden transition-all duration-200 ease-in-out",
  "bg-base-100",
]);
</script>

<template>
  <div :class="props.class">
    <h3>
      <button
        :class="headerClasses"
        type="button"
        :aria-expanded="expanded"
        @click="accordion.toggle(props.value)"
      >
        <span>{{ props.title }}</span>
        <Icon
          :name="expanded ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
          class="h-5 w-5 transition-transform duration-200"
        />
      </button>
    </h3>
    <div
      :class="contentClasses"
      :style="{ height: expanded ? contentHeight : '0px' }"
    >
      <div ref="contentRef" class="p-4 pt-0">
        <slot />
      </div>
    </div>
  </div>
</template>
