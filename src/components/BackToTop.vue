<template>
	<div class="back-to-top">
		<button class="button is-medium is-success is-rounded" type="button" @click="goToTop">
			<span class="icon is-medium">
				<i class="fas fa-level-up-alt fa-lg"></i>
			</span>
		</button>
	</div>
</template>

<script>
export default {
	name: 'BackToTop',
	methods: {
		goToTop() {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		},
	},
};
</script>

<style scoped>
.back-to-top {
	position: fixed;
	bottom: 25px;
	right: 20px;
	z-index: 20;
}
.back-to-top button {
	width: 50px;
	height: 50px;
}
</style>
