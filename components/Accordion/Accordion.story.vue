<script setup lang="ts">
import type { Story } from "histoire";
import Accordion from "./Accordion.vue";
import AccordionItem from "./AccordionItem.vue";
import AccordionTrigger from "./AccordionTrigger.vue";
import AccordionContent from "./AccordionContent.vue";

const story = {
  id: "components-accordion",
  title: "Components/Accordion",
  icon: "lucide:list-collapse",
  variants: [],
} satisfies Story;

const singleDefaultValue = "item-1";
const multipleDefaultValue = ["item-1"];
</script>

<template>
  <Story :title="story.title" :icon="story.icon">
    <Variant title="Default (Single)">
      <Accordion
        type="single"
        class="w-full max-w-md mx-auto"
        collapsible
        :default-value="singleDefaultValue"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Variant>

    <Variant title="Multiple Open">
      <Accordion
        type="multiple"
        class="w-full max-w-md mx-auto"
        :default-value="multipleDefaultValue"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
          <AccordionContent>
            Yes, by setting the `type` prop to `multiple`.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How about default open items?</AccordionTrigger>
          <AccordionContent>
            You can set `defaultValue` to an array of item values for
            `type="multiple"` or a string for `type="single"`.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can items be disabled?</AccordionTrigger>
          <AccordionContent>
            Yes, individual `AccordionItem` components can be disabled using the
            `disabled` prop.
            <Accordion type="single" class="w-full" collapsible disabled>
              <AccordionItem value="item-inner-1" class="mt-4">
                <AccordionTrigger>Inner Disabled Item 1</AccordionTrigger>
                <AccordionContent>
                  This content will not be shown as it's disabled.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Variant>

    <Variant title="Non-collapsible (Single type)">
      <Accordion
        type="single"
        class="w-full max-w-md mx-auto"
        :default-value="singleDefaultValue"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Always one open</AccordionTrigger>
          <AccordionContent>
            If `collapsible` is false (default for type single unless
            defaultValue is not provided) then one item will always remain open.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Another Item</AccordionTrigger>
          <AccordionContent> Content for the second item. </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Variant>
  </Story>
</template>
