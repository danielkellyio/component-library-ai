# Button

A versatile button component with multiple variants and states, designed for modern tech interfaces.

## Features

- Multiple style variants (primary, secondary, outline, ghost)
- Three size options (sm, md, lg)
- Loading state with spinner
- Disabled state
- Focus and hover states with smooth transitions
- Modern gradient backgrounds
- Glassmorphic effects
- Support for before and after content slots (perfect for icons)

## Props

| Prop     | Type                                             | Default   | Description                            |
| -------- | ------------------------------------------------ | --------- | -------------------------------------- |
| variant  | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | The visual style variant of the button |
| size     | 'sm' \| 'md' \| 'lg'                             | 'md'      | The size of the button                 |
| disabled | boolean                                          | false     | Whether the button is disabled         |
| loading  | boolean                                          | false     | Whether to show a loading spinner      |
| type     | 'button' \| 'submit' \| 'reset'                  | 'button'  | The HTML button type                   |

## Slots

| Name    | Description                                               |
| ------- | --------------------------------------------------------- |
| default | The main content of the button (typically text)           |
| before  | Content to be placed before the main content (e.g. icons) |
| after   | Content to be placed after the main content (e.g. icons)  |

## Examples

```vue
<!-- Primary button (default) -->
<Button>Click me</Button>

<!-- Secondary button with loading state -->
<Button variant="secondary" loading>Processing</Button>

<!-- Large outline button -->
<Button variant="outline" size="lg">Learn more</Button>

<!-- Small ghost button -->
<Button variant="ghost" size="sm">Cancel</Button>

<!-- Button with icons -->
<Button>
  <template #before>
    <NuxtIcon name="heroicons:plus" class="mr-2 h-5 w-5" />
  </template>
  Add Item
</Button>

<Button variant="secondary">
  Next Step
  <template #after>
    <NuxtIcon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
  </template>
</Button>
```

## Accessibility

The button component is built with accessibility in mind:

- Proper focus states with visible ring
- Disabled state properly conveyed to screen readers
- Loading state indicated visually and via ARIA
- Proper color contrast ratios for all variants
