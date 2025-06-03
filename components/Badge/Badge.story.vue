<script setup lang="ts">
import { hstEvent } from "histoire/client";
import Badge from "./Badge.vue";

const variants = ["primary", "secondary", "muted"] as const;
const iconName = "ph:check-circle-duotone";
</script>

<template>
  <Story title="Components/Badge" :layout="{ type: 'grid', width: 200 }">
    <Variant
      v-for="variant in variants"
      :key="variant"
      :title="variant.charAt(0).toUpperCase() + variant.slice(1)"
    >
      <Badge :variant="variant" @click="hstEvent('click', $event)">
        Badge {{ variant }}
      </Badge>
    </Variant>

    <Variant
      v-for="variant in variants"
      :key="`${variant}-icon-left`"
      :title="`${
        variant.charAt(0).toUpperCase() + variant.slice(1)
      } with Icon Left`"
    >
      <Badge :variant="variant" @click="hstEvent('click', $event)">
        <Icon :name="iconName" class="mr-1 h-4 w-4" />
        Icon {{ variant }}
      </Badge>
    </Variant>

    <Variant
      v-for="variant in variants"
      :key="`${variant}-icon-right`"
      :title="`${
        variant.charAt(0).toUpperCase() + variant.slice(1)
      } with Icon Right`"
    >
      <Badge :variant="variant" @click="hstEvent('click', $event)">
        Icon {{ variant }}
        <Icon :name="iconName" class="ml-1 h-4 w-4" />
      </Badge>
    </Variant>
  </Story>
</template>
