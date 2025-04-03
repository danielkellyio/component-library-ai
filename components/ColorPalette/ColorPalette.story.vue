<script setup lang="ts">
import type { Story } from "histoire";
import ColorPalette from "./ColorPalette.vue";

const story = {
  id: "components-color-palette",
  title: "Components/ColorPalette",
  variants: [],
} satisfies Story;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '100%' }">
    <!-- Default Variant -->
    <Variant title="Default">
      <ColorPalette />
    </Variant>
  </Story>
</template>
