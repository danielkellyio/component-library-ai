<script setup lang="ts">
import type { Story } from "histoire";
import BlockHero from "./BlockHero.vue";

const story = {
  id: "blocks-hero",
  title: "Blocks/Hero",
  variants: [],
} satisfies Story;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '100%' }">
    <!-- Default Hero -->
    <Variant title="Default Hero">
      <BlockHero />
    </Variant>

    <!-- With Gradient -->
    <Variant title="With Gradient">
      <BlockHero gradient />
    </Variant>

    <!-- Custom Content -->
    <Variant title="Custom Content">
      <BlockHero>
        <template #badge>Early Access</template>
        <template #title>
          <span
            class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Transform your workflow with AI-powered components
          </span>
        </template>
        <template #description>
          Experience the future of web development with our AI-enhanced
          component library. Build smarter, faster, and more intuitive
          interfaces with minimal effort.
        </template>
        <template #actions>
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
            Read Docs
          </Button>
        </template>
        <template #stats>
          <dl
            class="grid grid-cols-1 gap-4 @[640px]:grid-cols-3 @[640px]:gap-8"
          >
            <div class="flex flex-col @[640px]:items-center">
              <dt class="text-base leading-7 text-base-content/70">
                AI Models
              </dt>
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-base-content"
              >
                5+
              </dd>
            </div>
            <div class="flex flex-col @[640px]:items-center">
              <dt class="text-base leading-7 text-base-content/70">
                Time Saved
              </dt>
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-base-content"
              >
                80%
              </dd>
            </div>
            <div class="flex flex-col @[640px]:items-center">
              <dt class="text-base leading-7 text-base-content/70">
                Happy Users
              </dt>
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-base-content"
              >
                25k+
              </dd>
            </div>
          </dl>
        </template>
      </BlockHero>
    </Variant>

    <!-- Badge Variants -->
    <Variant title="Badge Variants">
      <div class="space-y-8">
        <!-- Primary Badge -->
        <BlockHero>
          <template #badge>
            <Icon name="heroicons:sparkles" class="mr-1 h-3.5 w-3.5" />
            New Features
          </template>
        </BlockHero>

        <!-- Secondary Badge -->
        <BlockHero>
          <template #overline>
            <Badge variant="secondary" gradient>
              <Icon name="heroicons:rocket-launch" class="mr-1 h-3.5 w-3.5" />
              Just Launched
            </Badge>
          </template>
        </BlockHero>

        <!-- Success Badge -->
        <BlockHero>
          <template #overline>
            <Badge variant="success" gradient>
              <Icon name="heroicons:check-circle" class="mr-1 h-3.5 w-3.5" />
              Stable Release
            </Badge>
          </template>
        </BlockHero>

        <!-- Info Badge -->
        <BlockHero>
          <template #overline>
            <Badge variant="info">
              <Icon
                name="heroicons:information-circle"
                class="mr-1 h-3.5 w-3.5"
              />
              Documentation Updated
            </Badge>
          </template>
        </BlockHero>
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
            <BlockHero gradient />
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
            <BlockHero gradient />
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
            <BlockHero gradient />
          </div>
        </div>
      </div>
    </Variant>

    <!-- Without Visual -->
    <Variant title="Without Visual">
      <BlockHero gradient>
        <template #visual />
      </BlockHero>
    </Variant>

    <!-- Custom Visual -->
    <Variant title="Custom Visual">
      <BlockHero>
        <template #visual>
          <div
            class="relative mx-auto @[640px]:w-[480px] @[768px]:w-[640px] @[1024px]:w-[768px]"
          >
            <div class="relative">
              <div class="absolute -inset-4">
                <div
                  class="mx-auto h-full w-full rotate-2 bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl"
                />
              </div>
              <div class="relative rounded-xl bg-base-200 p-8">
                <div class="grid gap-6 @[640px]:grid-cols-2">
                  <div class="h-24 rounded-lg bg-base-100/50 p-4">
                    <div class="h-2 w-16 rounded bg-primary/20" />
                    <div class="mt-2 space-y-1.5">
                      <div class="h-1.5 w-10/12 rounded bg-base-content/10" />
                      <div class="h-1.5 w-8/12 rounded bg-base-content/10" />
                    </div>
                  </div>
                  <div class="h-24 rounded-lg bg-base-100/50 p-4">
                    <div class="h-2 w-16 rounded bg-secondary/20" />
                    <div class="mt-2 space-y-1.5">
                      <div class="h-1.5 w-11/12 rounded bg-base-content/10" />
                      <div class="h-1.5 w-9/12 rounded bg-base-content/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </BlockHero>
    </Variant>
  </Story>
</template>
