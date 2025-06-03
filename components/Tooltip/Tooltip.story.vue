<script setup lang="ts">
import type { Story } from "histoire";
import { reactive } from "vue";
import Tooltip from "./Tooltip.vue";
import Button from "../Button/Button.vue"; // Assuming Button component is available for trigger examples

const story = {
  id: "components-tooltip",
  title: "Components/Tooltip",
  variants: [],
} satisfies Story;

const sides = ["top", "right", "bottom", "left"] as const;
const aligns = ["start", "center", "end"] as const;

// Reactive state for controls
const controlsState = reactive({
  text: "This is a tooltip!",
  side: sides[0], // default to top
  delayDuration: 300,
  useCustomContent: false,
});
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: 'auto' }">
    <Variant title="Default">
      <div class="min-h-[150px] flex items-center justify-center p-8">
        <Tooltip
          :text="controlsState.text"
          :side="controlsState.side"
          :delay-duration="controlsState.delayDuration"
        >
          <Button variant="secondary">Hover Me (Default)</Button>
        </Tooltip>
      </div>
      <template #controls>
        <div class="p-4 space-y-3">
          <div>
            <label
              for="tooltip-text"
              class="block text-sm font-medium text-muted mb-1"
              >Tooltip Text:</label
            >
            <input
              id="tooltip-text"
              v-model="controlsState.text"
              type="text"
              class="w-full p-2 bg-bg-soft border-border rounded-md text-sm"
              placeholder="Enter tooltip text"
            />
          </div>
          <div>
            <label
              for="side-select"
              class="block text-sm font-medium text-muted mb-1"
              >Side:</label
            >
            <select
              id="side-select"
              v-model="controlsState.side"
              class="w-full p-2 bg-bg-soft border-border rounded-md text-sm htw-select"
            >
              <option v-for="s in sides" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div>
            <label
              for="delay-duration"
              class="block text-sm font-medium text-muted mb-1"
              >Delay (ms):</label
            >
            <input
              id="delay-duration"
              v-model.number="controlsState.delayDuration"
              type="number"
              step="100"
              class="w-full p-2 bg-bg-soft border-border rounded-md text-sm"
            />
          </div>
        </div>
      </template>
    </Variant>

    <Variant title="Custom Content Slot">
      <div class="min-h-[150px] flex items-center justify-center p-8">
        <Tooltip :side="'bottom'">
          <Button variant="outline">Hover for Custom Content</Button>
          <template #content>
            <div class="flex items-center space-x-2 p-1">
              <Icon
                name="heroicons:information-circle-20-solid"
                class="h-5 w-5 text-accent"
              />
              <span class="font-semibold text-text">Important Info!</span>
            </div>
            <p class="text-xs text-muted mt-1">
              This tooltip uses a custom content slot for more complex markup.
            </p>
          </template>
        </Tooltip>
      </div>
    </Variant>

    <Variant title="Placement Matrix">
      <div class="grid grid-cols-3 gap-x-8 gap-y-16 p-10 min-h-[400px]">
        <template v-for="sOption in sides" :key="sOption">
          <template v-for="aOption in aligns" :key="aOption">
            <div
              v-if="!(sOption === 'top' && aOption === 'start')"
              class="flex items-center justify-center"
            >
              <Tooltip
                :text="`${sOption} / ${aOption}`"
                :side="sOption"
                :align="aOption"
                :delay-duration="0"
              >
                <Button size="sm" class="w-28 text-center">
                  {{ sOption }} / {{ aOption }}
                </Button>
              </Tooltip>
            </div>
            <!-- Placeholder for the first item to keep grid consistent for controls -->
            <div v-else />
          </template>
        </template>
      </div>
      <template #controls>
        <div class="p-4">
          <p class="text-sm text-muted">
            Hover over buttons to see tooltip placement.
          </p>
          <p class="text-xs text-muted mt-1">
            Top/Start combination is skipped for layout reasons in this grid.
          </p>
        </div>
      </template>
    </Variant>

    <Variant title="Styled Tooltip">
      <div class="min-h-[150px] flex items-center justify-center p-8">
        <Tooltip
          text="This is a fancy tooltip!"
          side="right"
          class="!bg-gradient-to-r !from-primary !to-secondary !text-primary-foreground !border-accent !shadow-[0_0_12px_var(--color-secondary)]"
          arrow-class="!fill-primary !stroke-accent"
        >
          <Button variant="ghost">Hover for Styled Tooltip</Button>
        </Tooltip>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
/* Basic styling for select to look decent in dark mode (copied from Popover story) */
.htw-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type="text"],
input[type="number"] {
  color: var(--color-text);
}

input[type="text"]::placeholder {
  color: var(--color-muted);
}

.htw-story-variant-single-iframe {
  min-height: 200px;
}
</style>
