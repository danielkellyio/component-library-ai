<script setup lang="ts">
// This component is intended to be a flexible base for navbars.
// Props might be added later for more advanced customization (e.g., fixed, sticky, variants).

export interface LinkItem {
  text: string;
  href: string;
  class?: string; // Optional custom classes for the link
  // Add other properties if needed, e.g., target, rel, icon
}

// Define props if you foresee any immediate needs, e.g., a class prop for custom styling.
// For now, we'll rely on slots and Tailwind classes passed via attributes.
interface Props {
  class?: string;
  links?: LinkItem[];
}
const props = defineProps<Props>();
</script>

<template>
  <nav
    :class="[
      'w-full flex items-center justify-between p-4 bg-surface border-b border-border',
      props.class, // Allows passing additional Tailwind classes or custom classes
    ]"
  >
    <div class="flex items-center space-x-4">
      <slot name="start">
        <!-- Default content for start slot, e.g., a placeholder -->
        <!-- <span class="text-muted">Start Slot</span> -->
      </slot>
    </div>

    <div class="flex items-center space-x-4">
      <!-- Render links from prop if provided -->
      <template v-if="props.links && props.links.length">
        <ul class="flex space-x-4">
          <li v-for="(link, index) in props.links" :key="index">
            <a
              :href="link.href"
              :class="['text-text hover:text-primary', link.class]"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </template>
      <!-- Fallback to center slot if links prop is not provided or for more custom content -->
      <slot v-else name="center">
        <!-- Default content for center slot, e.g., a placeholder -->
        <!-- <span class="text-muted">Center Slot</span> -->
      </slot>
    </div>

    <div class="flex items-center space-x-4">
      <slot name="end">
        <!-- Default content for end slot, e.g., a placeholder -->
        <!-- <span class="text-muted">End Slot</span> -->
      </slot>
    </div>
  </nav>
</template>

<style scoped>
/* Styles specific to the generic Navbar, if any. Prefer Tailwind utility classes. */
.bg-surface {
  background-color: var(--color-surface);
}

.border-border {
  border-color: var(--color-border);
}

.text-text {
  color: var(--color-text);
}

.hover\:text-primary:hover {
  color: var(--color-primary);
}

/* .text-muted is defined in the global design tokens, if needed directly in style */
/* Example:
.some-element {
  color: var(--color-muted);
}
*/
</style>
