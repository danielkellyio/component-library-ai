---
name: TagsInput
description: A component for inputting and managing a list of tags.
---

## Overview

The `TagsInput` component allows users to create a list of textual tags. Tags can be added by typing and then pressing Enter or comma, or when the input field loses focus. Existing tags can be removed by clicking a remove icon next to the tag or by pressing backspace in an empty input field.

## Props

| Prop          | Type       | Default            | Description                                                            |
| ------------- | ---------- | ------------------ | ---------------------------------------------------------------------- |
| `tags`        | `String[]` | `[]`               | An array of strings to be displayed as tags. Used for v-model binding. |
| `placeholder` | `String`   | `\'Add a tag...\'` | Placeholder text for the input field.                                  |

## Events

| Event         | Payload    | Description                            |
| ------------- | ---------- | -------------------------------------- |
| `update:tags` | `String[]` | Emitted when the list of tags changes. |

## Basic Usage

### Basic Example

```vue
<template>
  <TagsInput />
</template>

<script setup>
import TagsInput from "@/components/TagsInput.vue";
</script>
```

## More Examples

### With Initial Tags

You can provide an initial set of tags using the `tags` prop. This prop should be an array of strings. The component will emit an `update:tags` event when the tags list changes, allowing for two-way binding.

```vue
<template>
  <TagsInput v-model:tags="myTags" />
</template>

<script setup>
import { ref } from "vue";
import TagsInput from "@/components/TagsInput.vue";

const myTags = ref(["vue", "tailwind", "histoire"]);
</script>
```

### Custom Placeholder

Customize the input field\'s placeholder text using the `placeholder` prop.

```vue
<template>
  <TagsInput placeholder="Enter keywords..." />
</template>

<script setup>
import TagsInput from "@/components/TagsInput.vue";
</script>
```
