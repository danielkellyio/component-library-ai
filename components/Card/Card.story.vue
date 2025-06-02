<script setup lang="ts">
import type { Story } from "histoire";
import Card from "./Card.vue";

const story = {
  id: "components-card",
  title: "Components/Card",
  variants: [],
} satisfies Story;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '500px' }">
    <Variant title="Default Card">
      <Card class="w-[350px]">
        <template #header>
          <h3 class="text-2xl font-semibold leading-none tracking-tight">
            Card Title
          </h3>
          <p class="text-sm text-muted">Card description or subtext</p>
        </template>
        <p>
          This is the main content of the card. It can be any text or elements
          you want to display.
        </p>
        <template #footer>
          <p>Card Footer</p>
        </template>
      </Card>
    </Variant>

    <Variant title="Card without Header">
      <Card class="w-[350px]">
        <p>
          This card only has content and a footer. The header slot is not used.
        </p>
        <template #footer>
          <p>Footer Only</p>
        </template>
      </Card>
    </Variant>

    <Variant title="Card without Footer">
      <Card class="w-[350px]">
        <template #header>
          <h3 class="text-2xl font-semibold leading-none tracking-tight">
            No Footer Card
          </h3>
        </template>
        <p>
          This card only has a header and content. The footer slot is not used.
        </p>
      </Card>
    </Variant>

    <Variant title="Minimal Card (Content Only)">
      <Card class="w-[350px]">
        <p>
          This is a minimal card with only the default slot (content) utilized.
        </p>
      </Card>
    </Variant>
  </Story>
</template>

<style scoped>
.border-secondary {
  border-color: var(--color-secondary);
}
.shadow-glow {
  box-shadow: var(--shadow-glow);
}
.text-secondary {
  color: var(--color-secondary);
}
.text-accent {
  color: var(--color-accent);
}
.text-muted {
  color: var(--color-muted);
}
</style>
