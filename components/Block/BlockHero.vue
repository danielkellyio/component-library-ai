<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  class?: string;
  gradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Modern solutions for modern problems",
  description:
    "Empower your applications with our cutting-edge component library. Built for developers who care about code quality and user experience.",
  gradient: false,
});
</script>

<template>
  <section
    :class="[
      'relative overflow-hidden py-20',
      props.gradient &&
        'bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5',
      props.class,
    ]"
    class="@container"
  >
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-grid-primary/5 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]"
    />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="@[640px]:text-center">
        <!-- Main Content -->
        <div class="mx-auto max-w-3xl">
          <slot name="overline">
            <Badge variant="secondary" gradient>
              <slot name="badge">v1.0 Now Available</slot>
            </Badge>
          </slot>

          <h1
            class="mt-6 text-4xl font-bold tracking-tight text-base-content @[640px]:text-5xl @[768px]:text-6xl"
          >
            <slot name="title">
              <span
                :class="[
                  'inline-block',
                  props.gradient &&
                    'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent',
                ]"
              >
                {{ props.title }}
              </span>
            </slot>
          </h1>

          <p
            class="mt-6 text-lg leading-8 text-base-content/70 @[640px]:text-xl"
          >
            <slot name="description">{{ props.description }}</slot>
          </p>

          <!-- Action Buttons -->
          <div class="mt-8 flex gap-4 @[640px]:justify-center @[640px]:gap-6">
            <slot name="actions">
              <Button variant="primary" size="lg" gradient>
                <template #before>
                  <Icon name="heroicons:rocket-launch" class="mr-2 h-5 w-5" />
                </template>
                Get Started
              </Button>
              <Button variant="default" size="lg">
                <template #before>
                  <Icon name="heroicons:play" class="mr-2 h-5 w-5" />
                </template>
                Watch Demo
              </Button>
            </slot>
          </div>

          <!-- Optional Stats -->
          <div class="mt-10 @[640px]:justify-center">
            <slot name="stats">
              <dl
                class="grid grid-cols-1 gap-4 @[640px]:grid-cols-3 @[640px]:gap-8"
              >
                <div class="flex flex-col @[640px]:items-center">
                  <dt class="text-base leading-7 text-base-content/70">
                    Components
                  </dt>
                  <dd
                    class="text-2xl font-bold leading-9 tracking-tight text-base-content"
                  >
                    50+
                  </dd>
                </div>
                <div class="flex flex-col @[640px]:items-center">
                  <dt class="text-base leading-7 text-base-content/70">
                    Developers
                  </dt>
                  <dd
                    class="text-2xl font-bold leading-9 tracking-tight text-base-content"
                  >
                    10k+
                  </dd>
                </div>
                <div class="flex flex-col @[640px]:items-center">
                  <dt class="text-base leading-7 text-base-content/70">
                    Countries
                  </dt>
                  <dd
                    class="text-2xl font-bold leading-9 tracking-tight text-base-content"
                  >
                    150+
                  </dd>
                </div>
              </dl>
            </slot>
          </div>
        </div>

        <!-- Optional Visual Element -->
        <div class="mt-16">
          <slot name="visual">
            <div
              class="relative mx-auto overflow-hidden rounded-xl bg-base-200 shadow-2xl @[640px]:w-[480px] @[768px]:w-[640px] @[1024px]:w-[768px]"
            />
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>
