---
name: Card
description: A versatile card component for displaying content in a structured layout.
---

## Overview

The `Card` component is a flexible container for displaying information. It supports a header, main content, and a footer, allowing for various content arrangements.

It is built using the Reka UI `Primitive` component, ensuring it can be rendered as different HTML elements if needed and can seamlessly integrate with other Reka UI features.

## Props

| Prop      | Type      | Default | Description                                                                                                 |
| --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `as`      | `string`  | `'div'` | The HTML tag or component to render the card as.                                                            |
| `asChild` | `boolean` | `false` | Whether to merge props onto the child component instead of rendering a new element. Useful for composition. |
| `class`   | `string`  | `''`    | Custom Tailwind CSS classes to apply to the card.                                                           |

## Slots

| Name      | Description                            |
| --------- | -------------------------------------- |
| `header`  | Content for the card's header section. |
| `default` | Main content for the card.             |
| `footer`  | Content for the card's footer section. |

## Basic Usage

```vue
<template>
  <Card class="w-[350px]">
    <template #header>
      <h3 class="text-2xl font-semibold leading-none tracking-tight">
        Card Title
      </h3>
      <p class="text-sm text-muted">Card description or subtext</p>
    </template>
    <p>This is the main content of the card.</p>
    <template #footer>
      <p>Card Footer</p>
    </template>
  </Card>
</template>
```

## All Other Examples

### Styling

The Card component comes with default styling that aligns with the project's design system:

- **Background**: Uses `var(--gradient-card)` (a linear gradient from `#191933` to `#0f0f1f`).
- **Text Color**: Uses `var(--color-text)` (white).
- **Border**: Uses `var(--color-border)` (`#2a2a40`).
- **Border Radius**: Uses Tailwind's `rounded` class for a smaller, sharper radius. You can apply `rounded-lg` (which uses `var(--radius-lg)` for `24px`) via the `class` prop for larger rounding.
- **Shadow**: Uses `var(--shadow-glow)` (`0 0 8px #6f00ff, 0 0 16px #00e0ff`).

You can customize the appearance by passing Tailwind CSS utility classes via the `class` prop.

Example of a card with custom styling (larger radius and primary border):

```vue
<template>
  <Card class="w-[350px] rounded-lg border-primary">
    <template #header>
      <h3
        class="text-2xl font-semibold leading-none tracking-tight text-primary"
      >
        Customized Card
      </h3>
      <p class="text-sm text-muted">
        This card has a larger border radius and a primary border.
      </p>
    </template>
    <p>More custom styles can be applied as needed!</p>
    <template #footer>
      <p class="text-primary">Custom Footer</p>
    </template>
  </Card>
</template>
```

This will apply a larger radius using the `rounded-lg` class and a primary color border (you would need to ensure `.border-primary { border-color: var(--color-primary); }` is defined in your global styles or the component story for this specific example if not already available through Tailwind). The `text-primary` class is assumed to be available for text coloring.
