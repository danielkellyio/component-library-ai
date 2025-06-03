<script setup lang="ts">
import type { Story, Variant } from "histoire";
import { ref } from "vue";
import { logEvent } from "histoire/client";
import AlertDialog from "./AlertDialog.vue";
// Assuming you have a Button component for custom trigger examples
// import Button from '../Button/Button.vue'

const story: Story = {
  id: "components-alertdialog",
  title: "Components/AlertDialog",
  icon: "carbon:warning-filled",
  meta: {
    sourceBackground: "dark",
  },
  variants: [], // Added to satisfy Story type
};

const variants: ReadonlyArray<
  "default" | "danger" | "warning" | "success" | "info"
> = ["default", "danger", "warning", "success", "info"];

// Reactive state for controlled examples
const isDialogOpen = ref(false);
const isNoCancelDialogOpen = ref(false);
const isCustomIconDialogOpen = ref(false);
const isCustomContentDialogOpen = ref(false);
const isCustomActionsDialogOpen = ref(false);

function handleAction(variantName: string) {
  logEvent("action fired", { variant: variantName });
  // For controlled examples, we might want to close them here or let the story control it
  // For instance, close the specific dialog that triggered the action:
  if (variantName === "Controlled") isDialogOpen.value = false;
  if (variantName === "No Cancel") isNoCancelDialogOpen.value = false;
  // etc. for other controlled dialogs if they emit actions
}

function handleCancel(variantName: string) {
  logEvent("cancel fired", { variant: variantName });
  // For controlled examples, they usually close themselves on cancel via v-model
}
</script>

<template>
  <Story
    :title="story.title"
    :layout="{ type: 'grid', width: 'calc(100% - 48px)' }"
  >
    <Variant title="Default (Uncontrolled)">
      <AlertDialog
        title="Default Alert"
        description="This is a default alert dialog. It opens when its internal trigger is clicked."
        action-label="Got it!"
        @action="handleAction('Default')"
        @cancel="handleCancel('Default')"
      />
    </Variant>

    <Variant title="Controlled Dialog">
      <button
        class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 transition-opacity mb-4"
        @click="isDialogOpen = true"
      >
        Open Controlled Alert
      </button>
      <AlertDialog
        v-model:open="isDialogOpen"
        title="Controlled Alert"
        description="This dialog's visibility is controlled by an external ref."
        action-label="Proceed"
        @action="handleAction('Controlled')"
        @cancel="handleCancel('Controlled')"
      />
    </Variant>

    <Variant title="Variants">
      <div class="flex flex-wrap gap-4">
        <AlertDialog
          v-for="variant in variants"
          :key="variant"
          :variant="variant"
          :title="`${variant.charAt(0).toUpperCase() + variant.slice(1)} Alert`"
          :description="`This is a ${variant} alert dialog.`"
          :action-label="variant === 'danger' ? 'Delete' : 'Confirm'"
          @action="handleAction(variant)"
          @cancel="handleCancel(variant)"
        >
          <template #trigger>
            <button
              :class="[
                'px-4 py-2 rounded-md hover:opacity-90 transition-opacity',
                variant === 'danger'
                  ? 'bg-red-600 text-white'
                  : 'bg-primary text-primary-foreground',
              ]"
            >
              {{ variant.charAt(0).toUpperCase() + variant.slice(1) }} Alert
            </button>
          </template>
        </AlertDialog>
      </div>
    </Variant>

    <Variant title="No Cancel Button">
      <button
        class="px-4 py-2 bg-accent text-white rounded-md hover:opacity-90 transition-opacity mb-4"
        @click="isNoCancelDialogOpen = true"
      >
        Open Alert (No Cancel)
      </button>
      <AlertDialog
        v-model:open="isNoCancelDialogOpen"
        title="Important Notice"
        description="This is an informational alert. You only need to acknowledge it."
        action-label="OK"
        hide-cancel
        @action="handleAction('No Cancel')"
        @cancel="handleCancel('No Cancel')"
      />
    </Variant>

    <Variant title="Custom Icon Slot">
      <button
        class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity mb-4"
        @click="isCustomIconDialogOpen = true"
      >
        Open Alert with Custom Icon
      </button>
      <AlertDialog
        v-model:open="isCustomIconDialogOpen"
        title="Custom Icon Here"
        description="This alert uses the icon slot."
        @action="handleAction('Custom Icon')"
        @cancel="handleCancel('Custom Icon')"
      >
        <template #icon>
          <Icon name="logos:vue" class="mr-2 h-6 w-6" />
        </template>
      </AlertDialog>
    </Variant>

    <Variant title="Custom Content Slot (replaces description)">
      <button
        class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity mb-4"
        @click="isCustomContentDialogOpen = true"
      >
        Open Alert with Custom Content
      </button>
      <AlertDialog
        v-model:open="isCustomContentDialogOpen"
        title="Alert with Rich Content"
        @action="handleAction('Custom Content')"
        @cancel="handleCancel('Custom Content')"
      >
        <div class="text-sm text-left">
          <p class="text-muted mb-2">
            This dialog uses the default slot to render custom content instead
            of the simple description string.
          </p>
          <ul class="list-disc list-inside text-muted space-y-1">
            <li>Custom lists</li>
            <li><strong>Formatted text</strong></li>
            <li>And more...</li>
          </ul>
        </div>
      </AlertDialog>
    </Variant>

    <Variant title="Custom Actions Slot">
      <button
        class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity mb-4"
        @click="isCustomActionsDialogOpen = true"
      >
        Open Alert with Custom Actions
      </button>
      <AlertDialog
        v-model:open="isCustomActionsDialogOpen"
        title="Needs Specific Actions"
        description="This dialog has custom actions defined via the actions slot."
        @cancel="handleCancel('Custom Actions')"
      >
        <template #actions>
          <div
            class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end w-full pt-4"
          >
            <button
              class="mt-2 sm:mt-0 inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-bg-soft"
              @click="
                () => {
                  logEvent('custom secondary action', {});
                  isCustomActionsDialogOpen = false;
                }
              "
            >
              Secondary Action
            </button>
            <button
              class="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
              @click="
                () => {
                  logEvent('custom primary action', {});
                  isCustomActionsDialogOpen = false;
                }
              "
            >
              Primary Custom Action
            </button>
          </div>
        </template>
      </AlertDialog>
    </Variant>
  </Story>
</template>

<style scoped>
/* Add any story-specific styles here if needed */
.htw-base button {
  /* histoire buttons might need specific styling if not inheriting correctly */
}
</style>
