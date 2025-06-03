---
name: Popover
description: A floating content panel that displays information related to an anchor element when triggered.
---

## Overview

The Popover component is used to display rich content in a floating panel, typically triggered by a click or hover on an element. It's built using Reka UI's Popover primitives and styled with Tailwind CSS according to the project's design system.

It supports features like customizable positioning (side, alignment), collision avoidance, modal behavior, and an optional arrow pointing to the trigger.

## Props

| Prop                | Type                                        | Default     | Description                                                                                               |
| ------------------- | ------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `open`              | `boolean`                                   | `false`     | Controls the visibility of the popover. Can be used with `v-model:open`.                                  |
| `defaultOpen`       | `boolean`                                   | `false`     | The initial open state of the popover when uncontrolled.                                                  |
| `modal`             | `boolean`                                   | `false`     | If true, interaction with outside elements will be disabled and focus will be trapped within the popover. |
| `side`              | `'top' \| 'right' \| 'bottom' \| 'left'`    | `'bottom'`  | The preferred side of the trigger to render the popover against.                                          |
| `sideOffset`        | `number`                                    | `8`         | The distance in pixels from the trigger.                                                                  |
| `align`             | `'start' \| 'center' \| 'end'`              | `'center'`  | The preferred alignment against the trigger. May change when collisions occur.                            |
| `alignOffset`       | `number`                                    | `0`         | An offset in pixels from the `start` or `end` alignment options.                                          |
| `avoidCollisions`   | `boolean`                                   | `true`      | When `true`, overrides the side and align preferences to prevent collisions with boundary edges.          |
| `collisionBoundary` | `Element \| null \| Array<Element \| null>` | `null`      | The element(s) used as the collision boundary. Defaults to the viewport.                                  |
| `collisionPadding`  | `number \| Partial<Record<'top'...'>`       | `0`         | Distance from boundary edges where collision detection occurs.                                            |
| `arrowPadding`      | `number`                                    | `0`         | Padding between the arrow and the edges of the content. Prevents overflow with rounded corners.           |
| `sticky`            | `'partial' \| 'always'`                     | `'partial'` | Sticky behavior on the align axis.                                                                        |
| `hideWhenDetached`  | `boolean`                                   | `false`     | Whether to hide the content when the trigger becomes fully occluded.                                      |
| `class`             | `string`                                    | `''`        | Custom CSS classes to apply to the `PopoverContent` element.                                              |
| `triggerClass`      | `string`                                    | `''`        | Custom CSS classes to apply to the `PopoverTrigger` slot's child element.                                 |
| `arrowClass`        | `string`                                    | `''`        | Custom CSS classes to apply to the `PopoverArrow` element.                                                |
| `showArrow`         | `boolean`                                   | `true`      | Whether to display the arrow pointing to the trigger.                                                     |

## Slots

| Name      | Props | Description                                                                          |
| --------- | ----- | ------------------------------------------------------------------------------------ |
| `trigger` | `{}`  | The content that will trigger the popover. `PopoverTrigger` is `asChild` by default. |
| `default` | `{}`  | The main content to be displayed inside the popover.                                 |

## Events

| Event         | Payload   | Description                                    |
| ------------- | --------- | ---------------------------------------------- |
| `update:open` | `boolean` | Emitted when the popover's open state changes. |

## Basic Usage

```vue
<script setup lang="ts">
import Popover from "@/components/Popover/Popover.vue";
import Button from "@/components/Button/Button.vue"; // Assuming Button component
</script>

<template>
  <Popover>
    <template #trigger>
      <Button>Open Popover</Button>
    </template>
    <div>
      <h4 class="font-bold text-text">Popover Title</h4>
      <p class="text-sm text-muted">This is the content of the popover.</p>
    </div>
  </Popover>
</template>
```

## More Examples

### Modal Popover

To make the popover behave like a modal (blocking background interaction and trapping focus):

```vue
<template>
  <Popover modal>
    <template #trigger>
      <Button>Open Modal Popover</Button>
    </template>
    <p>
      This is a modal popover. Click outside or press Esc to close (if not
      configured otherwise).
    </p>
  </Popover>
</template>
```

### Positioning

Control the placement with `side` and `align` props:

```vue
<template>
  <Popover side="top" align="start">
    <template #trigger>
      <Button>Top Start</Button>
    </template>
    <p>Content aligned to the top start of the trigger.</p>
  </Popover>
</template>
```

### Without Arrow

To hide the arrow:

```vue
<template>
  <Popover :show-arrow="false">
    <template #trigger>
      <Button>No Arrow</Button>
    </template>
    <p>This popover has no arrow.</p>
  </Popover>
</template>
```

### Custom Styling

You can pass Tailwind classes to customize the trigger, content, and arrow:

```vue
<template>
  <Popover
    trigger-class="!bg-secondary !text-secondary-foreground"
    class="!bg-accent !text-text !border-primary"
    arrow-class="!fill-accent !stroke-primary"
  >
    <template #trigger>
      <Button>Styled Trigger</Button>
    </template>
    <p>This popover has custom styles applied.</p>
  </Popover>
</template>
```
