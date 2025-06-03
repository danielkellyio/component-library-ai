<script setup lang="ts">
import type { Story } from "histoire";
import Progress from "./Progress.vue";
import { ref } from "vue";

const story = {
  id: "components-progress",
  title: "Components/Progress",
  variants: [],
} satisfies Story;

const sizes = ["sm", "md", "lg"] as const;
const determinateValue = ref(66);
const indeterminateValue = ref<null | number>(null);

// Simulate loading for indeterminate
let intervalId: ReturnType<typeof setInterval> | null = null;
const toggleIndeterminate = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    indeterminateValue.value = null; // Reset to indeterminate
  } else {
    // Simulate some progress for a bit then back to indeterminate
    indeterminateValue.value = 0;
    let progress = 0;
    intervalId = setInterval(() => {
      progress += 10;
      if (progress <= 100) {
        indeterminateValue.value = progress;
      } else {
        clearInterval(intervalId!);
        intervalId = null;
        // revert to indeterminate or stay at 100 based on desired behavior
        // For this demo, let's make it revert to null to show indeterminate again
        setTimeout(() => {
          indeterminateValue.value = null;
        }, 1000);
      }
    }, 200);
  }
};
</script>

<template>
  <Story
    :title="story.title"
    :layout="{ type: 'grid', width: 'calc(100% - 40px)', maxWidth: 500 }"
  >
    <Variant title="Default (Determinate)">
      <div class="p-4 space-y-4">
        <Progress :value="determinateValue" />
        <div class="flex items-center gap-2 mt-2">
          <input
            v-model.number="determinateValue"
            type="range"
            min="0"
            max="100"
            class="w-full accent-[--color-primary]"
          />
          <span class="text-sm text-muted w-16 text-right"
            >{{ determinateValue }}%</span
          >
        </div>
      </div>
    </Variant>

    <Variant title="Indeterminate">
      <div class="p-4 space-y-4">
        <Progress :value="indeterminateValue" />
        <button
          class="mt-2 px-3 py-1.5 text-sm rounded-md bg-surface hover:bg-bg-soft"
          @click="toggleIndeterminate"
        >
          {{ intervalId ? "Stop Simulation" : "Simulate Load" }}
        </button>
        <p class="text-xs text-muted">
          Current value:
          {{
            indeterminateValue === null
              ? "null (indeterminate)"
              : indeterminateValue + "%"
          }}
        </p>
      </div>
    </Variant>

    <Variant title="Sizes">
      <div class="p-4 space-y-6">
        <div v-for="s in sizes" :key="s">
          <p class="text-sm text-muted mb-1">Size: {{ s }}</p>
          <Progress :value="75" :size="s" />
        </div>
      </div>
    </Variant>

    <Variant title="Max Value (500)">
      <div class="p-4 space-y-4">
        <Progress :value="250" :max="500" />
        <p class="text-xs text-muted">Progress: 250 / 500</p>
      </div>
    </Variant>

    <Variant title="Custom Class">
      <div class="p-4">
        <Progress
          :value="50"
          class="shadow-[0_0_12px_rgba(111,0,255,0.5)] rounded-none"
        />
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.bg-surface {
  background-color: var(--color-surface);
}
.hover\:bg-bg-soft:hover {
  background-color: var(--color-bg-soft);
}
.text-muted {
  color: var(--color-muted);
}
.accent-\[--color-primary\] {
  accent-color: var(--color-primary);
}
</style>
