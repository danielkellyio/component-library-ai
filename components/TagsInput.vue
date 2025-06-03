<script setup lang="ts">
import { ref, watch, computed } from "vue";

const props = defineProps<{
  tags?: string[];
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "update:tags", tags: string[]): void;
}>();

// Use computed for internalTags to decide whether to use prop or internal state
const internalTags = computed({
  get: () => (props.tags ? [...props.tags] : localTags.value),
  set: (newVal) => {
    if (props.tags) {
      emit("update:tags", newVal);
    } else {
      localTags.value = newVal;
    }
  },
});

// Local state for when tags prop is not provided
const localTags = ref<string[]>([]);
const currentTag = ref("");

// Initialize localTags if tags prop is provided initially but then removed or for initial setup
if (props.tags) {
  localTags.value = [...props.tags];
}

watch(
  () => props.tags,
  (newVal) => {
    if (newVal) {
      // If the prop is reactive and changes, update the local state if not directly bound
      // This is more for scenarios where the component might switch between controlled/uncontrolled
      // or if direct binding via computed setter isn't enough.
      // For this setup, computed should handle it, but watch can be a safeguard or for complex syncs.
      if (!props.tags) localTags.value = [...newVal];
    }
  },
  { deep: true, immediate: true }
);

const addTag = () => {
  const tagToAdd = currentTag.value.trim();
  if (tagToAdd !== "" && !internalTags.value.includes(tagToAdd)) {
    const newTags = [...internalTags.value, tagToAdd];
    if (props.tags) {
      emit("update:tags", newTags);
    } else {
      internalTags.value = newTags; // relies on computed setter
    }
  }
  currentTag.value = "";
};

const removeTag = (index: number) => {
  const newTags = [...internalTags.value];
  newTags.splice(index, 1);
  if (props.tags) {
    emit("update:tags", newTags);
  } else {
    internalTags.value = newTags; // relies on computed setter
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === ",") {
    event.preventDefault();
    addTag();
  } else if (
    event.key === "Backspace" &&
    currentTag.value === "" &&
    internalTags.value.length > 0
  ) {
    removeTag(internalTags.value.length - 1);
  }
};

const resolvedPlaceholder = computed(() => props.placeholder || "Add a tag...");
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-2 p-2 rounded-md bg-surface border border-border focus-within:ring-2 focus-within:ring-primary focus-within:border-primary"
  >
    <div
      v-for="(tag, index) in internalTags"
      :key="tag"
      class="flex items-center gap-1 px-2 py-1 text-sm rounded-md bg-accent text-text"
    >
      <span>{{ tag }}</span>
      <button
        class="text-text hover:text-secondary focus:outline-none"
        aria-label="Remove tag"
        @click="removeTag(index)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
          />
        </svg>
      </button>
    </div>
    <input
      v-model="currentTag"
      type="text"
      :placeholder="resolvedPlaceholder"
      class="flex-grow p-1 bg-transparent focus:outline-none text-text placeholder-muted"
      @keydown="handleKeydown"
      @blur="addTag"
    />
  </div>
</template>

<style scoped>
/* Using Tailwind utility classes directly in the template */
</style>
