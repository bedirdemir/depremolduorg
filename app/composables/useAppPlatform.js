import { onMounted, ref } from "vue";
import { detectAppPlatform } from "~/utils/appPromos";

export const useAppPlatform = () => {
  const platform = ref(null);

  onMounted(() => {
    platform.value = detectAppPlatform();
  });

  return platform;
};
