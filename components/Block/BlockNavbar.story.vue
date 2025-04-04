<script setup lang="ts">
import type { Story } from "histoire";
import BlockNavbar from "./BlockNavbar.vue";

const story = {
  id: "blocks-navbar",
  title: "Blocks/Navbar",
  variants: [],
} satisfies Story;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '100%' }">
    <!-- Default Navbar -->
    <Variant title="Default Navbar">
      <div class="w-full">
        <BlockNavbar />
      </div>
    </Variant>

    <!-- Container Sizes -->
    <Variant title="Container Sizes">
      <div class="space-y-8">
        <!-- Small Container -->
        <div>
          <h3 class="text-sm font-medium mb-2 text-base-content/70">
            Small Container (500px)
          </h3>
          <div
            class="w-[500px] border border-base-200 rounded-lg overflow-hidden"
          >
            <BlockNavbar />
          </div>
        </div>

        <!-- Medium Container -->
        <div>
          <h3 class="text-sm font-medium mb-2 text-base-content/70">
            Medium Container (768px)
          </h3>
          <div
            class="w-[768px] border border-base-200 rounded-lg overflow-hidden"
          >
            <BlockNavbar />
          </div>
        </div>

        <!-- Large Container -->
        <div>
          <h3 class="text-sm font-medium mb-2 text-base-content/70">
            Large Container (1024px)
          </h3>
          <div
            class="w-[1024px] border border-base-200 rounded-lg overflow-hidden"
          >
            <BlockNavbar />
          </div>
        </div>
      </div>
    </Variant>

    <!-- With Custom Logo -->
    <Variant title="With Custom Logo">
      <BlockNavbar>
        <template #logo>
          <div class="flex items-center space-x-2">
            <Icon
              name="heroicons:cube-transparent"
              class="h-8 w-8 text-primary"
            />
            <span
              class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              TechCo
            </span>
          </div>
        </template>
      </BlockNavbar>
    </Variant>

    <!-- With Custom Actions -->
    <Variant title="With Custom Actions">
      <BlockNavbar>
        <template #actions>
          <Button variant="default" size="sm">
            <template #before>
              <Icon name="heroicons:user" class="h-4 w-4 mr-1" />
            </template>
            Account
          </Button>
          <Button variant="primary" size="sm" gradient>
            <template #before>
              <Icon name="heroicons:rocket-launch" class="h-4 w-4 mr-1" />
            </template>
            Launch App
          </Button>
        </template>
        <template #mobile-actions>
          <Button variant="default" class="w-full justify-center">
            <template #before>
              <Icon name="heroicons:user" class="h-4 w-4 mr-1" />
            </template>
            Account
          </Button>
          <Button variant="primary" gradient class="w-full justify-center">
            <template #before>
              <Icon name="heroicons:rocket-launch" class="h-4 w-4 mr-1" />
            </template>
            Launch App
          </Button>
        </template>
      </BlockNavbar>
    </Variant>

    <!-- With Gradient Background -->
    <Variant title="With Gradient Background">
      <BlockNavbar class="bg-gradient-to-r from-primary/10 to-secondary/10" />
    </Variant>
  </Story>
</template>
