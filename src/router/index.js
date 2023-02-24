import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: "/",
		component: () => import('../views/Home.vue')
	}
];

const router = createRouter({
	routes: routes,
	history: createWebHistory()
});

export default router;