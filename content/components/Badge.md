---
name: Badge
description: A badge is used to highlight an item's status for quick recognition.
---

## Usage

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

## Props

| Prop      | Type                                  | Default   | Description                                   |
| --------- | ------------------------------------- | --------- | --------------------------------------------- |
| `variant` | `'primary' \| 'secondary' \| 'muted'` | `primary` | The visual style of the badge.                |
| `class`   | `string`                              | `''`      | Additional CSS classes to apply to the badge. |
| `asChild` | `boolean`                             | `false`   | Whether to render as a child component.       |

## Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | The content to display in the badge. |

## Examples

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
