<script setup lang="ts">
import type { Story } from "histoire";
import Navbar from "./Navbar.vue";
import type { LinkItem } from "./Navbar.vue"; // Import LinkItem interface
// Import other components you might want to use in slots for demonstration
// import Button from "../Button/Button.vue";

const story = {
  id: "components-navbar",
  title: "Components/Navbar",
  variants: [],
} satisfies Story;

const sampleLinks: LinkItem[] = [
  { text: "Home", href: "#home" },
  { text: "Features", href: "#features", class: "font-bold text-secondary" },
  { text: "Pricing", href: "#pricing" },
  { text: "About", href: "#about", class: "italic" },
];

const simpleLinks: LinkItem[] = [
  { text: "Docs", href: "#docs" },
  { text: "API", href: "#api" },
];
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'single', iframe: false }">
    <Variant title="Default (Empty)">
      <Navbar />
    </Variant>

    <Variant title="With Start Content (Slot)">
      <Navbar>
        <template #start>
          <span class="text-text text-lg font-semibold">MyLogo</span>
        </template>
      </Navbar>
    </Variant>

    <Variant title="With Center Content (Links Prop)">
      <Navbar :links="simpleLinks" />
    </Variant>

    <Variant title="With Center Content (Links Prop - Custom Classes)">
      <Navbar :links="sampleLinks" />
    </Variant>

    <Variant title="With Center Content (Slot Fallback)">
      <Navbar>
        <template #center>
          <ul class="flex space-x-4">
            <li>
              <a href="#slot-link1" class="text-text hover:text-accent"
                >Slot Link 1</a
              >
            </li>
            <li>
              <a href="#slot-link2" class="text-text hover:text-accent"
                >Slot Link 2</a
              >
            </li>
          </ul>
        </template>
      </Navbar>
    </Variant>

    <Variant title="With End Content (Slot)">
      <Navbar>
        <template #end>
          <button
            class="bg-primary text-text px-4 py-2 rounded-md hover:opacity-80"
          >
            Action
          </button>
        </template>
      </Navbar>
    </Variant>

    <Variant title="With All Slots Used (No Links Prop)">
      <Navbar class="shadow-lg">
        <template #start>
          <div class="flex items-center">
            <svg
              class="h-8 w-8 text-secondary mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-10a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
            <span class="text-text text-xl font-bold">Brand</span>
          </div>
        </template>
        <template #center>
          <nav class="flex space-x-6">
            <a href="#" class="text-muted hover:text-accent font-medium"
              >Via Slot: Home</a
            >
            <a href="#" class="text-muted hover:text-accent font-medium"
              >Via Slot: Features</a
            >
          </nav>
        </template>
        <template #end>
          <div class="flex items-center space-x-3">
            <a href="#" class="text-text hover:text-primary text-sm">Login</a>
            <button
              class="bg-secondary text-surface px-3 py-1.5 rounded-md text-sm font-semibold hover:opacity-90 shadow-glow"
            >
              Sign Up
            </button>
          </div>
        </template>
      </Navbar>
    </Variant>

    <Variant title="All Slots + Links Prop (Prop Takes Precedence)">
      <Navbar :links="simpleLinks" class="shadow-lg border-2 border-accent">
        <template #start>
          <span class="text-text text-lg font-semibold">PropLogo</span>
        </template>
        <!-- Center slot content here will be ignored because links prop is provided -->
        <template #center>
          <span class="text-red-500"
            >THIS SHOULD NOT RENDER (Links prop provided)</span
          >
        </template>
        <template #end>
          <button
            class="bg-accent text-surface px-4 py-2 rounded-md hover:opacity-80"
          >
            Prop Action
          </button>
        </template>
      </Navbar>
    </Variant>

    <Variant title="Custom Styling via Class Prop">
      <Navbar
        :links="[{ text: 'Styled Link', href: '#', class: 'text-bg' }]"
        class="!bg-accent !border-primary rounded-lg"
      >
        <template #start>
          <span class="text-surface font-bold">Styled Navbar</span>
        </template>
        <template #end>
          <span class="text-surface">Custom classes!</span>
        </template>
      </Navbar>
    </Variant>
  </Story>
</template>

<style scoped>
/* Story-specific styles, if any */
.bg-primary {
  background-color: var(--color-primary);
}
.bg-secondary {
  background-color: var(--color-secondary);
}
.bg-accent {
  background-color: var(--color-accent);
}
.text-surface {
  color: var(--color-surface);
}
.text-text {
  color: var(--color-text);
}
.text-muted {
  color: var(--color-muted);
}
.text-accent {
  color: var(--color-accent);
}
.hover\:text-primary:hover {
  color: var(--color-primary);
}
.hover\:text-accent:hover {
  color: var(--color-accent);
}
.text-secondary {
  color: var(--color-secondary);
}
.border-primary {
  border-color: var(--color-primary);
}
.border-accent {
  border-color: var(--color-accent);
}
.shadow-glow {
  box-shadow: var(--shadow-glow);
}
.text-bg {
  color: var(--color-bg);
}
</style>
