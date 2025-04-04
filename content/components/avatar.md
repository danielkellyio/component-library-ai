# Avatar

The Avatar component is used to represent a user or entity with an image or initials.

## Features

- Supports images with fallback to initials
- Multiple sizes (sm, md, lg, xl)
- Theme colors with optional gradient backgrounds
- Rounded or square variants
- Customizable through class prop

## Usage

```vue
<template>
  <!-- Basic usage with fallback -->
  <Avatar fallback="John Doe" />

  <!-- With image -->
  <Avatar src="https://example.com/avatar.jpg" alt="User avatar" />

  <!-- Different sizes -->
  <Avatar size="sm" fallback="John Doe" />
  <Avatar size="md" fallback="John Doe" />
  <Avatar size="lg" fallback="John Doe" />
  <Avatar size="xl" fallback="John Doe" />

  <!-- Theme colors -->
  <Avatar color="primary" fallback="John Doe" />
  <Avatar color="secondary" gradient fallback="John Doe" />

  <!-- Square variant -->
  <Avatar :rounded="false" fallback="John Doe" />
</template>
```

## Props

| Prop     | Type                                                                                              | Default   | Description                                              |
| -------- | ------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------- |
| src      | string                                                                                            | undefined | The source URL of the avatar image                       |
| alt      | string                                                                                            | undefined | Alt text for the avatar image                            |
| fallback | string                                                                                            | undefined | Text to generate initials from when no image is provided |
| size     | 'sm' \| 'md' \| 'lg' \| 'xl'                                                                      | 'md'      | Size of the avatar                                       |
| color    | 'default' \| 'primary' \| 'secondary' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' | 'default' | Theme color for the avatar background                    |
| gradient | boolean                                                                                           | false     | Whether to use gradient background for theme colors      |
| class    | string                                                                                            | undefined | Additional classes to apply to the avatar                |
| rounded  | boolean                                                                                           | true      | Whether to display the avatar as rounded or square       |

## Examples

### Basic Avatar with Fallback

```vue
<Avatar fallback="John Doe" />
```

### Avatar with Image

```vue
<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />
```

### Theme Colors

```vue
<template>
  <div class="flex items-center gap-4">
    <Avatar color="primary" fallback="John Doe" />
    <Avatar color="secondary" fallback="John Doe" />
    <Avatar color="success" gradient fallback="John Doe" />
  </div>
</template>
```

### Different Sizes

```vue
<template>
  <div class="flex items-center gap-4">
    <Avatar size="sm" fallback="John Doe" />
    <Avatar size="md" fallback="John Doe" />
    <Avatar size="lg" fallback="John Doe" />
    <Avatar size="xl" fallback="John Doe" />
  </div>
</template>
```

### Square Avatar

```vue
<Avatar
  :rounded="false"
  src="https://example.com/avatar.jpg"
  alt="User avatar"
/>
```
