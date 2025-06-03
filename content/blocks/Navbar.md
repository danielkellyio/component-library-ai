---
name: Navbar
description: The Navbar component provides a responsive and customizable navigation bar for your application.
---

## Overview

- Dark mode first, tech-focused design.
- Customizable logo, navigation links, and user profile sections via slots.
- Styled with Tailwind CSS and project-specific design tokens.

## Props

This component currently does not accept any props. Behavior and content are primarily controlled through slots.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

## Slots

| Name           | Description                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| `logo`         | Allows you to replace the default logo section. Expected content is typically an `<img>` tag or a brand name.         |
| `links`        | Used to define the navigation links. Expected content is typically a `<ul>` of `<li>` elements containing `<a>` tags. |
| `user-profile` | For adding user-related information or actions, like a user avatar, name, or logout button.                           |

## Basic Usage

First, import the component:

```vue
<script setup lang="ts">
import Navbar from "~/components/Block/Navbar/Navbar.vue";
</script>
```

Basic usage of the Navbar component:

```vue
<template>
  <Navbar />
</template>
```

## All Other Examples

### Customization Example

```vue
<template>
  <Navbar>
    <template #logo>
      <img src="/path/to/your/logo.svg" alt="My App Logo" class="h-10" />
    </template>

    <template #links>
      <ul class="flex space-x-4">
        <li>
          <a href="/dashboard" class="text-text hover:text-primary"
            >Dashboard</a
          >
        </li>
        <li>
          <a href="/settings" class="text-text hover:text-primary">Settings</a>
        </li>
      </ul>
    </template>

    <template #user-profile>
      <div class="flex items-center">
        <span class="text-text mr-2">Welcome, Jane!</span>
        <button class="bg-secondary text-surface px-3 py-1 rounded-md">
          Logout
        </button>
      </div>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import Navbar from "~/components/Block/Navbar/Navbar.vue";
</script>
```

### Styling Information

The Navbar uses the following CSS variables (design tokens) for its base styling:

- `var(--color-surface)`: Background color of the navbar.
- `var(--color-border)`: Border color for the bottom border.
- `var(--color-text)`: Default text color for links and other text.
- `var(--color-primary)`: Hover text color for links (can be customized).
- `var(--color-secondary)`: Used in examples for button backgrounds.

Further customization can be achieved by passing Tailwind CSS classes to the elements within the slots.
