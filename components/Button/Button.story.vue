<script setup lang="ts">
import type { Story } from "histoire";
import Button from "./Button.vue";

const story = {
  id: "components-button",
  title: "Components/Button",
  variants: [],
} satisfies Story;

const variants = ["primary", "secondary", "outline", "ghost"] as const;
const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '500px' }">
    <!-- Variants -->
    <Variant title="Variants">
      <div class="flex gap-4">
        <Button v-for="variant in variants" :key="variant" :variant="variant">
          {{ variant }}
        </Button>
      </div>
    </Variant>

    <!-- Sizes -->
    <Variant title="Sizes">
      <div class="flex items-center gap-4">
        <Button v-for="size in sizes" :key="size" :size="size">
          Button {{ size }}
        </Button>
      </div>
    </Variant>

    <!-- States -->
    <Variant title="States">
      <div class="flex gap-4">
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
      </div>
    </Variant>

    <!-- Icon Slots -->
    <Variant title="Icon Slots">
      <div class="flex gap-4">
        <Button>
          <template #before>
            <Icon name="heroicons:plus" class="mr-2 h-5 w-5" />
          </template>
          Add Item
        </Button>
        <Button variant="secondary">
          <template #after>
            <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
          </template>
          Next Step
        </Button>
        <Button variant="outline">
          <template #before>
            <Icon name="heroicons:document" class="mr-2 h-5 w-5" />
          </template>
          <template #after>
            <Icon name="heroicons:chevron-down" class="ml-2 h-5 w-5" />
          </template>
          Select File
        </Button>
      </div>
    </Variant>

    <!-- All Variants with Loading -->
    <Variant title="Loading Variants">
      <div class="flex gap-4">
        <Button
          v-for="variant in variants"
          :key="variant"
          :variant="variant"
          loading
        >
          {{ variant }}
        </Button>
      </div>
    </Variant>

    <!-- All Variants Disabled -->
    <Variant title="Disabled Variants">
      <div class="flex gap-4">
        <Button
          v-for="variant in variants"
          :key="variant"
          :variant="variant"
          disabled
        >
          {{ variant }}
        </Button>
      </div>
    </Variant>
  </Story>
</template>
