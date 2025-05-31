import { createRouter, createWebHashHistory } from 'vue-router';
import OfficialView from '@/views/OfficialView.vue';
import GoodiesView from '@/views/GoodiesView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: OfficialView,
	},
	{
		path: '/goodies',
		name: 'goodies',
		component: GoodiesView,
	},
	// {
	//   path: '/about',
	//   name: 'about',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
