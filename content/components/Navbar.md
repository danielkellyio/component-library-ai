---
name: Navbar
description: The `Navbar` component is a flexible, unopinionated base for creating various navigation bar layouts. It provides `start`, `center`, and `end` slots to structure content, and can also generate navigation links from a `links` prop.
---

## Features

- Basic structure with `start`, `center`, and `end` content slots.
- Can generate navigation links in the center section via a `links` prop.
- `center` slot serves as a fallback if `links` prop is not provided, or for more custom center content.
- Styled with Tailwind CSS and inherits project-specific design tokens for surface and border.
- Customizable via a `class` prop to pass additional Tailwind or custom CSS classes.
- Dark mode first by default.

## Import

```vue
<script setup lang="ts">
import Navbar, { type LinkItem } from "~/components/Navbar/Navbar.vue"; // Adjust path as necessary
</script>
```

## Usage

The `Navbar` provides a basic structure with `start`, `center`, and `end` content slots. The `center` slot is utilized if the `links` prop is not provided or is an empty array, and is ideal for main navigation links or custom center content.

```vue
<template>
  <Navbar>
    <template #start>
      <span>My App</span>
    </template>
    <template #center>
      <!-- Custom content for center -->
      <a href="/home" class="text-text hover:text-primary">Home</a>
      <a href="/about" class="text-text hover:text-primary">About</a>
    </template>
    <template #end>
      <button>Login</button>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar/Navbar.vue"; // Adjust path as necessary
</script>
```

## Props

| Prop    | Type         | Default | Description                                                                                                                                                                                                          |
| ------- | ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `class` | `string`     | `''`    | Allows you to pass additional CSS classes (Tailwind or custom) to the root `nav` element for further styling.                                                                                                        |
| `links` | `LinkItem[]` | `[]`    | An array of `LinkItem` objects to generate navigation links in the center section. If provided, this will take precedence over the `center` slot. Each `LinkItem`: `{ text: string, href: string, class?: string }`. |

## Slots

| Name     | Description                                                                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `start`  | Content placed on the left side (or start) of the navbar. Typically used for logos, brand names, or primary navigation toggles (like a hamburger menu icon).                                |
| `center` | Content placed in the middle of the navbar. Ideal for main navigation links or custom center content. **Note:** This slot is used if the `links` prop is not provided or is an empty array. |
| `end`    | Content placed on the right side (or end) of the navbar. Suitable for action buttons, user profiles, or secondary navigation items.                                                         |

## Examples

### Using `links` Prop

The `links` prop can be used to generate navigation items automatically. This will take precedence over the `center` slot.

```vue
<script setup lang="ts">
import Navbar, { type LinkItem } from "~/components/Navbar/Navbar.vue"; // Adjust path as necessary

const navLinks: LinkItem[] = [
  { text: "Products", href: "/products" },
  { text: "Solutions", href: "/solutions", class: "font-semibold" },
  { text: "Contact Us", href: "/contact" },
];
</script>

<template>
  <Navbar :links="navLinks">
    <template #start>
      <img src="/logo.svg" alt="Logo" />
    </template>
    <template #end>
      <UserProfileWidget />
      <!-- Example custom component -->
    </template>
  </Navbar>
</template>
```

### Customization with `class` prop

The `Navbar` comes with minimal essential styling:

- Background: `var(--color-surface)`
- Bottom Border: `var(--color-border)`
- Default link color: `var(--color-text)`
- Default link hover color: `var(--color-primary)`

You can heavily customize its appearance by passing Tailwind utility classes through the `class` prop:

```vue
<script setup lang="ts">
import Navbar, { type LinkItem } from "~/components/Navbar/Navbar.vue"; // Adjust path as necessary

const someLinks: LinkItem[] = [
  { text: "Dashboard", href: "/dashboard" },
  { text: "Settings", href: "/settings" },
];
</script>

<template>
  <Navbar
    class="py-6 px-8 bg-primary text-white border-0 rounded-lg shadow-xl"
    :links="someLinks"
  >
    <template #start>
      <span>BrandLogo</span>
    </template>
    <template #end>
      <button class="bg-secondary text-secondary-foreground p-2 rounded">
        Sign Up
      </button>
    </template>
  </Navbar>
</template>
```

This approach allows for maximum flexibility, enabling you to create diverse navbar styles without modifying the core component. The component is dark mode first by default.

## Extending

This generic `Navbar` is designed to be a building block. More specific navbar implementations (like `BlockNavbar`) can use this component as their base, populating the slots with their required content or passing a `links` array, and applying further specific styling or logic.
