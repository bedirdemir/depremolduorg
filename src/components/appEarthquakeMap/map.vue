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
                    radius: 8,
                    color: "#000",
                    weight: 3,
                    opacity: 0.8,
                    fillOpacity: 1
                });
            }
        }).addTo(this.map);

        L.Control.textbox = L.Control.extend({
            onAdd: function(map) {
                var text = L.DomUtil.create('div', "");
                text.id = "info_text";
                text.innerHTML = `
                    <div class='flex flex-col text-[.65rem]'>
                        <div class='bg-primary p-1 text-white text-center'>SON 500 DEPREM</div>
                        <div class="flex items-end p-1 space-x-2 bg-white">
                            <div class='flex gap-1 items-center'>
                                <div class='rounded-full p-2 bg-[#fde047] border-2 border-black'></div>
                                Küçük
                            </div>
                            <div class='flex gap-1 items-center'>
                                <div class='rounded-full p-2 bg-[#ef4444] border-2 border-black'></div>
                                Orta
                            </div>
                            <div class='flex gap-1 items-center'>
                                <div class='rounded-full p-2 bg-[#7f1d1d] border-2 border-black'></div>
                                Büyük
                            </div>
                        </div>
                    </div>
                `
                return text;
            }
        });
        L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
        L.control.textbox({ position: 'topright' }).addTo(this.map);

    }
}
</script>