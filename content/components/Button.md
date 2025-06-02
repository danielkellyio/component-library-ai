---
name: Button
description: The Button component provides a clickable element that can be used to trigger actions or navigate.
---

## Import

```vue
<script setup lang="ts">
import Button from "~/components/Button/Button.vue";
</script>
```

## Usage

Basic usage of the Button component:

```vue
<template>
  <Button>Click Me</Button>
</template>
```

## Props

| Prop       | Type                                               | Default     | Description                                                            |
| ---------- | -------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | The visual style of the button.                                        |
| `size`     | `'sm' \| 'md' \| 'lg'`                             | `'md'`      | The size of the button.                                                |
| `asChild`  | `boolean`                                          | `false`     | Whether to render the button as a child element, inheriting its props. |
| `disabled` | `boolean`                                          | `false`     | Whether the button is disabled and cannot be interacted with.          |
| `loading`  | `boolean`                                          | `false`     | Whether the button is in a loading state, typically showing a spinner. |
| `class`    | `string`                                           | `''`        | Additional CSS classes to apply to the button.                         |

## Slots

| Name      | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| `default` | The main content of the button, typically text or an icon.                    |
| `loading` | Content to display when the `loading` prop is true. Defaults to "Loading...". |

## Examples

### Variants

```vue
<template>
  <div class="flex gap-2">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
</template>
```

### Sizes

```vue
<template>
  <div class="flex items-center gap-2">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
</template>
```

### Disabled State

```vue
<template>
  <Button disabled>Disabled Button</Button>
</template>
```

### Loading State

```vue
<template>
  <Button loading>Loading...</Button>
</template>
```

### As Child

This allows you to use a custom element (like a `div` or `NuxtLink`) as the button, while still applying the button's styling and behavior.

```vue
<template>
  <Button as-child>
    <NuxtLink to="/some-page" class="p-2 bg-accent text-white rounded">
      Go to Some Page
    </NuxtLink>
  </Button>
</template>
```
