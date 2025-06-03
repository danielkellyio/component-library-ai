---
name: Accordion
description: A vertically stacked set of interactive headings that each reveal a section of content.
---

## General Overview

The Accordion component allows users to toggle the visibility of sections of content. It's built using Reka UI's accessible accordion primitives and is styled to fit the project's theme.

It consists of several parts:

- `Accordion`: The root container.
- `AccordionItem`: Wraps each individual accordion section.
- `AccordionTrigger`: The clickable header that toggles the content.
- `AccordionContent`: The content area that expands/collapses.

## Props

### Accordion

Inherits props from [Reka UI AccordionRoot](https://reka-ui.com/components/accordion#root).

| Prop           | Type                         | Default         | Description                                                                                                                                      |
| -------------- | ---------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `as`           | `AsTag \| Component`         | `'div'`         | The element or component this component should render as.                                                                                        |
| `asChild`      | `boolean`                    | `false`         | Change the default rendered element for the one passed as a child.                                                                               |
| `type`         | `'single' \| 'multiple'`     | `'single'`      | Determines if single or multiple items can be open at once.                                                                                      |
| `defaultValue` | `string \| string[]`         | -               | The value of the item(s) to be open by default. Use for uncontrolled state.                                                                      |
| `modelValue`   | `string \| string[]`         | -               | The controlled value of the item(s) that are open. Use with `v-model`.                                                                           |
| `collapsible`  | `boolean`                    | `false`         | When `type` is `"single"`, allows closing content when clicking trigger for an open item. If `defaultValue` is not set, this defaults to `true`. |
| `disabled`     | `boolean`                    | `false`         | If true, prevents user interaction with all accordion items.                                                                                     |
| `orientation`  | `'vertical' \| 'horizontal'` | `'vertical'`    | The orientation of the accordion.                                                                                                                |
| `dir`          | `'ltr' \| 'rtl'`             | Browser default | Reading direction.                                                                                                                               |
| `class`        | `string`                     | -               | Additional CSS classes for the root element.                                                                                                     |

### AccordionItem

Inherits props from [Reka UI AccordionItem](https://reka-ui.com/components/accordion#item).

| Prop       | Type                 | Default | Description                                                        |
| ---------- | -------------------- | ------- | ------------------------------------------------------------------ |
| `as`       | `AsTag \| Component` | `'div'` | The element or component this component should render as.          |
| `asChild`  | `boolean`            | `false` | Change the default rendered element for the one passed as a child. |
| `value`    | `string`             | **Req** | A unique value for the accordion item.                             |
| `disabled` | `boolean`            | `false` | If true, prevents user interaction with this specific item.        |
| `class`    | `string`             | -       | Additional CSS classes for the item element.                       |

### AccordionTrigger

Inherits props from [Reka UI AccordionTrigger](https://reka-ui.com/components/accordion#trigger).

| Prop      | Type                 | Default    | Description                                                        |
| --------- | -------------------- | ---------- | ------------------------------------------------------------------ |
| `as`      | `AsTag \| Component` | `'button'` | The element or component this component should render as.          |
| `asChild` | `boolean`            | `false`    | Change the default rendered element for the one passed as a child. |
| `class`   | `string`             | -          | Additional CSS classes for the trigger element.                    |

### AccordionContent

Inherits props from [Reka UI AccordionContent](https://reka-ui.com/components/accordion#content).

| Prop         | Type                 | Default | Description                                                                |
| ------------ | -------------------- | ------- | -------------------------------------------------------------------------- |
| `as`         | `AsTag \| Component` | `'div'` | The element or component this component should render as.                  |
| `asChild`    | `boolean`            | `false` | Change the default rendered element for the one passed as a child.         |
| `forceMount` | `boolean`            | `false` | Used to force mounting when more control is needed. Useful for animations. |
| `class`      | `string`             | -       | Additional CSS classes for the content element.                            |

## Slots

### Accordion

| Name      | Props | Description                            |
| --------- | ----- | -------------------------------------- |
| `default` | `{}`  | Place `AccordionItem` components here. |

### AccordionItem

| Name      | Props                                  | Description                                                      |
| --------- | -------------------------------------- | ---------------------------------------------------------------- |
| `default` | `{ open: boolean, disabled: boolean }` | Place `AccordionTrigger` and `AccordionContent` components here. |

### AccordionTrigger

| Name      | Props               | Description                                                     |
| --------- | ------------------- | --------------------------------------------------------------- |
| `default` | `{ open: boolean }` | Content for the trigger, usually text or other inline elements. |

### AccordionContent

| Name      | Props               | Description                                       |
| --------- | ------------------- | ------------------------------------------------- |
| `default` | `{ open: boolean }` | The content to be revealed when the item is open. |

## Events

### Accordion

| Event               | Payload              | Description                                                       |
| ------------------- | -------------------- | ----------------------------------------------------------------- |
| `update:modelValue` | `string \| string[]` | Emitted when the an item is opened or closed. Used for `v-model`. |

## Basic Usage

```vue
<template>
  <Accordion type="single" collapsible class="w-full max-w-sm">
    <AccordionItem value="item-1">
      <AccordionTrigger>What is an Accordion?</AccordionTrigger>
      <AccordionContent>
        An accordion is a vertically stacked set of interactive headings that
        each reveal a section of content.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
      <AccordionContent>
        Yes, if you set the `type` prop on the `Accordion` component to
        `"multiple"`.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" disabled>
      <AccordionTrigger>Disabled Item</AccordionTrigger>
      <AccordionContent>
        This content is not reachable because the item is disabled.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

## More Examples

### Multiple Open Items with Default Value

```vue
<template>
  <Accordion
    type="multiple"
    :default-value="['item-a', 'item-c']"
    class="w-full max-w-sm"
  >
    <AccordionItem value="item-a">
      <AccordionTrigger>Section A</AccordionTrigger>
      <AccordionContent
        >Content for section A. This one starts open.</AccordionContent
      >
    </AccordionItem>
    <AccordionItem value="item-b">
      <AccordionTrigger>Section B</AccordionTrigger>
      <AccordionContent>Content for section B.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-c">
      <AccordionTrigger>Section C</AccordionTrigger>
      <AccordionContent
        >Content for section C. This one also starts open.</AccordionContent
      >
    </AccordionItem>
  </Accordion>
</template>
```

### Customizing with Classes

```vue
<template>
  <Accordion
    type="single"
    collapsible
    class="w-full max-w-sm border-2 border-primary rounded-lg p-2"
  >
    <AccordionItem value="custom-1" class="mb-2 last:mb-0">
      <AccordionTrigger
        class="bg-primary/10 hover:bg-primary/20 text-primary rounded-md px-4"
      >
        Custom Styled Trigger
      </AccordionTrigger>
      <AccordionContent
        class="text-secondary p-4 border border-primary/20 rounded-b-md mt-[-1px]"
      >
        Custom styled content area with different text color.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="custom-2">
      <AccordionTrigger class="bg-bg-soft hover:bg-surface rounded-md px-4">
        Another Custom Trigger
      </AccordionTrigger>
      <AccordionContent class="p-4 text-muted">
        More content here.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```
