---
name: Avatar
description: Displays an image representing a user or entity, with a fallback to initials or a generic icon.
---

## Props

| Prop           | Type                        | Default     | Description                                                                    |
| -------------- | --------------------------- | ----------- | ------------------------------------------------------------------------------ |
| `src`          | `string`                    | `undefined` | The URL of the image to display.                                               |
| `alt`          | `string`                    | `undefined` | Alternative text for the image, important for accessibility.                   |
| `fallbackText` | `string`                    | `''`        | Text to display if the image fails to load (e.g., user initials).              |
| `size`         | `'sm' \| 'md' \| 'lg'`      | `'md'`      | Defines the size of the avatar.                                                |
| `shape`        | `'circle' \| 'square'`      | `'circle'`  | Defines the shape of the avatar. `'square'` uses `rounded-md`.                 |
| `class`        | `string \| object \| array` | `undefined` | Standard Vue class binding for applying additional styles to the root element. |

## Slots

This component does not have any named slots.

## Events

This component does not emit any events.

## Basic Usage

```vue
<template>
  <Avatar
    src="https://example.com/user.jpg"
    alt="User Name"
    fallbackText="UN"
  />
</template>
```

## More Examples

### Sizes

```vue
<template>
  <div class="flex items-center gap-4">
    <Avatar size="sm" fallbackText="SM" />
    <Avatar size="md" fallbackText="MD" />
    <Avatar size="lg" fallbackText="LG" />
  </div>
</template>
```

### Shapes

```vue
<template>
  <div class="flex items-center gap-4">
    <Avatar shape="circle" fallbackText="C" />
    <Avatar shape="square" fallbackText="S" />
  </div>
</template>
```

### Fallback Only

```vue
<template>
  <Avatar fallbackText="Daniel Kelly" />
</template>
```

### With Custom Styling

```vue
<template>
  <Avatar fallbackText="DK" class="border-2 border-primary shadow-glow" />
</template>
```
