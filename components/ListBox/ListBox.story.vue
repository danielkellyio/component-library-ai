<script setup lang="ts">
import type { Story } from "histoire";
import { ref } from "vue";
import ListBox from "./ListBox.vue";

interface ListItem {
  id: string | number;
  label: string;
  value: string | number;
  disabled?: boolean;
}

const story = {
  id: "components-listbox",
  title: "Components/ListBox",
  icon: "heroicons:list-bullet",
  variants: [],
  // layout: { type: 'grid', width: 400 }, // Optional: Adjust layout if needed
} satisfies Story;

const basicItems: ListItem[] = [
  { id: "1", label: "Durward Reynolds", value: "dr" },
  { id: "2", label: "Kenton Towne", value: "kt" },
  { id: "3", label: "Therese Wunsch", value: "tw" },
  { id: "4", label: "Benedict Kessler", value: "bk", disabled: true },
  { id: "5", label: "Katelyn Rohan", value: "kr" },
];

const objectValueItems: ListItem[] = [
  { id: "obj1", label: "Object One (val: 1)", value: 1 },
  { id: "obj2", label: "Object Two (val: 2)", value: 2 },
  { id: "obj3", label: "Object Three (val: 3)", value: 3 },
];

const singleSelected = ref<string | number | undefined>(basicItems[1].value);
const multipleSelected = ref<(string | number)[]>([
  basicItems[0].value,
  basicItems[2].value,
]);
const objectSelected = ref<string | number | undefined>(
  objectValueItems[0].value
);
const noItemSelected = ref<string | number | undefined>(undefined);
</script>

<template>
  <Story :title="story.title" :icon="story.icon">
    <Variant title="Single Select">
      <div class="max-w-xs p-4">
        <ListBox
          v-model="singleSelected"
          :items="basicItems"
          placeholder="Select a person"
        />
        <p class="mt-2 text-sm text-muted">Selected: {{ singleSelected }}</p>
      </div>
    </Variant>

    <Variant title="Multiple Select">
      <div class="max-w-xs p-4">
        <ListBox
          v-model="multipleSelected"
          :items="basicItems"
          multiple
          placeholder="Select people"
        />
        <p class="mt-2 text-sm text-muted">
          Selected: {{ multipleSelected?.join(", ") }}
        </p>
      </div>
    </Variant>

    <Variant title="Object Values (uses number)">
      <div class="max-w-xs p-4">
        <ListBox
          v-model="objectSelected"
          :items="objectValueItems"
          placeholder="Select an object by its number value"
        />
        <p class="mt-2 text-sm text-muted">
          Selected Value: {{ objectSelected }}
        </p>
      </div>
    </Variant>

    <Variant title="Disabled ListBox">
      <div class="max-w-xs p-4">
        <ListBox
          v-model="noItemSelected"
          :items="basicItems"
          disabled
          placeholder="Cannot select (disabled)"
        />
      </div>
    </Variant>

    <Variant title="Empty Items List">
      <div class="max-w-xs p-4">
        <ListBox
          v-model="noItemSelected"
          :items="[]"
          placeholder="No items to select"
        />
      </div>
    </Variant>

    <Variant title="Custom Item Slot">
      <div class="max-w-xs p-4">
        <ListBox
          v-model="singleSelected"
          :items="basicItems.map((i) => ({ ...i, slot: 'customItem' }))"
          placeholder="Select with custom slot"
        >
          <template #customItem="{ item }">
            <div class="flex items-center">
              <Icon
                name="heroicons:user-circle-20-solid"
                class="w-5 h-5 mr-2 text-secondary"
              />
              <span class="font-medium text-accent">{{ item.label }}</span>
              <span class="ml-2 text-xs text-muted">(ID: {{ item.id }})</span>
            </div>
          </template>
        </ListBox>
        <p class="mt-2 text-sm text-muted">Selected: {{ singleSelected }}</p>
      </div>
    </Variant>

    <Variant title="Scrollable ListBox">
      <div class="max-w-xs p-4">
        <ListBox
          v-model="singleSelected"
          :items="[...basicItems, ...basicItems, ...basicItems, ...basicItems]"
          placeholder="Select a person"
          content-class="h-40"
        />
        <p class="mt-2 text-sm text-muted">Selected: {{ singleSelected }}</p>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
/* Add any story-specific styles here if needed */
.htw-max-w-xs {
  max-width: 20rem; /* approx 320px, Histoire uses this for grid items */
}
</style>
