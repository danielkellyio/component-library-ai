<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(() =>
  queryCollection("content").path(route.path).first()
);
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>Page not found</div>
</template>
