<script setup lang="ts">
import type { Story } from "histoire";
import TagsInput from "./TagsInput.vue";
import { ref } from "vue";

const story = {
  id: "components-tagsinput",
  title: "Components/TagsInput",
  icon: "heroicons:tag",
  variants: [],
} satisfies Story;

// Reactive state for controls
const initialTags = ref(["hello", "world"]);
const placeholder = ref("Add new tag...");
const interactiveTags = ref(["interactive", "story"]); // Separate ref for interactive variant
</script>

<template>
  <Story
    :title="story.title"
    :icon="story.icon"
    :layout="{ type: 'single', iframe: true }"
  >
    <Variant title="Default">
      <TagsInput />
    </Variant>

    <Variant title="With Initial Tags (v-model)">
      <TagsInput v-model:tags="initialTags" />
      <template #controls>
        <p class="p-2 text-muted">
          Initial Tags (reactive): {{ initialTags.join(", ") }}
        </p>
        <HstJson v-model="initialTags" title="Edit Initial Tags" />
      </template>
    </Variant>

    <Variant title="With Custom Placeholder">
      <TagsInput :placeholder="placeholder" />
      <template #controls>
        <HstText v-model="placeholder" title="Placeholder Text" />
      </template>
    </Variant>

    <Variant title="Interactive (v-model)">
      <State :source="interactiveTags" />
      <TagsInput v-model:tags="interactiveTags" :placeholder="placeholder" />
      <template #controls>
        <HstText v-model="placeholder" title="Placeholder" />
        <HstJson v-model="interactiveTags" title="Tags (v-model)" />
      </template>
    </Variant>
  </Story>
</template>
