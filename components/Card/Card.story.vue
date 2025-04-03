<script setup lang="ts">
import type { Story } from "histoire";
import Card from "./Card.vue";
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import CardFooter from "./CardFooter.vue";

const story = {
  id: "components-card",
  title: "Components/Card",
  variants: [],
} satisfies Story;

const variants = ["default", "bordered", "elevated"] as const;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '600px' }">
    <!-- Basic Card -->
    <Variant title="Basic Card">
      <div class="p-6 rounded-lg">
        <Card>
          <CardBody>
            <h3 class="text-xl font-semibold mb-2">Simple Card</h3>
            <p class="text-sm">
              This is a basic card with just a body section.
            </p>
          </CardBody>
        </Card>
      </div>
    </Variant>

    <!-- Card with Header and Footer -->
    <Variant title="Card with Header and Footer">
      <div class="p-6 rounded-lg">
        <Card>
          <CardHeader>
            <h3 class="text-lg font-medium">Card Title</h3>
          </CardHeader>
          <CardBody>
            <p class="text-sm">
              This is a complete card with header, body, and footer sections.
              The header and footer have subtle background differences.
            </p>
          </CardBody>
          <CardFooter>
            <div class="flex justify-end">
              <button class="text-sm text-primary-500 hover:underline">
                Learn More
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Variant>

    <!-- Card Variants -->
    <Variant title="Card Variants">
      <div class="p-6 rounded-lg grid grid-cols-1 gap-6">
        <div v-for="variant in variants" :key="variant">
          <h4 class="text-sm uppercase tracking-wider mb-2">
            {{ variant }}
          </h4>
          <Card :variant="variant">
            <CardHeader>
              <h3 class="text-lg font-medium">{{ variant }} Card</h3>
            </CardHeader>
            <CardBody>
              <p class="text-sm">
                This card uses the {{ variant }} variant styling.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </Variant>

    <!-- Interactive Card -->
    <Variant title="Interactive Card (Hover)">
      <div class="p-6 rounded-lg">
        <Card hover>
          <CardBody>
            <div class="flex items-start gap-4">
              <div class="bg-primary-500/20 rounded-lg p-3">
                <Icon
                  name="heroicons:sparkles"
                  class="h-6 w-6 text-primary-400"
                />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-1">Hover Me</h3>
                <p class="text-sm">
                  This card has hover effects. Move your cursor over it to see
                  the animation.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </Variant>

    <!-- Complex Content Card -->
    <Variant title="Complex Content Card">
      <div class="p-6 rounded-lg">
        <Card variant="elevated" hover>
          <div
            class="aspect-[16/9] bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center"
          >
            <p class="text-2xl font-bold text-white">Featured Image</p>
          </div>
          <CardHeader>
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-semibold">Complex Card</h3>
              <span
                class="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full"
              >
                Featured
              </span>
            </div>
          </CardHeader>
          <CardBody>
            <p class="text-sm mb-4">
              This card demonstrates complex content arrangement with image,
              header metadata, and action buttons in the footer.
            </p>
            <div class="flex gap-2">
              <span
                v-for="tag in ['Design', 'UI', 'Component']"
                :key="tag"
                class="text-xs bg-white/5 px-2 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </CardBody>
          <CardFooter>
            <div class="flex justify-between items-center">
              <div class="text-xs">Updated 2 days ago</div>
              <div class="flex gap-2">
                <button class="text-sm hover:text-white">Cancel</button>
                <button class="text-sm text-primary-500 hover:text-primary-400">
                  View
                </button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Variant>
  </Story>
</template>
