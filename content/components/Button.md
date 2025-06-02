# Button

`<Button>` is a fundamental interactive element used to trigger actions in an application.

## Overview

The Button component is built using Reka UI's `Primitive` for maximum flexibility and styled with Tailwind CSS. It supports various visual styles (variants) and sizes, and can be easily extended with icons or other custom content via slots.

## Props

| Prop       | Type                                                                          | Default     | Description                                                                 |
| ---------- | ----------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `variant`  | `'default'`, `'destructive'`, `'outline'`, `'secondary'`, `'ghost'`, `'link'` | `'default'` | The visual style of the button.                                             |
| `size`     | `'sm'`, `'default'`, `'lg'`                                                   | `'default'` | The size of the button.                                                     |
| `disabled` | `boolean`                                                                     | `false`     | If `true`, the button will be non-interactive and visually appear disabled. |
| `class`    | `string`                                                                      | `''`        | Additional CSS classes to apply to the button element.                      |

## Slots

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| default  | The main content of the button (e.g., text, icon). |
| `before` | Content to render before the default slot.         |
| `after`  | Content to render after the default slot.          |

## Usage

```vue
<template>
  <div>
    <Button variant="default" size="lg"> Primary Large Button </Button>

    <Button variant="secondary" @click="handleClick"> Secondary Action </Button>

    <Button variant="outline" disabled> Disabled Outline </Button>

    <Button variant="ghost">
      <template #before>
        <!-- Place your icon component here -->
        <span class="mr-2">🚀</span>
      </template>
      Ghost with Icon
    </Button>

    <Button variant="link" class="custom-link-style">
      A styled link button
    </Button>
  </div>
</template>

<script setup>
// import Button from '@/components/Button/Button.vue'; // Adjust path if necessary

const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

## Styling

The button relies on Tailwind CSS utility classes and CSS variables defined in `assets/theme.css` for its appearance. You can customize its look by overriding these variables or by passing additional classes via the `class` prop.

The following CSS variables from `theme.css` are primarily used:

- `--color-primary` & `--color-primary-foreground`
- `--color-secondary` & `--color-secondary-foreground`
- `--color-accent` & assumed `--color-accent-foreground` (currently falls back to primary-foreground)
- `--color-border`
- `--color-bg` (for focus ring offset)

For the `destructive` variant, placeholder colors (`--color-red`, `--color-white`) are used in `Button.vue`. These should be defined in `assets/theme.css` for consistent theming if a destructive/error state is commonly used across the application.

For the `link` variant, `--color-primary` is used for the text color.
