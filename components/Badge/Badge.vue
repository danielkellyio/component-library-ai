<script setup lang="ts">
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { computed } from "vue";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary/20 text-primary-foreground border-primary border-2 shadow-[0_0_8px_var(--color-primary),0_0_16px_var(--color-primary)] hover:bg-primary/90",
        secondary:
          "text-secondary border-2 border-secondary bg-secondary/20 backdrop-blur-sm shadow-[0_0_12px_var(--color-secondary)] hover:bg-secondary/90 hover:text-secondary-foreground",
        muted:
          "text-muted bg-black/20 border border-[var(--color-border)]/30 hover:bg-black/90",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type BadgeProps = VariantProps<typeof badgeVariants>;

interface Props {
  variant?: BadgeProps["variant"];
  class?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  asChild: false,
});

const delegatedProps = computed(() => {
  const { class: _, asChild: __, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <Primitive
    :as-child="asChild"
    :class="[badgeVariants({ variant }), props.class]"
    v-bind="delegatedProps"
  >
    <slot />
  </Primitive>
</template>
