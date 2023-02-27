<template>
    <div class="modal" :class="{active: $store.state.EarthquakeList.isModalActive}">
        <div class="bg-white p-10 rounded">
            <a @click="$store.commit('EarthquakeList/modalToggle')">Kapat</a>
            <div id="map">
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

