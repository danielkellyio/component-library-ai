<script setup lang="ts">
import type { Story } from "histoire";
import { reactive } from "vue";
import Popover from "./Popover.vue";
import Button from "../Button/Button.vue"; // Assuming a Button component exists for the trigger

const story = {
  id: "components-popover",
  title: "Components/Popover",
  variants: [],
} satisfies Story;

const sides = ["top", "right", "bottom", "left"] as const;
const aligns = ["start", "center", "end"] as const;

// Reactive state for controls
const defaultControlsState = reactive({
  side: sides[2], // default to bottom
  align: aligns[1], // default to center
  modal: false,
  showArrow: true,
});
</script>

<template>
  <Story
    :title="story.title"
    :layout="{ type: 'grid', width: 'calc(100% - 40px)', iframe: false }"
  >
    <Variant title="Default (Click)">
      <div class="min-h-[200px] flex items-center justify-center">
        <Popover
          :side="defaultControlsState.side"
          :align="defaultControlsState.align"
          :modal="defaultControlsState.modal"
          :show-arrow="defaultControlsState.showArrow"
        >
          <template #trigger>
            <Button variant="secondary">Open Popover</Button>
          </template>
          <div class="p-2 text-sm">
            <p class="font-bold text-text">Popover Content</p>
            <p class="text-muted">
              This is some example content for the popover.
            </p>
            <Button size="sm" class="mt-2">Action</Button>
          </div>
        </Popover>
      </div>
      <template #controls>
        <div class="p-2 space-y-2">
          <div>
            <label
              for="side-select"
              class="block text-sm font-medium text-gray-300"
              >Side:</label
            >
            <select
              id="side-select"
              v-model="defaultControlsState.side"
              class="mt-1 block w-full p-1 bg-surface border-border rounded-md text-sm"
            >
              <option v-for="s in sides" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div>
            <label
              for="align-select"
              class="block text-sm font-medium text-gray-300"
              >Align:</label
            >
            <select
              id="align-select"
              v-model="defaultControlsState.align"
              class="mt-1 block w-full p-1 bg-surface border-border rounded-md text-sm"
            >
              <option v-for="a in aligns" :key="a" :value="a">{{ a }}</option>
            </select>
          </div>
          <div class="flex items-center">
            <input
              id="modal-checkbox"
              v-model="defaultControlsState.modal"
              type="checkbox"
              class="h-4 w-4 text-primary bg-surface border-border rounded focus:ring-primary"
            />
            <label for="modal-checkbox" class="ml-2 text-sm text-gray-300"
              >Modal</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="show-arrow-checkbox"
              v-model="defaultControlsState.showArrow"
              type="checkbox"
              class="h-4 w-4 text-primary bg-surface border-border rounded focus:ring-primary"
            />
            <label for="show-arrow-checkbox" class="ml-2 text-sm text-gray-300"
              >Show Arrow</label
            >
          </div>
        </div>
      </template>
    </Variant>

    <Variant title="Modal Popover">
      <div class="min-h-[200px] flex items-center justify-center">
        <Popover modal>
          <template #trigger>
            <Button variant="primary">Open Modal Popover</Button>
          </template>
          <div class="p-2 text-sm">
            <p class="font-bold text-text">Modal Popover</p>
            <p class="text-muted">
              This popover will behave like a modal, blocking interactions with
              the rest of the page.
            </p>
            <Button size="sm" class="mt-2">Focusable Action</Button>
          </div>
        </Popover>
      </div>
    </Variant>

    <Variant title="Various Placements">
      <div class="grid grid-cols-3 gap-x-8 gap-y-16 p-8 min-h-[500px]">
        <template v-for="sideOption in sides" :key="sideOption">
          <template v-for="alignOption in aligns" :key="alignOption">
            <div class="flex items-center justify-center">
              <Popover :side="sideOption" :align="alignOption">
                <template #trigger>
                  <Button size="sm" variant="outline">
                    {{ sideOption }}/{{ alignOption }}
                  </Button>
                </template>
                <div class="p-1 text-xs w-28">
                  <p class="font-semibold">
                    {{ sideOption }} / {{ alignOption }}
                  </p>
                  <p class="text-muted/80">Content for this popover.</p>
                </div>
              </Popover>
            </div>
          </template>
        </template>
      </div>
    </Variant>

    <Variant title="No Arrow">
      <div class="min-h-[200px] flex items-center justify-center">
        <Popover :show-arrow="false">
          <template #trigger>
            <Button variant="secondary">No Arrow</Button>
          </template>
          <div class="p-2 text-sm">
            <p class="font-bold text-text">No Arrow Popover</p>
            <p class="text-muted">This popover does not have an arrow.</p>
          </div>
        </Popover>
      </div>
    </Variant>

    <Variant title="Custom Trigger & Content Styling">
      <div class="min-h-[200px] flex items-center justify-center">
        <Popover
          trigger-class="!rounded-full !p-0"
          class="!bg-primary !text-primary-foreground !border-secondary !shadow-[0_0_12px_var(--color-secondary)]"
          arrow-class="!fill-primary !stroke-secondary"
        >
          <template #trigger>
            <img
              src="https://picsum.photos/40/40"
              alt="User Avatar"
              class="rounded-full w-10 h-10 border-2 border-secondary hover:opacity-80 transition-opacity"
            />
          </template>
          <div class="p-3 text-sm">
            <p class="font-bold">Profile Popover</p>
            <p>Styled with custom classes!</p>
          </div>
        </Popover>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
/* Add any story-specific styles here */
.htw-story-variant-single-iframe {
  min-height: 300px;
}
select {
  /* Basic styling for select to look decent in dark mode */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
