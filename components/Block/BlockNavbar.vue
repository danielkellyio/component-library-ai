<script setup lang="ts">
import { ref } from "vue";

interface Props {
  class?: string;
}

const props = defineProps<Props>();

const isOpen = ref(false);

const links = [
  { name: "Home", href: "#", current: true },
  { name: "Products", href: "#", current: false },
  { name: "Solutions", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="relative">
    <nav
      :class="[
        'w-full bg-base-100/80 backdrop-blur-lg border-b border-base-200',
        props.class,
      ]"
      class="@container"
    >
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <slot name="logo">
              <span class="text-xl font-bold text-primary">Logo</span>
            </slot>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden items-center @[768px]:flex">
            <div class="flex space-x-8">
              <a
                v-for="link in links"
                :key="link.name"
                :href="link.href"
                :class="[
                  'text-sm font-medium transition-colors duration-200',
                  link.current
                    ? 'text-primary'
                    : 'text-base-content/70 hover:text-primary',
                ]"
              >
                {{ link.name }}
              </a>
            </div>

            <!-- Desktop Actions -->
            <div class="ml-8 flex items-center space-x-4">
              <slot name="actions">
                <Button variant="default" size="sm">Sign in</Button>
                <Button variant="primary" size="sm" gradient
                  >Get Started</Button
                >
              </slot>
            </div>
          </div>

          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-base-content/70 hover:text-primary @[768px]:hidden"
            @click="toggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <Icon
              :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isOpen" class="border-t border-base-200 @[768px]:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.href"
            :class="[
              'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200',
              link.current
                ? 'text-primary bg-primary/10'
                : 'text-base-content/70 hover:text-primary hover:bg-base-200',
            ]"
          >
            {{ link.name }}
          </a>
        </div>
        <div class="border-t border-base-200 px-4 py-3 space-y-2">
          <slot name="mobile-actions">
            <Button variant="default" class="w-full justify-center">
              Sign in
            </Button>
            <Button variant="primary" gradient class="w-full justify-center">
              Get Started
            </Button>
          </slot>
        </div>
      </div>
    </nav>
  </header>
</template>
