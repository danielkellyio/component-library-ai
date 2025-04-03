<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The variant of the spinner
     * @default 'default'
     */
    variant?:
      | "default"
      | "gradient"
      | "ring"
      | "dual-ring"
      | "pulse"
      | "dots"
      | "wave"
      | "doppler";
    /**
     * The size of the spinner in pixels
     * @default 24
     */
    size?: number;
    /**
     * The color scheme of the spinner
     * @default 'primary'
     */
    color?: "primary" | "secondary" | "accent" | "white";
    /**
     * Custom class names
     */
    class?: string;
  }>(),
  {
    variant: "default",
    size: 24,
    color: "primary",
  }
);
</script>

<template>
  <div
    :class="['inline-flex items-center justify-center', props.class]"
    :style="{ width: `${size}px`, height: `${size}px` }"
    role="status"
    aria-label="Loading"
  >
    <!-- Default spinner (circular border) -->
    <template v-if="variant === 'default'">
      <div
        class="animate-spin rounded-full border-2 border-t-transparent"
        :class="[
          color === 'white'
            ? 'border-white'
            : color === 'secondary'
            ? 'border-secondary'
            : color === 'accent'
            ? 'border-accent'
            : 'border-primary',
        ]"
        :style="{ width: '100%', height: '100%' }"
      />
    </template>

    <!-- Gradient spinner -->
    <template v-else-if="variant === 'gradient'">
      <div
        class="animate-spin rounded-full"
        :class="[
          color === 'white'
            ? 'bg-gradient-to-r from-white/0 to-white'
            : color === 'secondary'
            ? 'bg-gradient-to-r from-secondary/0 to-secondary'
            : color === 'accent'
            ? 'bg-gradient-to-r from-accent/0 to-accent'
            : 'bg-gradient-to-r from-primary/0 to-primary',
        ]"
        :style="{ width: '100%', height: '100%' }"
      />
    </template>

    <!-- Ring spinner -->
    <template v-else-if="variant === 'ring'">
      <div
        class="animate-spin rounded-full border-4 border-solid border-t-transparent"
        :class="[
          color === 'white'
            ? 'border-white'
            : color === 'secondary'
            ? 'border-secondary'
            : color === 'accent'
            ? 'border-accent'
            : 'border-primary',
        ]"
        :style="{ width: '100%', height: '100%' }"
      />
    </template>

    <!-- Dual ring spinner -->
    <template v-else-if="variant === 'dual-ring'">
      <div class="relative w-full h-full">
        <div
          class="absolute inset-0 animate-spin rounded-full border-2 border-solid border-b-transparent border-r-transparent"
          :class="[
            color === 'white'
              ? 'border-white'
              : color === 'secondary'
              ? 'border-secondary'
              : color === 'accent'
              ? 'border-accent'
              : 'border-primary',
          ]"
          :style="{ width: '100%', height: '100%' }"
        />
        <div
          class="absolute inset-0 animate-spin rounded-full border-2 border-solid border-t-transparent border-l-transparent animate-[spin_1s_linear_infinite_reverse]"
          :class="[
            color === 'white'
              ? 'border-white'
              : color === 'secondary'
              ? 'border-secondary'
              : color === 'accent'
              ? 'border-accent'
              : 'border-primary',
          ]"
          :style="{ width: '80%', height: '80%', left: '10%', top: '10%' }"
        />
      </div>
    </template>

    <!-- Pulse spinner -->
    <template v-else-if="variant === 'pulse'">
      <div
        class="animate-pulse rounded-full"
        :class="[
          color === 'white'
            ? 'bg-white'
            : color === 'secondary'
            ? 'bg-secondary'
            : color === 'accent'
            ? 'bg-accent'
            : 'bg-primary',
        ]"
        :style="{ width: '100%', height: '100%' }"
      />
    </template>

    <!-- Dots spinner -->
    <template v-else-if="variant === 'dots'">
      <div class="flex space-x-1 items-center">
        <div
          v-for="i in 3"
          :key="i"
          class="animate-bounce rounded-full"
          :class="[
            {
              'delay-100': i === 2,
              'delay-200': i === 3,
            },
            color === 'white'
              ? 'bg-white'
              : color === 'secondary'
              ? 'bg-secondary'
              : color === 'accent'
              ? 'bg-accent'
              : 'bg-primary',
          ]"
          :style="{
            width: `${size / 5}px`,
            height: `${size / 5}px`,
          }"
        />
      </div>
    </template>

    <!-- Wave spinner -->
    <template v-else-if="variant === 'wave'">
      <div class="flex gap-0.5 items-end h-full">
        <div
          v-for="i in 5"
          :key="i"
          :class="[
            'w-1 h-full rounded-full animate-pulse',
            {
              'delay-100': i === 2,
              'delay-200': i === 3,
              'delay-300': i === 4,
              'delay-400': i === 5,
            },
            color === 'white'
              ? 'bg-white'
              : color === 'secondary'
              ? 'bg-secondary'
              : color === 'accent'
              ? 'bg-accent'
              : 'bg-primary',
          ]"
        />
      </div>
    </template>

    <!-- Doppler spinner -->
    <template v-else-if="variant === 'doppler'">
      <div class="relative w-full h-full">
        <div
          v-for="i in 3"
          :key="i"
          :class="[
            'absolute inset-0 rounded-full border-2',
            'animate-ping',
            { 'delay-200': i === 2, 'delay-400': i === 3 },
            color === 'white'
              ? 'border-white'
              : color === 'secondary'
              ? 'border-secondary'
              : color === 'accent'
              ? 'border-accent'
              : 'border-primary',
          ]"
        />
      </div>
    </template>
  </div>
</template>

<style>
@tailwind utilities;
</style>
