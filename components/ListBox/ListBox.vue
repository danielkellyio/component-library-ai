<script setup lang="ts">
import {
  ListboxRoot,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
} from "reka-ui";
import type { PropType } from "vue";

interface ListItem {
  id: string | number;
  label: string;
  value: string | number; // Corrected to Reka UI's AcceptableValue (string | number)
  disabled?: boolean;
  slot?: string; // Optional slot name for custom item rendering
}

const props = defineProps({
  items: {
    type: Array as PropType<ListItem[]>,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: [String, Number, Array] as PropType<
      string | number | (string | number)[] | undefined
    >,
    default: undefined,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
  class: {
    type: String,
    default: "",
  },
  contentClass: {
    type: String,
    default: "",
  },
  itemClass: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

// TODO: Consider if a trigger button is needed for a dropdown-style listbox
// For now, this component will render the listbox content directly.
</script>

<template>
  <ListboxRoot
    v-model="selectedValue"
    :multiple="props.multiple"
    :disabled="props.disabled"
    :class="['relative w-full', props.class]"
  >
    <ListboxContent
      :class="[
        'bg-surface border border-border rounded-lg shadow-lg p-1 focus:outline-none max-h-60 overflow-y-auto',
        'dark:bg-bg-soft dark:border-border', // Ensuring dark mode specifics if not covered by surface/border
        props.contentClass,
      ]"
    >
      <ListboxItem
        v-for="item in props.items"
        :key="item.id"
        :value="item.value"
        :disabled="item.disabled"
        :class="[
          'px-3 py-2 my-0.5 text-sm rounded-md cursor-default select-none focus:outline-none flex items-center justify-between',
          'hover:bg-primary hover:text-primary-foreground', // Hover state
          'data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground', // Keyboard navigation state
          'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:font-semibold', // Selected state
          'data-[disabled]:text-muted data-[disabled]:opacity-60 data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:hover:text-muted', // Disabled state
          props.itemClass,
        ]"
      >
        <slot :name="item.slot || 'item'" :item="item">
          <span>{{ item.label }}</span>
        </slot>
        <ListboxItemIndicator
          v-if="!props.multiple"
          class="text-primary data-[selected]:text-primary-foreground"
        >
          <Icon name="heroicons:check-20-solid" class="h-5 w-5" />
        </ListboxItemIndicator>
        <ListboxItemIndicator
          v-else
          class="text-primary data-[selected]:text-primary-foreground"
        >
          <!-- For multiple selection, a different indicator or style might be better -->
          <Icon name="heroicons:check-badge-20-solid" class="h-5 w-5" />
        </ListboxItemIndicator>
      </ListboxItem>
      <div
        v-if="!props.items || props.items.length === 0"
        class="px-3 py-2 text-sm text-muted text-center"
      >
        No options available.
      </div>
    </ListboxContent>
  </ListboxRoot>
</template>

<style scoped>
/* Scoped styles can be added here if Tailwind utilities are not sufficient */
/* For example, custom scrollbar styling for ListboxContent if needed */
.max-h-60 {
  max-height: 15rem; /* 240px */
}

/* Better scrollbar for dark theme */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: var(--color-surface);
  border-radius: var(--radius-sm);
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: var(--color-border);
  border-radius: var(--radius-sm);
  border: 2px solid var(--color-surface);
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-primary);
}
</style>
