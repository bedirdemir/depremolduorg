<template>
    <section class="px-2 py-3 lg:p-4">
        <list-item v-if="$store.state.EarthquakeList.isModalActive"></list-item>
        <ul v-if="$store.state.EarthquakeList.isLoaded">
            <li v-for="(earthquake,i) in $store.state.EarthquakeList.earthquakeList" :key="i" class="mb-2">
                <div class="flex justify-between p-3 border rounded w-full">
                    <div class="flex items-center gap-5 w-full">
                        <span :class="getDangerColor(earthquake.magnitude)" class="flex flex-col items-center border rounded px-4 py-3 font-semibold text-lg lg:py-2 lg:px-3">
                            {{ earthquake.magnitude }}
                            <span class=" text-xs font-normal">
                                {{ earthquake.scale }}
                            </span>
                        </span>
                        <div class="flex flex-col w-full">
                            <div>
                                <h2 class="text-base font-semibold max-[390px]:text-sm">{{ earthquake.region }}</h2>
                                <div class="flex space-x-1 items-center text-sm max-[390px]:text-xs lg:text-base">
                                    <svg class="w-3 inline-block text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z
                                        M23.812,10.132A12,12,0,0,0,3.578,3.415V1a1,1,0,0,0-2,0V5a2,2,0,0,0,2,2h4a1,1,0,0,0,0-2H4.827a9.99,9.99,0,1,1-2.835,7.878A.982.982,0,0,0,1,12a1.007,1.007,0,0,0-1,1.1,12,12,0,1,0,23.808-2.969Z"/></svg>
                                    <span class=" font-medium">{{ getRelativeTime(earthquake.date, earthquake.time) }}</span>
                                    
                                    <time>| {{earthquake.date}} {{ earthquake.time }}</time>
                                </div>
                            </div>
                            <div class="flex justify-between mt-1">
                                <div class="flex items-center gap-1">
                                    <svg class="w-3 inline-block text-gray-500" fill="currentColor" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
<g>

<g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">

<path d="M2066.1,4834.2c-74.4-22.1-203.1-66.3-287.5-98.5c-357.9-144.8-1178.3-591.2-1218.5-665.6c-38.2-70.4-24.1-154.8,32.2-199.1c30.2-24.1,72.4-42.2,94.5-42.2c22.1,0,162.9,70.4,313.7,158.8c542.9,313.7,997.3,518.8,1250.7,567c112.6,20.1,146.8,18.1,249.3-10.1c229.2-68.4,524.8-239.3,860.6-502.7c245.3-191,277.5-213.1,325.7-213.1c24.1,0,126.7,54.3,231.2,122.7c400.1,261.4,774.1,458.4,1065.7,561c185,66.3,366,62.3,573.1-8c223.2-76.4,669.6-297.6,1011.4-502.7c156.8-94.5,307.6-172.9,333.8-172.9c28.1,0,108.6,52.3,205.1,132.7c343.8,285.5,748,516.8,1021.5,585.1c130.7,32.2,150.8,32.2,295.6,2c269.5-56.3,679.6-275.5,1081.8-577.1c187-140.8,247.3-162.9,321.7-122.7c56.3,28.1,88.5,122.7,64.3,187c-40.2,104.6-542.9,454.4-916.9,637.4c-518.8,255.4-812.3,265.4-1272.8,50.3c-197.1-92.5-494.7-281.5-695.7-440.3c-66.3-50.3-124.6-92.5-130.7-92.5c-6,0-102.5,56.3-213.1,122.7c-259.4,156.8-754,400.1-985.3,482.6c-162.9,60.3-203.1,66.3-412.2,66.3c-205.1,2-249.3-4-392.1-56.3c-239.3-84.5-567-247.3-890.8-444.4l-289.6-172.9L3540,4307.4c-333.8,257.4-663.5,446.4-916.9,524.8C2452.2,4884.4,2247.1,4886.5,2066.1,4834.2z"/>

<path d="M5050,2879.7c-150.8-168.9-1719.2-2240-1727.2-2286.2c-8-40.2,2-70.4,36.2-112.6c68.4-78.4,158.8-78.4,235.2,2c32.2,32.2,343.8,434.3,695.7,892.8c349.9,458.4,655.5,852.5,675.6,874.7c38.2,38.2,38.2-16.1,38.2-3116.6c0-2650.1-4-3150.8-28.1-3126.7c-14.1,16.1-321.7,442.4-681.6,947c-361.9,504.7-671.6,922.9-689.7,931c-16.1,6-56.3,12.1-88.5,12.1c-66.3,0-140.8-80.4-140.8-152.8c0-46.3,1588.5-2292.2,1672.9-2364.6c58.3-50.3,160.9-46.3,211.1,8c24.1,26.1,436.3,538.9,918.9,1140.1c758,947.1,876.7,1103.9,876.7,1162.2c0,40.2-16.1,82.4-40.2,106.6c-46.3,46.2-156.8,54.3-205.1,16.1c-16.1-14.1-341.8-414.2-719.8-890.8c-378-474.5-705.8-882.7-725.9-904.8c-38.2-38.2-38.2,32.2-38.2,3114.6v3154.8l707.8-943c388.1-518.8,715.8-949.1,727.9-957.1c44.2-30.2,166.9-16.1,201.1,22.1c38.2,40.2,48.2,140.8,22.1,185c-52.3,84.4-1689,2266.1-1723.2,2296.3C5202.9,2938.1,5100.3,2934,5050,2879.7z"/>

