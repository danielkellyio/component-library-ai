<script setup lang="ts">
interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  title?: string;
  description?: string;
  features?: Feature[];
  class?: string;
  gradient?: boolean;
  columns?: 2 | 3 | 4;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Features that empower your application",
  description:
    "Our component library is built with modern development practices in mind, offering a perfect balance of flexibility, performance, and developer experience.",
  features: () => [
    {
      title: "Modern Design System",
      description:
        "A cohesive design system with beautiful gradients, smooth animations, and consistent components.",
      icon: "heroicons:sparkles",
    },
    {
      title: "Type-Safe Components",
      description:
        "Built with TypeScript from the ground up, offering excellent type safety and developer experience.",
      icon: "heroicons:code-bracket",
    },
    {
      title: "Responsive by Default",
      description:
        "All components are built with container queries and responsive design principles in mind.",
      icon: "heroicons:device-phone-mobile",
    },
    {
      title: "Dark Mode Support",
      description:
        "Seamless dark mode integration with smooth transitions and perfect color contrasts.",
      icon: "heroicons:moon",
    },
    {
      title: "Accessible Components",
      description:
        "ARIA-compliant components that work great with screen readers and keyboard navigation.",
      icon: "heroicons:cursor-arrow-rays",
    },
    {
      title: "Developer Experience",
      description:
        "Extensive documentation, type hints, and consistent APIs make development a breeze.",
      icon: "heroicons:command-line",
    },
  ],
  columns: 3,
  gradient: false,
});
</script>

<template>
  <section
    :class="[
      'relative py-24 @container',
      props.gradient &&
        'bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5',
      props.class,
    ]"
  >
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-grid-primary/5 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]"
    />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center">
        <slot name="overline">
          <Badge variant="primary" gradient>
            <slot name="badge">Powerful Features</slot>
          </Badge>
        </slot>

        <h2
          class="mt-6 text-3xl font-bold tracking-tight text-base-content @[640px]:text-4xl"
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
        </h2>

        <p class="mt-4 text-lg leading-8 text-base-content/70">
          <slot name="description">{{ props.description }}</slot>
        </p>
      </div>

      <!-- Features Grid -->
      <div class="mx-auto mt-16">
        <slot name="features">
          <div
            :class="[
              'grid gap-8',
              {
                'grid-cols-1 @[640px]:grid-cols-2': props.columns === 2,
                'grid-cols-1 @[640px]:grid-cols-2 @[1024px]:grid-cols-3':
                  props.columns === 3,
                'grid-cols-1 @[640px]:grid-cols-2 @[1024px]:grid-cols-4':
                  props.columns === 4,
              },
            ]"
          >
            <article
              v-for="feature in props.features"
              :key="feature.title"
              class="group relative"
            >
              <!-- Feature Container -->
              <div class="flex items-start">
                <!-- Icon Container -->
                <div
                  :class="[
                    'mr-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl shadow-sm transition-colors',
                    props.gradient
                      ? 'primary-bg-gradient primary-content'
                      : 'bg-primary/10 text-primary group-hover:bg-primary/20',
                  ]"
                >
                  <Icon :name="feature.icon" class="h-8 w-8" />
                </div>

                <!-- Text Content -->
                <div class="min-w-0 flex-1">
                  <h3 class="text-xl font-semibold leading-7 text-base-content">
                    {{ feature.title }}
                  </h3>
                  <p class="mt-3 text-base leading-7 text-base-content/70">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </slot>
      </div>

      <!-- Optional Footer -->
      <div class="mt-16 flex justify-center">
        <slot name="footer">
          <Button variant="primary" size="lg" gradient>
            <template #before>
              <Icon name="heroicons:rocket-launch" class="mr-2 h-5 w-5" />
            </template>
            Get Started
          </Button>
        </slot>
      </div>
    </div>
  </section>
</template>
