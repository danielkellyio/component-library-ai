<script setup lang="ts">
import type { Story } from "histoire";
import Alert from "./Alert.vue";

const story = {
  id: "components-alert",
  title: "Components/Alert",
  variants: [],
} satisfies Story;

const variants = ["info", "success", "warning", "error"] as const;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '600px' }">
    <!-- Alert Variants -->
    <Variant title="Alert Variants">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <Alert variant="info">
          This is an informational alert with default settings.
        </Alert>

        <Alert variant="success">
          Your changes have been saved successfully!
        </Alert>

        <Alert variant="warning">
          Please review your information before continuing.
        </Alert>

        <Alert variant="error">
          An error occurred while processing your request.
        </Alert>
      </div>
    </Variant>

    <!-- Gradient Variants -->
    <Variant title="Gradient Variants">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <Alert variant="info" gradient>
          This is an informational alert with gradient background.
        </Alert>

        <Alert variant="success" gradient>
          Your changes have been saved successfully!
        </Alert>

        <Alert variant="warning" gradient>
          Please review your information before continuing.
        </Alert>

        <Alert variant="error" gradient>
          An error occurred while processing your request.
        </Alert>
      </div>
    </Variant>

    <!-- With Title -->
    <Variant title="With Title">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <Alert
          v-for="variant in variants"
          :key="variant"
          :variant="variant"
          :title="variant.charAt(0).toUpperCase() + variant.slice(1)"
        >
          This alert includes a title for better visibility and organization.
          Titles help users quickly identify the purpose of the alert.
        </Alert>
      </div>
    </Variant>

    <!-- Dismissible Alerts -->
    <Variant title="Dismissible Alerts">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <Alert
          v-for="variant in variants"
          :key="variant"
          :variant="variant"
          dismissible
        >
          This is a dismissible {{ variant }} alert. Click the X button to
          dismiss it.
        </Alert>
      </div>
    </Variant>

    <!-- Custom Icons -->
    <Variant title="Custom Icons">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <Alert variant="info" icon="heroicons:light-bulb">
          Did you know? You can customize the icon for any alert.
        </Alert>

        <Alert variant="success" icon="heroicons:rocket-launch">
          Your project has been successfully launched!
        </Alert>

        <Alert variant="warning" icon="heroicons:bell-alert">
          Your subscription is expiring soon. Please renew.
        </Alert>

        <Alert variant="error" icon="heroicons:shield-exclamation">
          Security alert: Unusual login detected.
        </Alert>
      </div>
    </Variant>

    <!-- Complete Alert Example -->
    <Variant title="Complete Alert Example">
      <div class="p-6 rounded-lg">
        <Alert variant="success" title="Deployment Completed" dismissible>
          <p class="mb-2">
            Your application has been successfully deployed to production.
          </p>
          <div class="flex gap-2 mt-3">
            <button
              class="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded hover:bg-green-600/30 transition-colors"
            >
              View Deployment
            </button>
            <button
              class="text-xs bg-white/10 text-white px-2 py-1 rounded hover:bg-white/20 transition-colors"
            >
              View Logs
            </button>
          </div>
        </Alert>
      </div>
    </Variant>
  </Story>
</template>
