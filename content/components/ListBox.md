---
name: ListBox
description: A flexible ListBox component for selecting one or more items from a list, built with Reka UI and Tailwind CSS.
---

## Overview

The `ListBox` component provides a customizable way to present a list of options from which users can make selections. It supports single and multiple selection modes, disabled states, and custom rendering of items via slots.

It is built using Reka UI's `Listbox` primitives, ensuring accessibility and robust functionality.

## Props

| Prop           | Type                                                    | Default              | Description                                                                                                                      |
| -------------- | ------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `items`        | `Array<ListItem>`                                       | `[]`                 | An array of objects to populate the list. Each item object should have `id`, `label`, and `value`. Optional: `disabled`, `slot`. |
| `modelValue`   | `string \| number \| (string \| number)[] \| undefined` | `undefined`          | The currently selected value(s). Use with `v-model`.                                                                             |
| `multiple`     | `boolean`                                               | `false`              | If true, allows multiple items to be selected. `modelValue` will be an array.                                                    |
| `disabled`     | `boolean`                                               | `false`              | If true, disables the entire listbox, preventing interaction.                                                                    |
| `placeholder`  | `string`                                                | `'Select an option'` | Text displayed when no item is selected (more relevant if used with a trigger, currently not a visual element in this version).  |
| `class`        | `string`                                                | `''`                 | Custom CSS classes to apply to the root `ListboxRoot` element.                                                                   |
| `contentClass` | `string`                                                | `''`                 | Custom CSS classes to apply to the `ListboxContent` element.                                                                     |
| `itemClass`    | `string`                                                | `''`                 | Custom CSS classes to apply to each `ListboxItem` element.                                                                       |

### `ListItem` Interface

```typescript
interface ListItem {
  id: string | number; // Unique identifier for the key
  label: string; // Text to display for the item
  value: string | number; // The actual value to be used for v-model
  disabled?: boolean; // If true, this specific item is disabled
  slot?: string; // Optional: name of the scoped slot to use for rendering this item
}
```

## Slots

### `item` (default)

- **Scope**: `{ item: ListItem }`
- **Description**: Allows custom rendering for each item in the list. If an `item` object in the `items` prop has a `slot` property, it will try to use a slot with that name first.

**Example Usage:**

```vue
<ListBox :items="myItems" v-model="selectedValue">
  <template #item="{ item }">
    <Icon name="heroicons:academic-cap" class="mr-2" />
    <strong>{{ item.label }}</strong> ({{ item.value }})
  </template>
</ListBox>
```

If you define `item.slot = 'customSlotName'` in your items array, you can target it like so:

```vue
<ListBox :items="myItemsWithCustomSlotName" v-model="selectedValue">
  <template #customSlotName="{ item }">
    <!-- Custom rendering for items with slot: 'customSlotName' -->
    <span class="text-accent">{{ item.label }}</span>
  </template>
  
  <template #item="{ item }"> 
    <!-- Fallback for other items or if default slot is desired -->
    <span>{{ item.label }}</span>
  </template>
</ListBox>
```

## Events

- **`update:modelValue`**: Emitted when the selected value(s) change. Used implicitly by `v-model`.

## Basic Usage

```vue
<script setup>
const items = [
  { id: "1", label: "Apple", value: "apple" },
  { id: "2", label: "Banana", value: "banana" },
  { id: "3", label: "Orange", value: "orange", disabled: true },
];
const selectedFruit = ref("banana");
</script>

<template>
  <ListBox :items="items" v-model="selectedFruit" />
  <p>Selected: {{ selectedFruit }}</p>
</template>
```
