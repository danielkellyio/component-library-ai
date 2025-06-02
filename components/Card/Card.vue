<script setup lang="ts">
import { Primitive } from "reka-ui";
import { computed } from "vue";

interface Props {
  as?: string;
  asChild?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  asChild: false,
});

const delegatedProps = computed(() => {
  const { class: _, as: __, asChild: ___, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['rounded-md border bg-card text-card-foreground ', props.class]"
    v-bind="delegatedProps"
  >
    <div class="p-6">
      <slot name="header" />
    </div>
    <div class="p-6 pt-0">
      <slot />
    </div>
    <div class="flex items-center p-6 pt-0">
      <slot name="footer" />
    </div>
  </Primitive>
</template>

<style scoped>
.bg-card {
  background: var(--gradient-card);
  /* Fallback if gradient isn't supported or for specific needs */
  /* background-color: var(--color-surface); */
}

.text-card-foreground {
  color: var(--color-text);
}

.border {
  border-color: var(--color-border);
}

/* Add rounded-lg and shadow-sm if not covered by Tailwind defaults with CSS vars */
.rounded-lg {
  border-radius: var(--radius-lg);
}

.shadow-sm {
  /* A subtle shadow, can be adjusted based on theme.css or a new var */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
