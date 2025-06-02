<script setup lang="ts">
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { computed } from "vue";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-9 px-3 rounded-md",
        md: "h-10 px-4 py-2 rounded-md",
        lg: "h-11 px-8 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants>;

interface Props {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  asChild?: boolean;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  asChild: false,
  disabled: false,
  loading: false,
});

const delegatedProps = computed(() => {
  const { class: _, asChild: __, disabled: ___, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <Primitive
    :as-child="asChild"
    :disabled="disabled || loading"
    :class="[buttonVariants({ variant, size }), props.class]"
    v-bind="delegatedProps"
  >
    <slot v-if="!loading" />
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <slot v-if="loading" name="loading">
      <span class="ml-2">Loading...</span>
    </slot>
  </Primitive>
</template>

<style scoped>
.bg-primary {
  background-color: var(--color-primary);
}
.text-primary-foreground {
  color: var(--color-primary-foreground);
}
.bg-secondary {
  background-color: var(--color-secondary);
}
.text-secondary-foreground {
  color: var(--color-secondary-foreground);
}
.border-input {
  border-color: var(--color-border);
}
.hover\:bg-accent:hover {
  background-color: var(--color-accent);
}
.hover\:text-accent-foreground:hover {
  color: var(
    --color-bg
  ); /* Assuming accent foreground is dark text for light accent */
}

/* Add other CSS variable mappings as needed */
.ring-offset-background {
  /* Define if you have a specific offset background color */
}
.focus-visible\:ring-ring:focus-visible {
  /* Define if you have a specific ring color */
}
</style>
