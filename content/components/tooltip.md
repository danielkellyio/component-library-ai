---
name: Tooltip
description: A small pop-up that displays information when a user hovers over or focuses on an element.
---

## General Overview

The `Tooltip` component provides contextual information that appears when a user interacts with an element. It's built using Reka UI's Tooltip primitives and styled with Tailwind CSS according to the project's design system.

It can display simple text via the `text` prop or richer content using the `content` slot.

## Props

| Prop                      | Type                                                                         | Default     | Description                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `text`                    | `string`                                                                     | `undefined` | The text content to display inside the tooltip.                                                  |
| `side`                    | `"top" \| "right" \| "bottom" \| "left"`                                     | `"bottom"`  | The preferred side of the trigger to render the tooltip.                                         |
| `sideOffset`              | `number`                                                                     | `8`         | The offset from the trigger element along the specified `side`.                                  |
| `align`                   | `"start" \| "center" \| "end"`                                               | `"center"`  | The preferred alignment of the tooltip along the perpendicular axis to the `side`.               |
| `alignOffset`             | `number`                                                                     | `0`         | An offset for the alignment.                                                                     |
| `delayDuration`           | `number`                                                                     | `300`       | The duration from when the pointer enters the trigger until the tooltip opens. (In milliseconds) |
| `skipDelayDuration`       | `number`                                                                     | `100`       | How much time a user has to enter another trigger without incurring a delay. (In milliseconds)   |
| `disableHoverableContent` | `boolean`                                                                    | `true`      | When `true`, trying to hover the content will result in the tooltip closing.                     |
| `class`                   | `string`                                                                     | `undefined` | Custom CSS classes to apply to the tooltip content panel.                                        |
| `arrowClass`              | `string`                                                                     | `undefined` | Custom CSS classes to apply to the tooltip arrow.                                                |
| `avoidCollisions`         | `boolean`                                                                    | `true`      | Whether to prevent the tooltip from colliding with the edges of the viewport.                    |
| `collisionPadding`        | `number \| { top?: number, right?: number, bottom?: number, left?: number }` | `0`         | The padding around the viewport edges to respect when `avoidCollisions` is true.                 |
| `arrowPadding`            | `number`                                                                     | `undefined` | The padding between the arrow and the edges of the content.                                      |
| `sticky`                  | `"partial" \| "always"`                                                      | `"partial"` | The sticky behavior of the tooltip when the trigger is scrolled.                                 |
| `hideWhenDetached`        | `boolean`                                                                    | `undefined` | Whether to hide the tooltip when the trigger is detached from the DOM.                           |

## Slots

| Name      | Props | Description                                                                                                    |
| --------- | ----- | -------------------------------------------------------------------------------------------------------------- |
| `default` | N/A   | The trigger element(s) that will activate the tooltip on hover or focus. Should contain a single root element. |
| `content` | N/A   | Optional slot to provide custom HTML content for the tooltip. If used, the `text` prop will be ignored.        |

## Events

The `Tooltip` component does not emit custom events. It relies on Reka UI's internal event handling for its behavior.

## Basic Usage

Wrap your trigger element with the `Tooltip` component and provide the `text` prop.

```vue
<template>
  <Tooltip text="This is a helpful tip!">
    <Button>Hover Me</Button>
  </Tooltip>
</template>

<script setup>
import Tooltip from "@/components/Tooltip/Tooltip.vue";
import Button from "@/components/Button/Button.vue"; // Assuming you have a Button component
</script>
```

## More Examples

### Different Placements

You can control the `side` and `align` of the tooltip.

```vue
<template>
  <div class="flex space-x-4">
    <Tooltip text="Tooltip on top" side="top">
      <Button>Top</Button>
    </Tooltip>
    <Tooltip
      text="Tooltip on the right, aligned to start"
      side="right"
      align="start"
    >
      <Button>Right (Start)</Button>
    </Tooltip>
    <Tooltip
      text="Tooltip on the bottom, aligned to end"
      side="bottom"
      align="end"
    >
      <Button>Bottom (End)</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import Tooltip from "@/components/Tooltip/Tooltip.vue";
import Button from "@/components/Button/Button.vue";
</script>
```

### Custom Content

Use the `content` slot for more complex tooltip content.

```vue
<template>
  <Tooltip side="top">
    <Button>Hover for Rich Content</Button>
    <template #content>
      <div class="p-1">
        <h4 class="font-semibold text-text">Information</h4>
        <p class="text-sm text-muted">
          You can put <strong class="text-accent">HTML</strong> and icons here!
        </p>
        <Icon
          name="heroicons:star-solid"
          class="w-4 h-4 text-yellow-400 inline-block"
        />
      </div>
    </template>
  </Tooltip>
</template>

<script setup>
import Tooltip from "@/components/Tooltip/Tooltip.vue";
import Button from "@/components/Button/Button.vue";
</script>
```
