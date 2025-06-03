<script setup lang="ts">
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from "reka-ui";

interface PopoverProps {
  // Reka UI PopoverRoot props
  defaultOpen?: boolean;
  open?: boolean;
  modal?: boolean;

  // Reka UI PopoverContent props
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionBoundary?: Element | null | Array<Element | null>;
  collisionPadding?:
    | number
    | Partial<Record<"top" | "right" | "bottom" | "left", number>>;
  arrowPadding?: number;
  sticky?: "partial" | "always";
  hideWhenDetached?: boolean;

  // Custom props
  class?: string; // For PopoverContent
  triggerClass?: string; // For PopoverTrigger
  arrowClass?: string; // For PopoverArrow
  showArrow?: boolean;
}

const props = withDefaults(defineProps<PopoverProps>(), {
  side: "bottom",
  sideOffset: 8,
  align: "center",
  avoidCollisions: true,
  sticky: "partial",
  showArrow: true,
  modal: false,
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = useVModel(props, "open", emit, {
  passive: true,
  defaultValue: props.defaultOpen,
});
</script>

<template>
  <PopoverRoot v-model:open="open" :modal="props.modal">
    <PopoverTrigger :class="props.triggerClass" as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        :class="[
          'bg-surface border border-border rounded-md p-4 z-[--z-popover]',
          props.class,
        ]"
        :side="props.side"
        :side-offset="props.sideOffset"
        :align="props.align"
        :align-offset="props.alignOffset"
        :avoid-collisions="props.avoidCollisions"
        :collision-boundary="props.collisionBoundary"
        :collision-padding="props.collisionPadding"
        :arrow-padding="props.arrowPadding"
        :sticky="props.sticky"
        :hide-when-detached="props.hideWhenDetached"
      >
        <slot />
        <PopoverArrow
          v-if="props.showArrow"
          :class="[
            'fill-[var(--color-surface)] stroke-[var(--color-border)]',
            props.arrowClass,
          ]"
          :width="12"
          :height="6"
          as-child
        >
          <svg viewBox="0 0 30 10" preserveAspectRatio="none">
            <polygon points="0,0 30,0 15,10" class="stroke-1" />
          </svg>
        </PopoverArrow>
        <PopoverClose
          class="absolute top-1.5 right-1.5 p-1 rounded-sm hover:bg-bg-soft focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
        >
          <Icon name="heroicons:x-mark-20-solid" class="h-4 w-4 text-muted" />
        </PopoverClose>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style scoped>
.PopoverContent {
  /* Default transition for transform and opacity */
  transition-property: transform, opacity;
  transition-timing-function: ease-out;
  transition-duration: 0.15s; /* Faster default based on Reka examples */
}

.PopoverContent[data-state="open"] {
  animation: fadeIn 0.2s ease-out, scaleIn 0.2s ease-out;
  box-shadow: var(--shadow-glow);
}

.PopoverContent[data-state="closed"] {
  animation: fadeOut 0.15s ease-in;
  opacity: 0; /* Ensure it's hidden after animation */
}

.PopoverContent[data-side="top"] {
  animation-name: slideDownAndFade;
}
.PopoverContent[data-side="right"] {
  animation-name: slideLeftAndFade;
}
.PopoverContent[data-side="bottom"] {
  animation-name: slideUpAndFade;
}
.PopoverContent[data-side="left"] {
  animation-name: slideRightAndFade;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes slideUpAndFade {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideRightAndFade {
  from {
    opacity: 0;
    transform: translateX(-6px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes slideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-6px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideLeftAndFade {
  from {
    opacity: 0;
    transform: translateX(6px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
