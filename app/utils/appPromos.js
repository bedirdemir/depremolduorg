export const APP_PROMO_STORAGE_PREFIX = "depremoldu:app-promo";
export const APP_PROMO_COOLDOWN_HOURS = 6;

export const APP_PROMOS = {
  ios: {
    platform: "ios",
    title: "Deprem Oldu uygulaması AppStore'da.",
    url: "https://apps.apple.com/tr/app/deprem-oldu-son-depremler/id6811368493",
    badgeSrc: "/Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg",
    badgeAlt: "App Store'dan edinin"
  }
  // android: Google Play yayını sonrası aynı alanlarla (platform, title, url, badgeSrc, badgeAlt) eklenmeli.
};

export const getAppPromo = platform => {
  const promo = APP_PROMOS[platform];
  if (!promo || !promo.url || !promo.badgeSrc) return null;
  return promo;
};

export const detectAppPlatform = () => {
  if (typeof navigator === "undefined") return null;
  const userAgent = navigator.userAgent || "";
  const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/i.test(userAgent) || isIPadOS) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return null;
};

const getStorageKey = platform => `${APP_PROMO_STORAGE_PREFIX}:${platform}:v1`;

export const isAppPromoDismissed = (platform, cooldownHours = APP_PROMO_COOLDOWN_HOURS) => {
  if (!platform || typeof window === "undefined") return false;
  try {
    const dismissedAt = Number(window.localStorage.getItem(getStorageKey(platform)));
    if (!dismissedAt) return false;
    return Date.now() - dismissedAt < cooldownHours * 60 * 60 * 1000;
  } catch (error) {
    return false;
  }
};

export const dismissAppPromo = platform => {
  if (!platform || typeof window === "undefined") return;
  try {
    window.localStorage.setItem(getStorageKey(platform), String(Date.now()));
  } catch (error) {
    return;
  }
};
