<template>
	<span class="icon" v-if="owned" :class="$route.name === 'home' ? 'home' : ''">
		<i class="fas fa-check has-text-white own"></i>
	</span>
	<span class="icon not" v-else :class="$route.name === 'home' ? 'home' : ''">
		<i class="fas fa-times has-text-white own"></i>
	</span>
</template>

<script>
export default {
	name: 'OwnedOrNot',
	props: ['owned'],
};
</script>

<style scoped>
.icon {
	position: absolute;
	z-index: 10;
	bottom: 12px;
	right: 12px;
	width: 0;
	height: 0;
	border-bottom: 40px solid rgb(5, 139, 39);
	border-left: 40px solid transparent;
}
.icon.home {
	bottom: 0;
	right: 0;
}
.icon.not {
	border-bottom: 40px solid rgb(170, 11, 11);
}
.own {
	position: absolute;
	z-index: 15;
	bottom: -20px;
	right: 20px;
	width: 0px;
	height: 0px;
	border-radius: 50%;
}
</style>
