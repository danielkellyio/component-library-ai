<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("components").path(route.path).first();
});
</script>
<template>
  <div class="mx-auto max-w-screen-md prose prose-invert">
    <h1 class="text-2xl font-bold">{{ page?.name }}</h1>
    <p class="text-sm text-muted-foreground">{{ page?.description }}</p>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
<style>
.prose h1 a,
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  text-decoration: none !important;
}
</style>
