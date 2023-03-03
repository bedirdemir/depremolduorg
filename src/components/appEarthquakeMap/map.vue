<template>
    <div id="mapContainer" class=" min-h-[75vh]"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
    data(){
        return {
            map: null,
            geojsonFeature: this.$store.state.EarthquakeMap.geojsonFeature
        }
    },
    mounted(){
        this.map = L.map("mapContainer").setView([39.1300, 35.2110], 5);
        L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
        }).addTo(this.map);

        function onEachFeature(feature, layer) {
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        };

        L.geoJSON(this.geojsonFeature, {
            onEachFeature,
            style: (feature) => {
			    return feature.properties && feature.properties.style;
            },
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, {
                    radius: 10,
                    color: "#000",
                    weight: 5,
                    opacity: 0.8,
                    fillOpacity: 1
                });
            }
        }).addTo(this.map);

    }
}
</script>