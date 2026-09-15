<template>
  <ClientOnly>
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="translate-y-4 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-4 opacity-0">
      <aside v-if="isVisible && promo" class="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-50 mx-auto w-[calc(100%-1.5rem)] max-w-sm lg:bottom-8 lg:left-auto lg:right-8 lg:mx-0">
        <div class="relative max-h-[25vh] overflow-hidden rounded-xl border border-stone-200 bg-white p-4 shadow-2xl">
          <button type="button" class="absolute right-2.5 top-2.5 cursor-pointer rounded-full bg-primary p-1 text-white transition-opacity hover:opacity-80" aria-label="Bildirimi kapat" @click="dismiss">
            <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <p class="pr-10 text-sm font-semibold text-secondary">{{ promo.title }}</p>
          <AppDownloadBadge :platform="promo.platform" size="md" class="mt-3" />
        </div>
      </aside>
    </Transition>
  </ClientOnly>
</template>
<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useAppPlatform } from "~/composables/useAppPlatform";
import { dismissAppPromo, getAppPromo, isAppPromoDismissed } from "~/utils/appPromos";

const props = defineProps({
  platform: { type: String, default: null },
  delay: { type: Number, default: 3000 },
  cooldownHours: { type: Number, default: 6 }
});

const detectedPlatform = useAppPlatform();
const targetPlatform = computed(() => props.platform || detectedPlatform.value);
const promo = computed(() => getAppPromo(targetPlatform.value));
const isVisible = ref(false);
let showTimer = null;

onMounted(() => {
  if (!promo.value || isAppPromoDismissed(targetPlatform.value, props.cooldownHours)) return;
  showTimer = setTimeout(() => {
    isVisible.value = true;
  }, props.delay);
});

onBeforeUnmount(() => {
  if (showTimer) clearTimeout(showTimer);
});

const dismiss = () => {
  isVisible.value = false;
  dismissAppPromo(targetPlatform.value);
};
</script>
