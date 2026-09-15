<template>
  <a v-if="promo" :href="promo.url" target="_blank" rel="noopener" :aria-label="promo.badgeAlt" :class="sizeClasses">
    <img :src="promo.badgeSrc" :alt="promo.badgeAlt" class="h-full w-auto" />
  </a>
</template>
<script setup>
import { computed } from "vue";
import { getAppPromo } from "~/utils/appPromos";

const props = defineProps({
  platform: { type: String, default: "ios" },
  size: { type: String, default: "md" }
});

const sizeClassMap = {
  sm: "inline-flex h-7 items-center lg:h-8",
  md: "inline-flex h-9 items-center lg:h-10"
};

const promo = computed(() => getAppPromo(props.platform));
const sizeClasses = computed(() => sizeClassMap[props.size] || sizeClassMap.md);
</script>