<path d="M139.8,2409.2c-56.3-70.4-52.3-138.7,8-199.1l48.3-50.3h993.3h993.3l42.2,46.2c56.3,60.3,58.3,160.9,4,215.2c-38.2,38.2-66.4,40.2-1043.6,40.2H180L139.8,2409.2z"/>

<path d="M7587.6,2421.3c-54.3-60.3-50.3-176.9,8.1-223.2c44.2-36.2,98.5-38.2,1039.5-38.2c967.2,0,995.3,2,1033.5,40.2c24.1,24.1,40.2,66.4,40.2,110.6s-16.1,86.5-40.2,110.6c-38.2,38.2-66.3,40.2-1041.6,40.2C7641.9,2461.5,7623.8,2461.5,7587.6,2421.3z"/>

<path d="M159.9-45.9C91.6-104.2,85.5-194.7,143.8-265l50.3-58.3h999.3h999.3l38.2,48.3c56.3,70.4,50.3,170.9-14.1,221.2c-52.3,42.2-72.4,42.2-1033.5,42.2C278.6-11.7,200.1-13.7,159.9-45.9z"/>

<path d="M7597.7-51.9c-88.5-88.5-62.3-219.2,54.3-263.4c32.2-12.1,418.2-16.1,1015.4-14.1l965.2,6l38.2,48.3c56.3,70.4,50.3,170.9-14.1,221.2c-52.3,42.2-72.4,42.2-1035.5,42.2C7668-11.7,7635.9-13.7,7597.7-51.9z"/>

<path d="M153.9-2545.2c-50.3-52.3-58.3-72.4-48.3-126.7c26.1-138.8-12.1-134.7,1077.8-134.7c961.1,0,981.2,0,1033.5,42.2c64.3,50.3,70.4,150.8,14.1,221.2l-38.2,48.3l-989.3,6l-987.3,6L153.9-2545.2z"/>

<path d="M7643.9-2505c-108.6-44.2-130.7-176.9-46.2-261.4c38.2-38.2,70.4-40.2,1023.5-40.2c963.1,0,983.2,0,1035.5,42.2c64.3,50.3,70.4,150.8,14.1,221.2l-38.2,48.3l-973.2,4C8122.5-2488.9,7668-2495,7643.9-2505z"/>

</g>

</g>
                                    </svg>
                                    <span>{{ earthquake.depth }} km</span>
                                </div>
                                <a @click="$store.commit('EarthquakeList/modalToggle', earthquake)" class="underline text-sm cursor-pointer">
                                    Konumu görüntüle
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="w-3 inline-block"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div v-else>
            <svg class="loading-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(80,50)">
<g transform="rotate(0)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="1">
  <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
</circle>
</g>
</g><g transform="translate(71.21320343559643,71.21320343559643)">
<g transform="rotate(45)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="0.875">
  <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
</circle>
</g>
</g><g transform="translate(50,80)">
<g transform="rotate(90)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="0.75">
  <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
</circle>
</g>
</g><g transform="translate(28.786796564403577,71.21320343559643)">
<g transform="rotate(135)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="0.625">
  <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
</circle>
</g>
</g><g transform="translate(20,50.00000000000001)">
<g transform="rotate(180)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="0.5">
  <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
</circle>
</g>
</g><g transform="translate(28.78679656440357,28.786796564403577)">
<g transform="rotate(225)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="0.375">
  <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
</circle>
</g>
</g><g transform="translate(49.99999999999999,20)">
<g transform="rotate(270)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="0.25">
  <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
</circle>
</g>
</g><g transform="translate(71.21320343559643,28.78679656440357)">
<g transform="rotate(315)">
<circle cx="0" cy="0" r="6" fill="#eb455f" fill-opacity="0.125">
  <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
</circle>
</g>
</g>
            </svg>
        </div>
        
    </section>
</template>
<script>
import ListItem from './ListItem.vue';
import moment from 'moment';
import 'moment/dist/locale/tr';
import 'moment/locale/tr';

moment.locale('tr');

export default {
    components: {
        ListItem
    },
    created(){
        this.$store.dispatch("getData")
    },
    methods: {
        getRelativeTime(date, time){
            return moment(`${date} ${time}`, "YYYY.MM.DD hh:mm:ss").fromNow();
        },
        getDangerColor(magnitude){
            magnitude = Number(magnitude);
            if (magnitude >= 6.0){
                return {'bg-red-700': true, 'text-white': true}
            }else if (magnitude > 4.5 && magnitude < 6.0){
                return {'bg-red-500': true, 'text-white': true}
            }else{
                return {'bg-yellow-300': true}
            }
        }
    }
}
</script>