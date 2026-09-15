export const LIBERTY_STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
export const OPEN_FREE_MAP_ATTRIBUTION = '<a href="https://openfreemap.org/" target="_blank" rel="noopener">OpenFreeMap</a> &copy; <a href="https://openmaptiles.org/" target="_blank" rel="noopener">OpenMapTiles</a> Data from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>';

const UNPKG_URL = "https://unpkg.com";
const MAPLIBRE_GL_VERSION = "5.24.0";
const MAPLIBRE_GL_LEAFLET_VERSION = "0.1.4";

let loaderPromise = null;

const loadStylesheet = href =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${href}"]`)) {
      resolve();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Stil dosyası yüklenemedi: ${href}`));
    document.head.appendChild(link);
  });

const loadScript = src =>
  new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error(`Script dosyası yüklenemedi: ${src}`)));
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Script dosyası yüklenemedi: ${src}`));
    document.head.appendChild(script);
  });

export const loadMaplibreGL = () => {
  if (!loaderPromise) {
    loaderPromise = (async () => {
      await loadStylesheet(`${UNPKG_URL}/maplibre-gl@${MAPLIBRE_GL_VERSION}/dist/maplibre-gl.css`);
      await loadScript(`${UNPKG_URL}/maplibre-gl@${MAPLIBRE_GL_VERSION}/dist/maplibre-gl.js`);
      await loadScript(`${UNPKG_URL}/@maplibre/maplibre-gl-leaflet@${MAPLIBRE_GL_LEAFLET_VERSION}/leaflet-maplibre-gl.js`);

      if (typeof L === "undefined" || typeof L.maplibreGL !== "function") {
        throw new Error("MapLibre GL Leaflet başlatılamadı");
      }
    })().catch(error => {
      loaderPromise = null;
      throw error;
    });
  }

  return loaderPromise;
};

export const addLibertyBaseLayer = async map => {
  await loadMaplibreGL();

  const layer = L.maplibreGL({ style: LIBERTY_STYLE_URL, attributionControl: false });
  layer.addTo(map);
  map.attributionControl.addAttribution(OPEN_FREE_MAP_ATTRIBUTION);

  return layer;
};
