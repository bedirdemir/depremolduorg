import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";

import appHeader from "./components/Shared/appHeader.vue";
import appFooter from "./components/Shared/appFooter.vue";

const app = createApp(App);
app.use(router);
app.use(store);

app.component("appHeader", appHeader);
app.component("appFooter", appFooter);
app.mount('#app');
