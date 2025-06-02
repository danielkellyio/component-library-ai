<script setup lang="ts">
// Props for BlockNavbar, if any, would be defined here.
// For this example, we're keeping it simple and relying on slots of the generic Navbar.
</script>

<template>
  <Navbar>
    <template #start>
      <!-- Logo Slot Content for BlockNUiavbar -->
      <slot name="logo">
        <NuxtLink to="/" class="text-text text-xl font-bold"
          >BlockLogo</NuxtLink
        >
      </slot>
    </template>

    <template #end>
      <!-- User Profile Slot Content for BlockNavbar -->
      <slot name="user-profile">
        <!-- Placeholder for user profile specific to BlockNavbar -->
        <!-- Example: <UserProfileButton /> -->
      </slot>
    </template>
  </Navbar>
</template>

<style scoped>
/* Styles specific to BlockNavbar, if any. */
/* Most styling should come from the generic Navbar or be passed via Tailwind classes. */

/* Re-apply text-text and hover:text-primary if not inheriting as expected, */
/* or if BlockNavbar needs overrides. */
.text-text {
  color: var(--color-text);
}

.hover\:text-primary:hover {
  color: var(--color-primary);
}

/* Ensure the container class from the generic Navbar is not overridden if not intended */
/* The generic Navbar itself uses justify-between, so the container mx-auto here */
/* ensures the content within the generic Navbar's full-width structure is centered. */
</style>
