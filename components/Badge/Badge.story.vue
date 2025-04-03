<script setup lang="ts">
import type { Story } from "histoire";
import Badge from "./Badge.vue";

const story = {
  id: "components-badge",
  title: "Components/Badge",
  variants: [],
} satisfies Story;

const variants = [
  "default",
  "primary",
  "secondary",
  "neutral",
  "info",
  "success",
  "warning",
  "error",
] as const;

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '600px' }">
    <!-- Badge Variants -->
    <Variant title="Badge Variants">
      <div class="p-6 rounded-lg flex flex-wrap gap-3">
        <Badge v-for="variant in variants" :key="variant" :variant="variant">
          {{ variant }}
        </Badge>
      </div>
    </Variant>

    <!-- Gradient Variants -->
    <Variant title="Gradient Variants">
      <div class="p-6 rounded-lg flex flex-wrap gap-3">
        <Badge
          v-for="variant in variants.filter((v) => v !== 'default')"
          :key="variant"
          :variant="variant"
          gradient
        >
          {{ variant }} gradient
        </Badge>
      </div>
    </Variant>

    <!-- Badge Sizes -->
    <Variant title="Badge Sizes">
      <div class="p-6 rounded-lg flex flex-wrap gap-3 items-center">
        <Badge v-for="size in sizes" :key="size" :size="size" variant="primary">
          {{ size }} size
        </Badge>
      </div>
    </Variant>

    <!-- Rounded Badges -->
    <Variant title="Rounded Badges">
      <div class="p-6 rounded-lg flex flex-wrap gap-3">
        <Badge
          v-for="variant in variants"
          :key="variant"
          :variant="variant"
          rounded
        >
          {{ variant }}
        </Badge>
      </div>
    </Variant>

    <!-- With Icons -->
    <Variant title="With Icons">
      <div class="p-6 rounded-lg flex flex-wrap gap-3">
        <Badge variant="primary" rounded>
          <Icon name="heroicons:check" class="h-3.5 w-3.5 mr-1" />
          Verified
        </Badge>

        <Badge variant="success" rounded>
          <Icon name="heroicons:check-circle" class="h-3.5 w-3.5 mr-1" />
          Completed
        </Badge>

        <Badge variant="warning" rounded>
          <Icon name="heroicons:clock" class="h-3.5 w-3.5 mr-1" />
          Pending
        </Badge>

        <Badge variant="error" rounded>
          <Icon name="heroicons:x-circle" class="h-3.5 w-3.5 mr-1" />
          Rejected
        </Badge>

        <Badge variant="secondary" rounded>
          <Icon name="heroicons:star" class="h-3.5 w-3.5 mr-1" />
          Featured
        </Badge>

        <Badge variant="neutral" rounded>
          <Icon name="heroicons:plus" class="h-3.5 w-3.5 mr-1" />
          Add More
        </Badge>
      </div>
    </Variant>

    <!-- Usage Examples -->
    <Variant title="Usage Examples">
      <div class="p-6 rounded-lg space-y-6">
        <!-- Notification example -->
        <div
          class="flex items-center justify-between p-4 bg-white/5 rounded-lg"
        >
          <div class="flex items-center gap-3">
            <div
              class="h-10 w-10 bg-primary-500/20 rounded-full flex items-center justify-center"
            >
              <Icon name="heroicons:bell" class="h-5 w-5 text-primary-400" />
            </div>
            <div>
              <div class="text-sm font-medium">New notification</div>
              <div class="text-xs">You have a new message</div>
            </div>
          </div>
          <Badge variant="primary" size="sm">New</Badge>
        </div>

        <!-- User status example -->
        <div class="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
          <div class="relative">
            <div
              class="h-10 w-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"
            />
            <Badge
              variant="success"
              size="sm"
              rounded
              class="absolute -bottom-1 -right-1 border border-gray-900"
            />
          </div>
          <div>
            <div class="text-sm font-medium">Jane Smith</div>
            <div class="text-xs">Online</div>
          </div>
        </div>

        <!-- Feature list example -->
        <div class="p-4 bg-white/5 rounded-lg">
          <h3 class="text-lg font-medium mb-3">Product Features</h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <Icon name="heroicons:check" class="h-4 w-4 text-green-400" />
              Responsive Design
              <Badge variant="primary" size="sm" rounded>New</Badge>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="heroicons:check" class="h-4 w-4 text-green-400" />
              Dark Mode Support
              <Badge variant="secondary" size="sm" rounded>Popular</Badge>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="heroicons:check" class="h-4 w-4 text-green-400" />
              API Integration
              <Badge variant="neutral" size="sm" rounded>Beta</Badge>
            </li>
          </ul>
        </div>
      </div>
    </Variant>
  </Story>
</template>
