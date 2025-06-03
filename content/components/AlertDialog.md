---
name: AlertDialog
description: A modal dialog that interrupts the user with important content and expects a response.
---

The `AlertDialog` component is used to present critical information or actions that require immediate user attention. It overlays the page content and typically requires the user to make a choice (e.g., confirm or cancel an action) before they can return to the main application.

## Props

| Prop          | Type      | Default   | Description                                                                                              |
| ------------- | --------- | --------- | -------------------------------------------------------------------------------------------------------- |
| `open`        | `Boolean` | `false`   | Controls the visibility of the dialog. Can be used with `v-model:open`.                                  |
| `title`       | `String`  |           | **Required.** The main title displayed in the dialog.                                                    |
| `description` | `String`  | `''`      | Optional descriptive text displayed below the title. Ignored if the default slot is used.                |
| `actionLabel` | `String`  | `Confirm` | Text label for the primary action button.                                                                |
| `cancelLabel` | `String`  | `Cancel`  | Text label for the cancel button.                                                                        |
| `hideCancel`  | `Boolean` | `false`   | If `true`, the cancel button will not be rendered. Useful for purely informational alerts.               |
| `variant`     | `String`  | `default` | Determines the visual style and default icon. Accepts `default`, `danger`, `warning`, `success`, `info`. |

## Slots

| Name      | Props | Description                                                                                                                           |
| --------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `trigger` |       | Custom content for the element that triggers the dialog opening. If not provided, a default "Open Alert" button is rendered.          |
| `icon`    |       | Custom icon content to display next to the title. Overrides the default variant-based icon.                                           |
| `default` |       | Custom content for the main body of the dialog. If provided, this slot's content will replace the `description` prop.                 |
| `actions` |       | Custom buttons or action controls. If provided, this slot's content will replace the default `actionLabel` and `cancelLabel` buttons. |

## Events

| Event         | Payload   | Description                                                                 |
| ------------- | --------- | --------------------------------------------------------------------------- |
| `update:open` | `boolean` | Emitted when the dialog's open state changes (for `v-model` compatibility). |
| `action`      |           | Emitted when the primary action button is clicked.                          |
| `cancel`      |           | Emitted when the cancel button is clicked or the dialog is dismissed.       |

## Basic Usage

```vue
<script setup lang="ts">
import { ref } from "vue";
import AlertDialog from "~/components/AlertDialog/AlertDialog.vue";

const showDialog = ref(false);

function handleConfirm() {
  console.log("Action confirmed!");
  showDialog.value = false;
}

function handleCancel() {
  console.log("Action cancelled.");
}
</script>

<template>
  <button @click="showDialog = true">Show Basic Alert</button>

  <AlertDialog
    v-model:open="showDialog"
    title="Confirm Action"
    description="Are you sure you want to proceed with this action? This cannot be undone."
    action-label="Yes, Proceed"
    @action="handleConfirm"
    @cancel="handleCancel"
  />
</template>
```

## More Examples

For more detailed examples, including different variants, custom triggers, and slot usage, please refer to the interactive stories. You can typically find these by running the Histoire development server for this project.

### Variants

The `variant` prop changes the default icon and can be used to style the action button (e.g., a red button for the `danger` variant).

- **Default:** No specific icon.
- **Danger:** Shows a warning triangle, and the action button is styled for destructive actions.
- **Warning:** Shows an exclamation circle.
- **Success:** Shows a checkmark circle.
- **Info:** Shows an information circle.

### Customizing Content

- Use the `trigger` slot to provide your own button or element to open the dialog.
- Use the `icon` slot to display a custom icon next to the title.
- Use the default slot to replace the simple text `description` with richer HTML content.
- Use the `actions` slot to define a completely custom set of buttons or controls if the standard confirm/cancel is not suitable.

Refer to the `AlertDialog.story.vue` file for runnable examples of these customizations.
