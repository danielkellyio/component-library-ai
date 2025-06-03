<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "reka-ui";

const props = defineProps({
  open: Boolean,
  title: {
    type: String,
    required: true,
  },
  description: String,
  actionLabel: {
    type: String,
    default: "Confirm",
  },
  cancelLabel: {
    type: String,
    default: "Cancel",
  },
  hideCancel: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "default", // 'danger', 'warning', 'info', 'success'
  },
});

const emit = defineEmits(["update:open", "action", "cancel"]);

const openModel = computed({
  get: () => props.open,
  set: (value) => emit("update:open", value),
});

function handleAction() {
  emit("action");
  // Optionally close the dialog after action, or let parent control it
  // openModel.value = false
}

function handleCancel() {
  emit("cancel");
  openModel.value = false;
}

const iconName = computed(() => {
  switch (props.variant) {
    case "danger":
      return "heroicons:exclamation-triangle";
    case "warning":
      return "heroicons:exclamation-circle";
    case "success":
      return "heroicons:check-circle";
    case "info":
      return "heroicons:information-circle";
    default:
      return null;
  }
});

const iconColorClass = computed(() => {
  switch (props.variant) {
    case "danger":
      return "text-red-500"; // Consider adding these to theme.css if they become standard status colors
    case "warning":
      return "text-yellow-500";
    case "success":
      return "text-green-500";
    case "info":
      return "text-blue-500";
    default:
      return "text-text";
  }
});
</script>

<template>
  <AlertDialogRoot v-model:open="openModel">
    <slot name="trigger">
      <!-- Default trigger if not provided by parent -->
      <AlertDialogTrigger as-child>
        <button
          class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          Open Alert
        </button>
      </AlertDialogTrigger>
    </slot>
    <AlertDialogPortal>
      <AlertDialogOverlay
        class="fixed inset-0 z-[--z-modal] bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      <AlertDialogContent
        class="fixed left-1/2 top-1/2 z-[--z-modal] grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
        style="box-shadow: var(--shadow-glow)"
        @escape-key-down="handleCancel"
      >
        <div class="flex flex-col space-y-2 text-center sm:text-left">
          <AlertDialogTitle
            class="flex items-center text-lg font-semibold text-text"
          >
            <slot name="icon">
              <Icon
                v-if="iconName"
                :name="iconName"
                :class="['mr-2 h-5 w-5', iconColorClass]"
              />
            </slot>
            {{ title }}
          </AlertDialogTitle>
          <slot>
            <AlertDialogDescription
              v-if="description"
              class="text-sm text-muted"
            >
              {{ description }}
            </AlertDialogDescription>
          </slot>
        </div>
        <slot name="actions">
          <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <AlertDialogCancel
              v-if="!hideCancel"
              class="mt-2 sm:mt-0 inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              @click="handleCancel"
            >
              {{ cancelLabel }}
            </AlertDialogCancel>
            <AlertDialogAction
              class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              :class="{
                'bg-red-600 hover:bg-red-700': variant === 'danger',
                // Add other variant styles for action button if needed
              }"
              @click="handleAction"
            >
              {{ actionLabel }}
            </AlertDialogAction>
          </div>
        </slot>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
