import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store/index.js';

const routes = [
	{
		name: "RecentList",
		path: "/",
		component: () => import('../views/List.vue')
	},
	{
		name: "EarthquakeMap",
		path: "/map",
		component: () => import('../views/Map.vue')
	},
	{
		name: "Information",
		path: "/inform",
		component: () => import('../views/Inform.vue')
	}
];

const router = createRouter({
	routes: routes,
	history: createWebHashHistory()
});

router.beforeEach((to, from, next) => {
	store.commit('setRoute', to.name);
	next();
  });

export default router;