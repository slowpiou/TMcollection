<template>
	<span class="owned" v-if="owned"></span>
	<span class="owned not" v-else></span>
</template>

<script>
export default {
	name: 'OwnedOrNot',
	props: ['owned'],
};
</script>

<style scoped>
.owned {
	position: absolute;
	z-index: 10;
	bottom: 0;
	right: 0;
	width: 0;
	height: 0;
	border-left: 30px solid transparent;
	border-bottom: 30px solid green;
}
.owned.not {
	border-bottom: 30px solid red;
}
</style>
