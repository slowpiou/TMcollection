<template>
	<span class="icon has-background-success-50" v-if="owned">
		<i class="fas fa-check has-text-white"></i>
	</span>
	<span class="icon has-background-danger-40" v-else>
		<i class="fas fa-times has-text-white"></i>
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
	bottom: 5px;
	right: 5px;
	width: 25px;
	height: 25px;
	border-radius: 50%;
}
</style>
