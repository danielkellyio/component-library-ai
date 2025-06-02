<script setup lang="ts">
import { Primitive as RekaPrimitive } from "reka-ui";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

// TODO: Consider moving to types/props.ts if widely used
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: string;
  // Add other props here as needed, e.g., disabled, loading
  disabled?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <RekaPrimitive
    as="button"
    :class="
      buttonVariants({
        variant: props.variant,
        size: props.size,
        class: props.class,
      })
    "
    :disabled="props.disabled"
  >
    <slot />
  </RekaPrimitive>
</template>

<style scoped>
/* Add any component-specific styles here if needed, prefer Tailwind classes */
.bg-primary {
  background-color: var(--color-primary);
}
.text-primary-foreground {
  color: var(--color-primary-foreground);
}
.hover\:bg-primary\/90:hover {
  background-color: color-mix(in srgb, var(--color-primary) 90%, transparent);
}

.bg-secondary {
  background-color: var(--color-secondary);
}
.text-secondary-foreground {
  color: var(--color-secondary-foreground);
}
.hover\:bg-secondary\/80:hover {
  background-color: color-mix(in srgb, var(--color-secondary) 80%, transparent);
}

.border-input {
  border-color: var(--color-border);
}

.hover\:bg-accent:hover {
  background-color: var(--color-accent);
}

.hover\:text-accent-foreground:hover {
  color: var(
    --color-primary-foreground
  ); /* Assuming accent foreground is primary foreground */
}

/* Destructive variant might need new color variables if not already defined */
.bg-destructive {
  background-color: var(
    --color-red,
    #ff0000
  ); /* Placeholder, define in theme.css */
}
.text-destructive-foreground {
  color: var(--color-white, #ffffff);
}
.hover\:bg-destructive\/90:hover {
  background-color: color-mix(
    in srgb,
    var(--color-red, #ff0000) 90%,
    transparent
  );
}

.ring-offset-background {
  --tw-ring-offset-color: var(--color-bg);
}
.focus-visible\:ring-ring:focus-visible {
  --tw-ring-color: var(--color-primary);
}

.text-primary {
  color: var(--color-primary);
}
</style>
