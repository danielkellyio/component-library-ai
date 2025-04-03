<script setup lang="ts">
import type { Story } from "histoire";
import Accordion from "./Accordion.vue";
import AccordionItem from "./AccordionItem.vue";

const story = {
  id: "components-accordion",
  title: "Components/Accordion",
  variants: [],
} satisfies Story;
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '600px' }">
    <!-- Single Accordion -->
    <Variant title="Single (Default)">
      <div class="p-6 rounded-lg">
        <Accordion>
          <AccordionItem
            value="item-1"
            title="What is the Accordion component?"
          >
            <p class="text-sm text-gray-300 leading-relaxed">
              The Accordion component is a vertically stacked set of interactive
              headings that each reveal a section of content. It's commonly used
              to reduce page length and organize complex content on a page.
            </p>
          </AccordionItem>
          <AccordionItem value="item-2" title="How does it work?">
            <p class="text-sm text-gray-300 leading-relaxed">
              The component uses a toggle mechanism to show and hide content. By
              default, only one panel can be open at a time, allowing users to
              focus on a specific section without being overwhelmed by
              information.
            </p>
          </AccordionItem>
          <AccordionItem value="item-3" title="When should I use it?">
            <p class="text-sm text-gray-300 leading-relaxed">
              Use accordions when you have a lot of information to present on a
              single page but want to avoid overwhelming the user with too much
              content at once. They're ideal for FAQs, product details, and
              content-heavy pages.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Variant>

    <!-- Multiple Accordion -->
    <Variant title="Multiple">
      <div class="p-6 rounded-lg">
        <Accordion type="multiple">
          <AccordionItem value="item-1" title="Best Frontend Frameworks">
            <p class="text-sm text-gray-300 leading-relaxed">
              Vue, React, Angular, and Svelte are among the most popular
              frontend frameworks. Each has its own strengths and use cases.
            </p>
          </AccordionItem>
          <AccordionItem value="item-2" title="State Management Solutions">
            <p class="text-sm text-gray-300 leading-relaxed">
              Pinia, Vuex, Redux, Recoil, and Zustand are all excellent options
              for state management, depending on your framework and specific
              requirements.
            </p>
          </AccordionItem>
          <AccordionItem value="item-3" title="UI Component Libraries">
            <p class="text-sm text-gray-300 leading-relaxed">
              Reka UI, TailwindUI, Headless UI, and Radix UI provide great
              primitive components that can be styled to match your design
              system.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Variant>

    <!-- With Default Value -->
    <Variant title="With Default Value">
      <div class="p-6 rounded-lg">
        <Accordion default-value="item-2">
          <AccordionItem value="item-1" title="First Item">
            <p class="text-sm text-gray-300 leading-relaxed">
              This item is closed by default.
            </p>
          </AccordionItem>
          <AccordionItem value="item-2" title="Second Item (Open by Default)">
            <p class="text-sm text-gray-300 leading-relaxed">
              This item is open by default because we've set
              defaultValue="item-2" on the Accordion component.
            </p>
          </AccordionItem>
          <AccordionItem value="item-3" title="Third Item">
            <p class="text-sm text-gray-300 leading-relaxed">
              This item is closed by default.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Variant>
  </Story>
</template>
