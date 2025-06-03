---
name: Badge
description: A badge is used to highlight an item\'s status for quick recognition.
---

## Overview

The Badge component is used to display a small piece of information, typically an item\'s status or a count, in a visually distinct way. It helps users quickly recognize the state or category of an item.

## Props

| Prop      | Type                                        | Default   | Description                                   |
| --------- | ------------------------------------------- | --------- | --------------------------------------------- |
| `variant` | `\'primary\' \| \'secondary\' \| \'muted\'` | `primary` | The visual style of the badge.                |
| `class`   | `string`                                    | `\'\'`    | Additional CSS classes to apply to the badge. |
| `asChild` | `boolean`                                   | `false`   | Whether to render as a child component.       |

## Slots

| Name    | Props | Description                          |
| ------- | ----- | ------------------------------------ |
| default | N/A   | The content to display in the badge. |

## Basic Usage

```vue
<template>
  <Badge variant="primary">Primary Badge</Badge>
  <Badge variant="secondary">Secondary Badge</Badge>
  <Badge variant="muted">Muted Badge</Badge>
</template>

<script setup>
import Badge from "@/components/Badge/Badge.vue";
</script>
```

## More Examples

### Primary

```vue
<template>
  <Badge variant="primary">Primary</Badge>
</template>
<script setup>
import Badge from "@/components/Badge/Badge.vue";
</script>
```

### Secondary

```vue
<template>
  <Badge variant="secondary">Secondary</Badge>
</template>
<script setup>
import Badge from "@/components/Badge/Badge.vue";
</script>
```

### Muted

```vue
<template>
  <Badge variant="muted">Muted</Badge>
</template>
<script setup>
import Badge from "@/components/Badge/Badge.vue";
</script>
```
