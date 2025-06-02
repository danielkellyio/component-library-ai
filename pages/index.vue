<script setup lang="ts">
const { data: comps } = await useAsyncData("components", () =>
  queryCollection("components").all()
);
</script>

<template>
  <div class="mx-auto max-w-screen-lg">
    <h1 class="text-2xl font-bold mb-8">Components</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card v-for="component in comps" :key="component.id">
        <template #header>
          <h3 class="text-lg font-semibold leading-none tracking-tight">
            {{ component.name }}
          </h3>
        </template>
        <p class="text-sm text-muted h-16">
          {{ component.description }}
        </p>
        <template #footer>
          <div class="flex justify-end w-full">
            <Button as-child variant="primary" size="sm">
              <NuxtLink :to="component.path">View</NuxtLink>
            </Button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
