# ColorPalette

A component for displaying and exploring color palettes used in the design system.

## Usage

```vue
<ColorPalette />
```

### Basic Usage

The default ColorPalette component displays all available system colors with their shade variations.

```vue
<ColorPalette />
```

### Custom Color Palettes

You can specify custom colors to display in the palette:

```vue
<ColorPalette
  :colors="{
    primary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
      (shade) => `var(--color-primary-${shade})`
    ),
    secondary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
      (shade) => `var(--color-secondary-${shade})`
    ),
  }"
/>
```

### Without Copy Button

You can hide the copy-to-clipboard button:

```vue
<ColorPalette :show-copy-button="false" />
```

### Custom Styling

Apply custom styles to the color palette:

```vue
<ColorPalette class="dark:bg-gray-800/50 border border-white/10" />
```

## Props

| Prop             | Type                       | Default                  | Description                                                                |
| ---------------- | -------------------------- | ------------------------ | -------------------------------------------------------------------------- |
| `colors`         | `Record<string, string[]>` | System colors and shades | Object containing color names as keys and arrays of color values as values |
| `showCopyButton` | `boolean`                  | `true`                   | Whether to show the copy-to-clipboard button on hover                      |
| `class`          | `string`                   | -                        | Custom CSS classes to apply to the component                               |

## CSS Variables

The component uses the following CSS variables for default colors:

- `--color-primary-{50-900}`: Primary color shades
- `--color-secondary-{50-900}`: Secondary color shades
- `--color-gray-{50-900}`: Gray color shades
- `--color-success-{50-900}`: Success color shades
- `--color-warning-{50-900}`: Warning color shades
- `--color-error-{50-900}`: Error color shades

## Examples

### Status Colors

```vue
<ColorPalette
  :colors="{
    success: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
      (shade) => `var(--color-success-${shade})`
    ),
    warning: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
      (shade) => `var(--color-warning-${shade})`
    ),
    error: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
      (shade) => `var(--color-error-${shade})`
    ),
  }"
/>
```

### Gradients

```vue
<ColorPalette
  :colors="{
    'blue-to-purple': ['linear-gradient(to right, #4F46E5, #9333EA)'],
    'green-to-blue': ['linear-gradient(to right, #10B981, #3B82F6)'],
  }"
/>
```

### Custom Brand Colors

```vue
<ColorPalette
  :colors="{
    brand: ['#FF5A5F', '#00A699', '#FC642D', '#484848', '#767676'],
  }"
/>
```
