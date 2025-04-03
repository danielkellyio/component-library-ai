<script setup lang="ts">
import type { Story } from "histoire";
import Toggle from "./Toggle.vue";
import { ref } from "vue";

const story = {
  id: "components-toggle",
  title: "Components/Toggle",
  variants: [],
} satisfies Story;

// Create reactive values for toggles
const toggleOff = ref(false);
const toggleOn = ref(true);

// Create a ref for each variant
const primaryToggle = ref(true);
const secondaryToggle = ref(true);
const successToggle = ref(true);
const warningToggle = ref(true);
const errorToggle = ref(true);

// Create a ref for each size
const smToggle = ref(true);
const mdToggle = ref(true);
const lgToggle = ref(true);

const notifications = ref(false);
const darkMode = ref(true);
const autoSave = ref(true);
const experimental = ref(false);
const disabled1 = ref(false);
const disabled2 = ref(true);

// For usage examples
const wifiEnabled = ref(true);
const bluetoothEnabled = ref(false);
const darkModeEnabled = ref(true);
const powerSaveEnabled = ref(false);
const settingsNotifications = ref(true);
const settingsEmailDigest = ref(false);
const settings2FA = ref(true);
const settingsDeveloperMode = ref(true);
</script>

<template>
  <Story :title="story.title" :layout="{ type: 'grid', width: '600px' }">
    <!-- Basic Toggle -->
    <Variant title="Basic Toggle">
      <div class="p-6 rounded-lg flex flex-col gap-6">
        <div class="flex items-center gap-8">
          <Toggle v-model="toggleOff" />
          <Toggle v-model="toggleOn" />
        </div>
      </div>
    </Variant>

    <!-- Toggle Variants -->
    <Variant title="Toggle Variants">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">primary</span>
          <Toggle v-model="primaryToggle" variant="primary" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">secondary</span>
          <Toggle v-model="secondaryToggle" variant="secondary" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">success</span>
          <Toggle v-model="successToggle" variant="success" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">warning</span>
          <Toggle v-model="warningToggle" variant="warning" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">error</span>
          <Toggle v-model="errorToggle" variant="error" />
        </div>
      </div>
    </Variant>

    <!-- Gradient Variants -->
    <Variant title="Gradient Variants">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">primary</span>
          <Toggle v-model="primaryToggle" variant="primary" gradient />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">secondary</span>
          <Toggle v-model="secondaryToggle" variant="secondary" gradient />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">success</span>
          <Toggle v-model="successToggle" variant="success" gradient />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">warning</span>
          <Toggle v-model="warningToggle" variant="warning" gradient />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">error</span>
          <Toggle v-model="errorToggle" variant="error" gradient />
        </div>
      </div>
    </Variant>

    <!-- Toggle Sizes -->
    <Variant title="Toggle Sizes">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">sm</span>
          <Toggle v-model="smToggle" size="sm" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">md</span>
          <Toggle v-model="mdToggle" size="md" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm w-24">lg</span>
          <Toggle v-model="lgToggle" size="lg" />
        </div>
      </div>
    </Variant>

    <!-- With Labels -->
    <Variant title="With Labels">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <Toggle v-model="notifications" label="Enable notifications" />
        <Toggle v-model="darkMode" label="Dark mode" />
        <Toggle v-model="autoSave" label="Auto-save" variant="success" />
        <Toggle
          v-model="experimental"
          label="Experimental features"
          variant="warning"
        />
      </div>
    </Variant>

    <!-- Disabled States -->
    <Variant title="Disabled States">
      <div class="p-6 rounded-lg flex flex-col gap-4">
        <Toggle v-model="disabled1" label="Disabled (off)" disabled />
        <Toggle v-model="disabled2" label="Disabled (on)" disabled />
      </div>
    </Variant>

    <!-- Usage Examples -->
    <Variant title="Usage Examples">
      <div class="p-6 rounded-lg space-y-6">
        <!-- Settings panel example -->
        <div class="p-4 bg-white/5 rounded-lg">
          <h3 class="text-lg font-medium mb-4">User Preferences</h3>

          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium text-sm">Notifications</div>
                <div class="text-xs">Receive alerts for new messages</div>
              </div>
              <Toggle v-model="settingsNotifications" />
            </div>

            <div class="border-t border-white/10 my-4" />

            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium text-sm">Email Digest</div>
                <div class="text-xs">Weekly summary of activity</div>
              </div>
              <Toggle v-model="settingsEmailDigest" variant="secondary" />
            </div>

            <div class="border-t border-white/10 my-4" />

            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium text-sm">2FA Authentication</div>
                <div class="text-xs">Enable additional security</div>
              </div>
              <Toggle v-model="settings2FA" variant="success" />
            </div>

            <div class="border-t border-white/10 my-4" />

            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium text-sm">Developer Mode</div>
                <div class="text-xs">
                  <span class="inline-flex items-center">
                    <Icon
                      name="heroicons:code-bracket"
                      class="h-3 w-3 mr-1 text-amber-400"
                    />
                    Advanced features
                  </span>
                </div>
              </div>
              <Toggle v-model="settingsDeveloperMode" variant="warning" />
            </div>
          </div>
        </div>

        <!-- Mobile component example -->
        <div class="max-w-xs mx-auto bg-white/5 rounded-2xl p-4">
          <div class="flex items-center justify-between mb-6">
            <h4 class="text-base font-medium">Quick Settings</h4>
            <Icon name="heroicons:cog-6-tooth" class="h-5 w-5" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              class="bg-white/5 rounded-xl p-3 flex flex-col items-center gap-2"
            >
              <Icon name="heroicons:wifi" class="h-6 w-6 text-blue-400" />
              <span class="text-xs">WiFi</span>
              <Toggle
                v-model="wifiEnabled"
                size="sm"
                variant="primary"
                class="mt-1"
              />
            </div>
            <div
              class="bg-white/5 rounded-xl p-3 flex flex-col items-center gap-2"
            >
              <Icon name="heroicons:signal" class="h-6 w-6 text-green-400" />
              <span class="text-xs">Bluetooth</span>
              <Toggle
                v-model="bluetoothEnabled"
                size="sm"
                variant="success"
                class="mt-1"
              />
            </div>
            <div
              class="bg-white/5 rounded-xl p-3 flex flex-col items-center gap-2"
            >
              <Icon name="heroicons:moon" class="h-6 w-6 text-secondary-400" />
              <span class="text-xs">Dark Mode</span>
              <Toggle
                v-model="darkModeEnabled"
                size="sm"
                variant="secondary"
                class="mt-1"
              />
            </div>
            <div
              class="bg-white/5 rounded-xl p-3 flex flex-col items-center gap-2"
            >
              <Icon
                name="heroicons:battery-100"
                class="h-6 w-6 text-amber-400"
              />
              <span class="text-xs">Power Save</span>
              <Toggle
                v-model="powerSaveEnabled"
                size="sm"
                variant="warning"
                class="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
