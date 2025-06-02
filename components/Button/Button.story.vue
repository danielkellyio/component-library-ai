<script setup lang="ts">
import type { Story } from "histoire";
import Button from "./Button.vue"; // Assuming Button.vue is in the same directory

// If you have an Icon component, import it here, otherwise remove or replace Icon related parts
// import Icon from '../Icon/Icon.vue'; // Example path, adjust as necessary

const story = {
  id: "components-button",
  title: "Components/Button",
  variants: [], // Added to satisfy Story type
} satisfies Story;

const variants = ["primary", "secondary", "outline", "ghost"] as const;
const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: 500 }">
    <Variant title="All Variants">
      <div
        class="flex flex-wrap items-start gap-4 p-4 bg-bg-soft rounded-lg shadow-md"
      >
        <Button v-for="variant in variants" :key="variant" :variant="variant">
          {{ variant.charAt(0).toUpperCase() + variant.slice(1) }} Button
        </Button>
      </div>
    </Variant>

    <Variant title="All Sizes">
      <div
        class="flex flex-wrap items-center gap-4 p-4 bg-bg-soft rounded-lg shadow-md"
      >
        <Button v-for="size in sizes" :key="size" :size="size">
          {{ size.toUpperCase() }} Button
        </Button>
      </div>
    </Variant>

    <Variant title="States">
      <div
        class="flex flex-wrap items-start gap-4 p-4 bg-bg-soft rounded-lg shadow-md"
      >
        <Button loading>Loading...</Button>
        <Button disabled>Disabled Button</Button>
      </div>
    </Variant>

    <!-- Uncomment and adjust if you have an Icon component -->
    <!--
    <Variant title="With Icons">
      <div class="flex flex-wrap items-start gap-4 p-4 bg-bg-soft rounded-lg shadow-md">
        <Button>
          <Icon name="heroicons:plus-solid" class="w-5 h-5 mr-2" />
          Add Item
        </Button>
        <Button variant="secondary">
          Next Step
          <Icon name="heroicons:arrow-right-solid" class="w-5 h-5 ml-2" />
        </Button>
        <Button variant="outline" size="sm">
          <Icon name="heroicons:document-text" class="w-4 h-4 mr-1.5" />
          Export
        </Button>
      </div>
    </Variant>
    -->

    <Variant title="As Child (using a div)">
      <div
        class="flex flex-wrap items-start gap-4 p-4 bg-bg-soft rounded-lg shadow-md"
      >
        <Button as-child>
          <div
            class="bg-accent text-white p-3 rounded-lg cursor-pointer hover:bg-accent/90"
          >
            Custom Div Button
          </div>
        </Button>
      </div>
    </Variant>

    <Variant title="Primary Variant States">
      <div class="p-4 bg-bg-soft rounded-lg shadow-md space-y-4">
        <h3 class="text-lg font-semibold text-white mb-2">Primary</h3>
        <div class="flex flex-wrap items-start gap-4">
          <Button variant="primary">Normal</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </div>
    </Variant>

    <Variant title="Secondary Variant States">
      <div class="p-4 bg-bg-soft rounded-lg shadow-md space-y-4">
        <h3 class="text-lg font-semibold text-white mb-2">Secondary</h3>
        <div class="flex flex-wrap items-start gap-4">
          <Button variant="secondary">Normal</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </div>
      </div>
    </Variant>

    <Variant title="Outline Variant States">
      <div class="p-4 bg-bg-soft rounded-lg shadow-md space-y-4">
        <h3 class="text-lg font-semibold text-white mb-2">Outline</h3>
        <div class="flex flex-wrap items-start gap-4">
          <Button variant="outline">Normal</Button>
          <Button variant="outline" loading>Loading</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </div>
      </div>
    </Variant>

    <Variant title="Ghost Variant States">
      <div class="p-4 bg-bg-soft rounded-lg shadow-md space-y-4">
        <h3 class="text-lg font-semibold text-white mb-2">Ghost</h3>
        <div class="flex flex-wrap items-start gap-4">
          <Button variant="ghost">Normal</Button>
          <Button variant="ghost" loading>Loading</Button>
          <Button variant="ghost" disabled>Disabled</Button>
        </div>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
/* Add any story-specific styles here if needed */
.bg-bg-soft {
  background-color: var(--color-bg-soft);
}
.text-white {
  color: white; /* Or use a specific foreground color from your theme if available */
}
.bg-accent {
  background-color: var(--color-accent);
}
.hover\:bg-accent\/90:hover {
  /* You might need to define a specific color for this or use Tailwind's opacity helpers if available */
  filter: brightness(0.9);
}
</style>
