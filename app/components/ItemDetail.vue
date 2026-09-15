<template>
  <div class="modal" :class="{ active: earthquakeStore.isModalActive }">
    <div class="bg-white p-2 rounded flex flex-col w-[95%] lg:w-5/12">
      <div class="flex justify-end mb-2">
        <a @click="earthquakeStore.modalToggle()" class="bg-primary text-white rounded cursor-pointer p-1.5">
          <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </a>
      </div>
      <div id="mapContainer" class="h-[26rem]"></div>
    </div>
  </div>
</template>
<script setup>
import { addLibertyBaseLayer } from "~/utils/maplibre";

const earthquakeStore = useEarthquakeStore();
const selectedItem = earthquakeStore.selectedItem;

onMounted(() => {
  const map = L.map("mapContainer", {
    minZoom: 1,
    maxZoom: 18,
    maxBounds: [
      [-85, -Infinity],
      [85, Infinity]
    ],
    maxBoundsViscosity: 1
  }).setView([selectedItem.lat, selectedItem.long], 9);

  addLibertyBaseLayer(map).catch(error => {
    console.error("OpenFreeMap Liberty katmanı yüklenemedi", error);
  });

  L.marker([selectedItem.lat, selectedItem.long]).addTo(map).bindPopup(`${selectedItem.region}<br><b>${selectedItem.magnitude} ${selectedItem.scale}</b>`).openPopup();
});
</script>
