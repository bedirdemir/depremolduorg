import { createRouter, createWebHistory } from 'vue-router';
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
	}
];

const router = createRouter({
	routes: routes,
	history: createWebHistory()
});

router.beforeEach((to, from, next) => {
	store.commit('setRoute', to.name);
	next();
  });

export default router;