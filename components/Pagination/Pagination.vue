<script setup lang="ts">
import Button from "~/components/Button/Button.vue";

interface Props {
  currentPage: number;
  totalPages: number;
  maxVisibleButtons?: number;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  maxVisibleButtons: 5,
  ariaLabel: "Pagination navigation",
});

const emit = defineEmits(["pageChange"]);

const visiblePages = computed(() => {
  const { currentPage, totalPages, maxVisibleButtons } = props;
  if (totalPages <= 0) return [];
  if (totalPages <= maxVisibleButtons) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const half = Math.floor((maxVisibleButtons - 2) / 2); // -2 for potential ellipses
  let start = Math.max(2, currentPage - half);
  let end = Math.min(totalPages - 1, currentPage + half);

  const pages: (number | string)[] = [1];

  if (currentPage - half > 2 && maxVisibleButtons > 3) {
    pages.push("...");
  }

  // Adjust start and end if near boundaries to maintain maxVisibleButtons
  if (currentPage <= half + 2 && totalPages > maxVisibleButtons) {
    end = maxVisibleButtons - 2;
    start = 2;
  } else if (
    currentPage >= totalPages - half - 1 &&
    totalPages > maxVisibleButtons
  ) {
    start = totalPages - maxVisibleButtons + 3;
    end = totalPages - 1;
  }

  for (let i = start; i <= end; i++) {
    if (i > 1 && i < totalPages) {
      pages.push(i);
    }
  }

  if (
    currentPage + half < totalPages - 1 &&
    maxVisibleButtons > 3 &&
    end < totalPages - 1
  ) {
    pages.push("...");
  }
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  // Ensure first and last are not duplicated if they fall within start/end range
  // This logic is simplified by always adding 1 and totalPages, then filtering inside loop
  // The current logic aims to create a dynamic window.

  // Remove leading '...' if 1 and 2 are sequential
  if (pages[1] === "..." && pages[2] === 2) {
    pages.splice(1, 1);
  }

  // Remove trailing '...' if last two numbers are sequential
  if (
    pages[pages.length - 2] === "..." &&
    pages[pages.length - 3] === totalPages - 1
  ) {
    pages.splice(pages.length - 2, 1);
  }

  return pages;
});

const goToPage = (page: number | string) => {
  if (
    typeof page === "number" &&
    page >= 1 &&
    page <= props.totalPages &&
    page !== props.currentPage
  ) {
    emit("pageChange", page);
  }
};

const isCurrentPage = (page: number | string) => {
  return typeof page === "number" && page === props.currentPage;
};
</script>

<template>
  <nav
    :aria-label="props.ariaLabel"
    class="flex items-center justify-center space-x-1 @container"
  >
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === 1 || totalPages === 0"
      class="px-2.5 py-1.5"
      aria-label="Go to previous page"
      @click="goToPage(currentPage - 1)"
    >
      <Icon
        name="heroicons:chevron-left"
        class="w-4 h-4 @[400px]:w-5 @[400px]:h-5"
      />
    </Button>

    <template v-for="(page, index) in visiblePages" :key="index">
      <Button
        v-if="typeof page === 'number'"
        :variant="isCurrentPage(page) ? 'primary' : 'ghost'"
        size="sm"
        :class="
          [
            'px-3 py-1.5 min-w-[36px] @[400px]:min-w-[40px]',
            isCurrentPage(page) ? 'font-medium' : 'text-muted hover:text-text',
          ].join(' ')
        "
        :aria-current="isCurrentPage(page) ? 'page' : undefined"
        :aria-label="`Go to page ${page}`"
        @click="goToPage(page)"
      >
        {{ page }}
      </Button>
      <span
        v-else
        class="px-2 py-1.5 text-sm text-muted min-w-[36px] @[400px]:min-w-[40px] text-center"
        aria-hidden="true"
      >
        {{ page }}
      </span>
    </template>

    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === totalPages || totalPages === 0"
      class="px-2.5 py-1.5"
      aria-label="Go to next page"
      @click="goToPage(currentPage + 1)"
    >
      <Icon
        name="heroicons:chevron-right"
        class="w-4 h-4 @[400px]:w-5 @[400px]:h-5"
      />
    </Button>
  </nav>
</template>

<style scoped>
/* Tailwind is preferred for styling */
</style>
