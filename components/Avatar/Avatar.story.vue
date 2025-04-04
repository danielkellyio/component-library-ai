<script setup lang="ts">
import type { Story } from "histoire";
import Avatar from "./Avatar.vue";
import type { color as ColorType } from "~/types/props";

const story = {
  id: "components-avatar",
  title: "Components/Avatar",
  variants: [],
} satisfies Story;

const sizes = ["sm", "md", "lg", "xl"] as const;
const colors: ColorType[] = [
  "default",
  "primary",
  "secondary",
  "neutral",
  "info",
  "success",
  "warning",
  "error",
];
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: 300 }">
    <Variant title="Default">
      <Avatar fallback="John Doe" />
    </Variant>

    <Variant title="With Image">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User avatar"
      />
    </Variant>

    <Variant title="Colors">
      <div class="flex flex-wrap items-center gap-4">
        <Avatar
          v-for="color in colors"
          :key="color"
          :color="color"
          fallback="JD"
        />
      </div>
    </Variant>

    <Variant title="Gradient Colors">
      <div class="flex flex-wrap items-center gap-4">
        <Avatar
          v-for="color in colors.filter((c) => c !== 'default')"
          :key="color"
          :color="color"
          gradient
          fallback="JD"
        />
      </div>
    </Variant>

    <Variant title="Sizes">
      <div class="flex items-center gap-4">
        <Avatar
          v-for="size in sizes"
          :key="size"
          :size="size"
          fallback="John Doe"
        />
      </div>
    </Variant>

    <Variant title="Square">
      <Avatar
        :rounded="false"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User avatar"
      />
    </Variant>

    <Variant title="Fallback Initials">
      <div class="flex items-center gap-4">
        <Avatar fallback="John Doe" />
        <Avatar fallback="Alice Smith" color="primary" />
        <Avatar fallback="Robert Johnson" color="secondary" gradient />
      </div>
    </Variant>
  </Story>
</template>
