<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "reka-ui";

interface TooltipProps {
  // Content
  text?: string; // Text to display in the tooltip

  // Reka UI TooltipContent props
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

  // Reka UI TooltipProvider props
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;

  // Custom props for styling
  class?: string; // For TooltipContent
  arrowClass?: string; // For TooltipArrow
}

const props = withDefaults(defineProps<TooltipProps>(), {
  side: "bottom",
  sideOffset: 8,
  align: "center",
  avoidCollisions: true,
  sticky: "partial",
  delayDuration: 300, // Shorter delay for tooltips
  skipDelayDuration: 100,
  disableHoverableContent: true, // Typically tooltips are not interactive
});

// If text prop is not provided, the default slot for content should be used.
// Otherwise, the text prop will be displayed.
const slots = useSlots();
const hasContentSlot = computed(() => !!slots.content);
</script>

<template>
  <TooltipProvider
    :delay-duration="props.delayDuration"
    :skip-delay-duration="props.skipDelayDuration"
    :disable-hoverable-content="props.disableHoverableContent"
  >
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          :class="[
            'bg-surface border border-border rounded-md px-3 py-1.5 text-sm text-text shadow-md z-[--z-popover]',
            'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
            'data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
            'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
            'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade',
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
          <slot v-if="hasContentSlot" name="content" />
          <template v-else-if="props.text">
            {{ props.text }}
          </template>
          <TooltipArrow
            :class="['fill-surface stroke-border', props.arrowClass]"
            :width="10"
            :height="5"
            as-child
          >
            <svg viewBox="0 0 30 10" preserveAspectRatio="none">
              <polygon points="0,0 30,0 15,10" class="stroke-1" />
            </svg>
          </TooltipArrow>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<style scoped>
/* Using Tailwind's JIT animations from project setup if available, or define here */
/* These are similar to Popover but can be simplified/adjusted for tooltips */

@keyframes slideUpAndFade {
  from {
    opacity: 0;
    transform: translateY(2px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideRightAndFade {
  from {
    opacity: 0;
    transform: translateX(-2px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes slideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-2px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideLeftAndFade {
  from {
    opacity: 0;
    transform: translateX(2px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Ensure animations are applied correctly */
.animate-slideUpAndFade {
  animation: slideUpAndFade 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-slideDownAndFade {
  animation: slideDownAndFade 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-slideLeftAndFade {
  animation: slideLeftAndFade 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-slideRightAndFade {
  animation: slideRightAndFade 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Add a subtle shadow using design tokens if needed, e.g. var(--shadow-glow) but Reka's default is often fine.
   The current shadow-md is a Tailwind utility.
   The shadow-glow is quite pronounced, might be too much for a tooltip.
   box-shadow: var(--shadow-glow);
*/
</style>
