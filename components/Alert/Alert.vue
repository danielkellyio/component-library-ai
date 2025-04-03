<script setup lang="ts">
import { computed, ref } from "vue";

export type AlertVariant = "info" | "success" | "warning" | "error";

interface Props {
  variant?: AlertVariant;
  title?: string;
  dismissible?: boolean;
  icon?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "info",
  dismissible: false,
});

const visible = ref(true);

const dismiss = () => {
  visible.value = false;
};

const iconMap = {
  info: "heroicons:information-circle",
  success: "heroicons:check-circle",
  warning: "heroicons:exclamation-triangle",
  error: "heroicons:x-circle",
};

const colorMap = {
  info: {
    bg: "bg-info/10",
    border: "border-info/30",
    text: "text-info-content",
    icon: "text-info-content",
  },
  success: {
    bg: "bg-success/10",
    border: "border-success/30",
    text: "text-success-content",
    icon: "text-success-content",
  },
  warning: {
    bg: "bg-warning/10",
    border: "border-warning/30",
    text: "text-warning-content",
    icon: "text-warning-content",
  },
  error: {
    bg: "bg-error/10",
    border: "border-error/30",
    text: "text-error-content",
    icon: "text-error-content",
  },
};

const baseClasses = computed(() => [
  "rounded-lg p-4 backdrop-blur-sm",
  "flex gap-3 items-start",
  "border shadow-sm",
  colorMap[props.variant].bg,
  colorMap[props.variant].border,
  props.class,
]);

const iconClasses = computed(() => [
  "h-5 w-5 mt-0.5",
  colorMap[props.variant].icon,
]);

const textClasses = computed(() => [colorMap[props.variant].text]);
</script>

<template>
  <div v-if="visible" :class="baseClasses" role="alert">
    <Icon
      v-if="icon ?? iconMap[variant]"
      :name="icon ?? iconMap[variant]"
      :class="iconClasses"
    />

    <div class="flex-1">
      <div v-if="title" class="font-medium mb-1" :class="textClasses">
        {{ title }}
      </div>
      <div :class="!title ? textClasses : ''">
        <slot />
      </div>
    </div>

    <button
      v-if="dismissible"
      class="opacity-70 hover:opacity-100 transition-opacity"
      :class="textClasses"
      @click="dismiss"
    >
      <Icon name="heroicons:x-mark" class="h-5 w-5" />
    </button>
  </div>
</template>
