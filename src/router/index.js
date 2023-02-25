import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: "/",
		component: () => import('../views/List.vue')
	}
];

const router = createRouter({
	routes: routes,
	history: createWebHistory()
});

export default router;