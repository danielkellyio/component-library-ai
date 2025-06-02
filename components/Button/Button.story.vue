<script setup lang="ts">
import type { Story } from "histoire";
import Button from "./Button.vue";
import { h } from "vue";

// If you have an icon component, import it here for the icon slot examples
// import Icon from "../Icon/Icon.vue"; // Example, adjust path as needed

const story = {
  id: "components-button",
  title: "Components/Button",
  variants: [],
  // component: Button, // Not defining component here to use variants for different props
} satisfies Story;

const variants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;
const sizes = ["sm", "default", "lg"] as const;

const IconPlaceholder = h("div", { class: "w-4 h-4 bg-muted rounded-sm" });
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: 'auto' }">
    <Variant title="All Variants & Sizes">
      <div class="grid grid-cols-1 gap-6 p-4">
        <template v-for="variant in variants" :key="variant">
          <div class="flex flex-col gap-2 items-start">
            <h3 class="text-lg font-semibold capitalize mb-2 text-white">
              {{ variant }}
            </h3>
            <div class="flex items-center gap-4 flex-wrap">
              <Button
                v-for="size in sizes"
                :key="size"
                :variant="variant"
                :size="size"
              >
                Button {{ size }}
              </Button>
            </div>
            <div class="flex items-center gap-4 flex-wrap mt-2">
              <Button
                v-for="size in sizes"
                :key="size"
                :variant="variant"
                :size="size"
                disabled
              >
                Disabled {{ size }}
              </Button>
            </div>
          </div>
        </template>
      </div>
    </Variant>

    <Variant title="With Icons (Placeholder)">
      <div class="flex flex-col gap-6 p-4 items-start">
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="default" size="default">
            <template #before>
              <component :is="IconPlaceholder" class="mr-2" />
            </template>
            Icon Before
          </Button>
          <Button variant="secondary" size="default">
            Icon After
            <template #after>
              <component :is="IconPlaceholder" class="ml-2" />
            </template>
          </Button>
          <Button variant="outline" size="lg">
            <template #before>
              <component :is="IconPlaceholder" class="mr-2" />
            </template>
            Large Icon
            <template #after>
              <component :is="IconPlaceholder" class="ml-2" />
            </template>
          </Button>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <Button variant="ghost" size="sm">
            <template #before>
              <component :is="IconPlaceholder" class="mr-1" />
            </template>
            Small Ghost
          </Button>
          <Button variant="link" size="default">
            <template #before>
              <component :is="IconPlaceholder" class="mr-2" />
            </template>
            Link with Icon
          </Button>
        </div>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
/* You can add story-specific styles here if needed */
</style>
