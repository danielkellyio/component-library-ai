<script setup lang="ts">
import type { Story } from "histoire";
import Spinner from "./Spinner.vue";

const story = {
  id: "components-spinner",
  title: "Components/Spinner",
  variants: [],
} satisfies Story;

const variants = [
  "default",
  "gradient",
  "pulse",
  "dots",
  "ring",
  "dual-ring",
  "wave",
  "doppler",
] as const;
const colors = ["primary", "secondary", "white"] as const;
const sizes = [16, 24, 32, 48] as const;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '500px' }">
    <!-- Variants -->
    <Variant title="Variants">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="variant in variants"
          :key="variant"
          class="flex flex-col items-center gap-2 p-4 bg-white rounded-lg"
        >
          <Spinner :variant="variant" :size="32" />
          <span class="text-sm font-medium text-neutral-700">{{
            variant
          }}</span>
        </div>
      </div>
    </Variant>

    <!-- Colors -->
    <Variant title="Colors">
      <div class="space-y-8">
        <div v-for="variant in variants" :key="variant" class="space-y-4">
          <h3 class="text-sm font-medium text-neutral-700">{{ variant }}</h3>
          <div class="flex gap-8">
            <div
              v-for="color in colors"
              :key="color"
              class="flex flex-col items-center gap-2"
            >
              <div
                :class="[
                  'flex items-center justify-center w-20 h-20 rounded-lg',
                  color === 'white' ? 'bg-neutral-900' : 'bg-white',
                ]"
              >
                <Spinner :variant="variant" :color="color" :size="32" />
              </div>
              <span class="text-sm text-neutral-600">{{ color }}</span>
            </div>
          </div>
        </div>
      </div>
    </Variant>

    <!-- Sizes -->
    <Variant title="Sizes">
      <div class="flex items-end gap-8">
        <div
          v-for="size in sizes"
          :key="size"
          class="flex flex-col items-center gap-2"
        >
          <Spinner :size="size" />
          <span class="text-sm text-neutral-600">{{ size }}px</span>
        </div>
      </div>
    </Variant>

    <!-- Dark Mode -->
    <Variant title="Dark Mode" dark>
      <div class="grid grid-cols-4 gap-4 p-6 bg-neutral-900 rounded-lg">
        <div
          v-for="variant in variants"
          :key="variant"
          class="flex flex-col items-center gap-2"
        >
          <Spinner :variant="variant" :size="32" color="white" />
          <span class="text-sm font-medium text-neutral-200">{{
            variant
          }}</span>
        </div>
      </div>
    </Variant>

    <!-- Playground -->
    <Variant
      title="Playground"
      :init-state="{ size: 32, variant: 'default', color: 'primary' }"
    >
      <template #default="{ state }">
        <div class="flex flex-col gap-6">
          <!-- Controls -->
          <div class="flex gap-8">
            <div class="flex items-center gap-4">
              <label class="text-sm font-medium">Size:</label>
              <select
                v-model="state.size"
                class="px-3 py-1.5 text-sm border border-neutral-200 rounded-md"
              >
                <option v-for="size in sizes" :key="size" :value="size">
                  {{ size }}px
                </option>
              </select>
            </div>

            <div class="flex items-center gap-4">
              <label class="text-sm font-medium">Variant:</label>
              <select
                v-model="state.variant"
                class="px-3 py-1.5 text-sm border border-neutral-200 rounded-md"
              >
                <option
                  v-for="variant in variants"
                  :key="variant"
                  :value="variant"
                >
                  {{ variant }}
                </option>
              </select>
            </div>

            <div class="flex items-center gap-4">
              <label class="text-sm font-medium">Color:</label>
              <select
                v-model="state.color"
                class="px-3 py-1.5 text-sm border border-neutral-200 rounded-md"
              >
                <option v-for="color in colors" :key="color" :value="color">
                  {{ color }}
                </option>
              </select>
            </div>
          </div>

          <!-- Preview -->
          <div
            :class="[
              'flex items-center justify-center p-8 rounded-lg',
              state.color === 'white' ? 'bg-neutral-900' : 'bg-white',
            ]"
          >
            <Spinner
              :size="state.size"
              :variant="state.variant"
              :color="state.color"
            />
          </div>
        </div>
      </template>
    </Variant>
  </Story>
</template>
