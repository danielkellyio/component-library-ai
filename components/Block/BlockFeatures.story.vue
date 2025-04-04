<script setup lang="ts">
import type { Story } from "histoire";
import BlockFeatures from "./BlockFeatures.vue";

const story = {
  id: "blocks-features",
  title: "Blocks/Features",
  variants: [],
} satisfies Story;

const customFeatures = [
  {
    title: "AI-Powered Components",
    description:
      "Leverage the power of artificial intelligence to create smarter, more intuitive user interfaces.",
    icon: "heroicons:cpu-chip",
  },
  {
    title: "Real-time Collaboration",
    description:
      "Built-in support for real-time updates and collaborative features across your application.",
    icon: "heroicons:users",
  },
  {
    title: "Advanced Analytics",
    description:
      "Comprehensive analytics and insights to help you understand user behavior and optimize performance.",
    icon: "heroicons:chart-bar",
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade security features with end-to-end encryption and compliance with industry standards.",
    icon: "heroicons:shield-check",
  },
];
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '100%' }">
    <!-- Default Features -->
    <Variant title="Default Features">
      <BlockFeatures />
    </Variant>

    <!-- With Gradient -->
    <Variant title="With Gradient">
      <BlockFeatures gradient />
    </Variant>

    <!-- Custom Content -->
    <Variant title="Custom Content">
      <BlockFeatures
        title="AI-Powered Features for Modern Apps"
        description="Experience the next generation of web development with our AI-enhanced component library. Build smarter, faster, and more intuitive interfaces."
        :features="customFeatures"
      >
        <template #badge>AI Features</template>
      </BlockFeatures>
    </Variant>

    <!-- Column Variants -->
    <Variant title="Column Variants">
      <div class="space-y-8">
        <!-- 2 Columns -->
        <div>
          <h3 class="text-sm font-medium mb-2 text-base-content/70">
            2 Columns Layout
          </h3>
          <BlockFeatures :columns="2" :features="customFeatures.slice(0, 4)" />
        </div>

        <!-- 3 Columns -->
        <div>
          <h3 class="text-sm font-medium mb-2 text-base-content/70">
            3 Columns Layout
          </h3>
          <BlockFeatures :columns="3" :features="customFeatures.slice(0, 3)" />
        </div>

        <!-- 4 Columns -->
        <div>
          <h3 class="text-sm font-medium mb-2 text-base-content/70">
            4 Columns Layout
          </h3>
          <BlockFeatures :columns="4" :features="customFeatures" />
        </div>
      </div>
    </Variant>

    <!-- Custom Footer -->
    <Variant title="Custom Footer">
      <BlockFeatures>
        <template #footer>
          <div class="flex gap-4">
            <Button variant="primary" size="lg" gradient>
              <template #before>
                <Icon name="heroicons:sparkles" class="mr-2 h-5 w-5" />
              </template>
              Try AI Features
            </Button>
            <Button variant="default" size="lg">
              <template #before>
                <Icon name="heroicons:document-text" class="mr-2 h-5 w-5" />
              </template>
              Read Documentation
            </Button>
          </div>
        </template>
      </BlockFeatures>
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
            <BlockFeatures
              :columns="2"
              :features="customFeatures.slice(0, 2)"
            />
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
            <BlockFeatures
              :columns="3"
              :features="customFeatures.slice(0, 3)"
            />
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
            <BlockFeatures :columns="4" :features="customFeatures" />
          </div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
