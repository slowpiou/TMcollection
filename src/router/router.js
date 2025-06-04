import { createRouter, createWebHashHistory } from 'vue-router';
import OfficialView from '@/views/OfficialView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: OfficialView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
