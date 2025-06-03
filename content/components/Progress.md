---
name: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---

::component-header

# Progress

::

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

## Usage

Progress components are useful for showing the status of ongoing processes, like uploads, downloads, or lengthy operations.

::component-example
:::example-progress-default
::
::

```vue [Default]
<template>
  <Progress :value="66" />
</template>
```

### Indeterminate State

When the `value` prop is `null` or `undefined`, the progress bar enters an indeterminate state. This is useful when the total progress is unknown.

::component-example
:::example-progress-indeterminate
::
::

```vue [Indeterminate]
<template>
  <Progress :value="null" />
</template>
```

### Sizes

The Progress component can have different sizes using the `size` prop.

::component-example
:::example-progress-sizes
::
::

```vue [Sizes]
<template>
  <div class="space-y-2">
    <Progress :value="33" size="sm" />
    <Progress :value="66" size="md" />
    <Progress :value="99" size="lg" />
  </div>
</template>
```

### Max Value

You can specify a custom maximum value using the `max` prop.

::component-example
:::example-progress-max
::
::

```vue [Max Value]
<template>
  <Progress :value="250" :max="500" />
</template>
```

## Props

| Prop    | Type                          | Default | Description                                                                            |
| :------ | :---------------------------- | :------ | :------------------------------------------------------------------------------------- |
| `value` | `Number \| null \| undefined` | `0`     | The current progress value. If `null` or `undefined`, an indeterminate state is shown. |
| `max`   | `Number`                      | `100`   | The maximum progress value.                                                            |
| `size`  | `"sm" \| "md" \| "lg"`        | `"md"`  | The size of the progress bar.                                                          |
| `class` | `String`                      | `''`    | Additional CSS classes to apply to the progress bar container.                         |

<!-- TODO: Add information about color variants once implemented -->
