<script setup lang="ts">
import type { Story } from "histoire";
import { ref } from "vue";
import Pagination from "./Pagination.vue";

const story = {
  id: "components-pagination",
  title: "Components/Pagination",
  variants: [],
} satisfies Story;

const currentPage = ref(1);
const totalPages = ref(10);
const maxVisibleButtons = ref(5);

const currentPageShort = ref(1);
const totalPagesShort = ref(3);

const currentPageLong = ref(15);
const totalPagesLong = ref(30);
const maxVisibleButtonsLong = ref(7);

const currentPageNearStart = ref(3);
const totalPagesNearStart = ref(20);

const currentPageNearEnd = ref(18);
const totalPagesNearEnd = ref(20);

const noPages = ref(0);

function handlePageChange(newPage: number) {
  currentPage.value = newPage;
}

function handlePageChangeShort(newPage: number) {
  currentPageShort.value = newPage;
}

function handlePageChangeLong(newPage: number) {
  currentPageLong.value = newPage;
}

function handlePageChangeNearStart(newPage: number) {
  currentPageNearStart.value = newPage;
}

function handlePageChangeNearEnd(newPage: number) {
  currentPageNearEnd.value = newPage;
}
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: 500 }">
    <Variant title="Default (10 pages)">
      <div
        class="p-4 rounded-lg bg-surface flex flex-col items-center space-y-4"
      >
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          :max-visible-buttons="maxVisibleButtons"
          @page-change="handlePageChange"
        />
        <p class="text-sm text-muted">Current Page: {{ currentPage }}</p>
      </div>
    </Variant>

    <Variant title="Short (3 pages)">
      <div
        class="p-4 rounded-lg bg-surface flex flex-col items-center space-y-4"
      >
        <Pagination
          :current-page="currentPageShort"
          :total-pages="totalPagesShort"
          @page-change="handlePageChangeShort"
        />
        <p class="text-sm text-muted">Current Page: {{ currentPageShort }}</p>
      </div>
    </Variant>

    <Variant title="Long (30 pages, 7 visible)">
      <div
        class="p-4 rounded-lg bg-surface flex flex-col items-center space-y-4"
      >
        <Pagination
          :current-page="currentPageLong"
          :total-pages="totalPagesLong"
          :max-visible-buttons="maxVisibleButtonsLong"
          @page-change="handlePageChangeLong"
        />
        <p class="text-sm text-muted">Current Page: {{ currentPageLong }}</p>
      </div>
    </Variant>

    <Variant title="Current Page Near Start (20 pages)">
      <div
        class="p-4 rounded-lg bg-surface flex flex-col items-center space-y-4"
      >
        <Pagination
          :current-page="currentPageNearStart"
          :total-pages="totalPagesNearStart"
          @page-change="handlePageChangeNearStart"
        />
        <p class="text-sm text-muted">
          Current Page: {{ currentPageNearStart }}
        </p>
      </div>
    </Variant>

    <Variant title="Current Page Near End (20 pages)">
      <div
        class="p-4 rounded-lg bg-surface flex flex-col items-center space-y-4"
      >
        <Pagination
          :current-page="currentPageNearEnd"
          :total-pages="totalPagesNearEnd"
          @page-change="handlePageChangeNearEnd"
        />
        <p class="text-sm text-muted">Current Page: {{ currentPageNearEnd }}</p>
      </div>
    </Variant>

    <Variant title="No Pages (Total Pages 0)">
      <div
        class="p-4 rounded-lg bg-surface flex flex-col items-center space-y-4"
      >
        <Pagination :current-page="1" :total-pages="noPages" />
        <p class="text-sm text-muted">Current Page: 1 (No pages to show)</p>
      </div>
    </Variant>

    <Variant title="One Page (Total Pages 1)">
      <div
        class="p-4 rounded-lg bg-surface flex flex-col items-center space-y-4"
      >
        <Pagination :current-page="1" :total-pages="1" />
        <p class="text-sm text-muted">Current Page: 1</p>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.bg-surface {
  background-color: var(--color-surface);
}
.text-muted {
  color: var(--color-muted);
}
</style>
