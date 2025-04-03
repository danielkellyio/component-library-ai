<script setup lang="ts">
import type { Story } from "histoire";
import ColorPalette from "./ColorPalette.vue";

const story = {
  id: "components-color-palette",
  title: "Components/ColorPalette",
  variants: [],
} satisfies Story;

const gradientColors = {
  primary: ["primary-bg-gradient", "text-primary-content"],
  secondary: ["secondary-bg-gradient", "text-secondary-content"],
  neutral: ["neutral-bg-gradient", "text-neutral-content"],
  info: ["info-bg-gradient", "text-info-content"],
  success: ["success-bg-gradient", "text-success-content"],
  warning: ["warning-bg-gradient", "text-warning-content"],
  error: ["error-bg-gradient", "text-error-content"],
};
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '50%' }">
    <!-- Default Variant -->
    <Variant title="Default">
      <ColorPalette />
    </Variant>

    <!-- Gradient Variant -->
    <Variant title="Gradients">
      <ColorPalette :colors="gradientColors" />
    </Variant>
  </Story>
</template>
