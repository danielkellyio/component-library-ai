# Alert Component

The Alert component is used to display important messages to users. It supports different variants for different types of messages and can include icons and dismissible functionality.

## Props

| Prop        | Type                                                                                              | Default   | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------- |
| variant     | 'default' \| 'primary' \| 'secondary' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' | 'info'    | The style variant of the alert                                                              |
| title       | string                                                                                            | undefined | Optional title for the alert                                                                |
| dismissible | boolean                                                                                           | false     | Whether the alert can be dismissed                                                          |
| icon        | string                                                                                            | undefined | Custom icon name (uses Iconify format). If not provided, uses default icon based on variant |
| class       | string                                                                                            | undefined | Additional CSS classes to apply                                                             |
| gradient    | boolean                                                                                           | false     | Whether to use gradient background                                                          |

## Examples

### Basic Alert

```vue
<Alert>This is a basic info alert</Alert>
```

### Alert with Title

```vue
<Alert title="Success!">Your changes have been saved</Alert>
```

### Dismissible Alert

```vue
<Alert dismissible>Click the X to dismiss this alert</Alert>
```

### Different Variants

```vue
<Alert variant="success">Operation successful</Alert>
<Alert variant="warning">Please review your input</Alert>
<Alert variant="error">An error occurred</Alert>
```

### With Custom Icon

```vue
<Alert icon="heroicons:bell">Custom icon alert</Alert>
```

### With Gradient Background

```vue
<Alert gradient>Gradient background alert</Alert>
```

## Slots

| Slot    | Description                   |
| ------- | ----------------------------- |
| default | The main content of the alert |
