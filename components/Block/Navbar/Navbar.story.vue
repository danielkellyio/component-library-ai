<script setup lang="ts">
import type { Story } from "histoire";
import Navbar from "./Navbar.vue";
// You might want to import other components if you plan to use them in slots
// import Button from "../../Button/Button.vue"; // Example

const story = {
  id: "block-navbar",
  title: "Blocks/Navbar",
  variants: [],
} satisfies Story;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'single', iframe: false }">
    <Variant title="Default">
      <Navbar />
    </Variant>

    <Variant title="With Custom Logo">
      <Navbar>
        <template #logo>
          <img
            src="https://via.placeholder.com/100x40.png?text=CustomLogo"
            alt="Custom Logo"
            class="h-10"
          />
        </template>
      </Navbar>
    </Variant>

    <Variant title="With Custom Links">
      <Navbar>
        <template #links>
          <ul class="flex space-x-6">
            <li>
              <a href="#" class="text-accent hover:text-primary font-semibold"
                >Dashboard</a
              >
            </li>
            <li>
              <a href="#" class="text-text hover:text-primary">Settings</a>
            </li>
            <li>
              <a href="#" class="text-text hover:text-primary">Profile</a>
            </li>
          </ul>
        </template>
      </Navbar>
    </Variant>

    <Variant title="With User Profile">
      <Navbar>
        <template #user-profile>
          <div class="flex items-center space-x-2">
            <span class="text-text">Welcome, User!</span>
            <button
              class="bg-primary text-text px-3 py-1 rounded-md hover:opacity-80 text-sm"
            >
              Logout
            </button>
          </div>
        </template>
      </Navbar>
    </Variant>

    <Variant title="Fully Customized">
      <Navbar>
        <template #logo>
          <div class="flex items-center space-x-2">
            <svg
              class="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 16v-2m8-8h-2M4 12H2m15.364 6.364l-1.414-1.414M6.343 6.343L4.929 4.93m12.728 0l-1.414 1.414m-1.414 12.728l1.414 1.414M12 18a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
            <span class="text-text text-2xl font-bold">MyApp</span>
          </div>
        </template>
        <template #links>
          <ul class="flex space-x-4 items-center">
            <li>
              <a
                href="#"
                class="text-text hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >Features</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-text hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >Pricing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-text hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >Docs</a
              >
            </li>
          </ul>
        </template>
        <template #user-profile>
          <button
            class="bg-secondary text-surface px-4 py-2 rounded-lg hover:opacity-90 text-sm font-semibold shadow-glow"
          >
            Sign Up
          </button>
        </template>
      </Navbar>
    </Variant>
  </Story>
</template>

<style scoped>
/* Story-specific styles if any */
.bg-primary {
  background-color: var(--color-primary);
}
.bg-secondary {
  background-color: var(--color-secondary);
}
.text-surface {
  color: var(--color-surface);
}
.text-text {
  color: var(--color-text);
}
.text-accent {
  color: var(--color-accent);
}
.hover\:text-primary:hover {
  color: var(--color-primary);
}
.hover\:text-secondary:hover {
  color: var(--color-secondary);
}
.shadow-glow {
  box-shadow: var(--shadow-glow);
}
</style>
