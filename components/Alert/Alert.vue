<script setup lang="ts">
import { computed, ref } from "vue";

export type AlertVariant = "info" | "success" | "warning" | "error";

interface Props {
  variant?: AlertVariant;
  title?: string;
  dismissible?: boolean;
  icon?: string;
  class?: string;
  gradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "info",
  dismissible: false,
  gradient: false,
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

const baseClasses = computed(() => [
  "rounded-lg p-4 backdrop-blur-sm",
  "flex gap-3 items-start",
  "border shadow-sm",
  props.gradient ? `${props.variant}-bg-gradient` : `${props.variant}-bg`,
  `${props.variant}-content`,
  `border-${props.variant}/50`,
  props.class,
]);

const iconClasses = computed(() => [
  "h-5 w-5 mt-0.5",
  `${props.variant}-content`,
]);
</script>

<template>
  <div v-if="visible" :class="baseClasses" role="alert">
    <Icon
      v-if="icon ?? iconMap[variant]"
      :name="icon ?? iconMap[variant]"
      :class="iconClasses"
    />

    <div class="flex-1">
      <div v-if="title" class="font-medium mb-1">
        {{ title }}
      </div>
      <div>
        <slot />
      </div>
    </div>

    <button
      v-if="dismissible"
      class="opacity-70 hover:opacity-100 transition-opacity"
      :class="`${props.variant}-content`"
      @click="dismiss"
    >
      <Icon name="heroicons:x-mark" class="h-5 w-5" />
    </button>
  </div>
</template>
