<script setup lang="ts">
import type { Story } from "histoire";
import Avatar from "./Avatar.vue";

const story = {
  id: "components-avatar",
  title: "Components/Avatar",
  variants: [],
} satisfies Story;

const sizes = ["sm", "md", "lg"] as const;
const shapes = ["circle", "square"] as const;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '300px' }">
    <Variant title="Default (Circle, Medium)">
      <Avatar fallback-text="Daniel Kelly" />
    </Variant>

    <Variant title="With Image">
      <Avatar
        src="https://picsum.photos/200/200"
        alt="Random Unsplash"
        fallback-text="Random Image"
      />
    </Variant>

    <Variant title="Sizes (Circle)">
      <div class="flex items-center gap-4">
        <Avatar
          v-for="size in sizes"
          :key="size"
          :size="size"
          fallback-text="DK"
        />
      </div>
    </Variant>

    <Variant title="Sizes (Square)">
      <div class="flex items-center gap-4">
        <Avatar
          v-for="size in sizes"
          :key="size"
          :size="size"
          shape="square"
          fallback-text="DK"
        />
      </div>
    </Variant>

    <Variant title="Shapes (Medium)">
      <div class="flex items-center gap-4">
        <Avatar
          v-for="shape in shapes"
          :key="shape"
          :shape="shape"
          fallback-text="DK"
        />
      </div>
    </Variant>

    <Variant title="Fallback Only">
      <Avatar fallback-text="User Name" />
    </Variant>

    <Variant title="Fallback Long Text">
      <Avatar fallback-text="Very Long User Name Indeed" />
    </Variant>

    <Variant title="Custom Class">
      <Avatar fallback-text="DK" class="border-2 border-primary shadow-glow" />
    </Variant>

    <Variant title="Square with Image">
      <Avatar
        src="https://picsum.photos/200/200"
        alt="Random Unsplash Square"
        fallback-text="RI"
        shape="square"
      />
    </Variant>
  </Story>
</template>
