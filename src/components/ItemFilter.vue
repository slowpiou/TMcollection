<template>
	<div class="container my-5">
		<div class="columns is-multiline is-justify-content-center">
			<template v-for="(c, i) in items" :key="i">
				<div
					class="column is-1 m-1 country-flag"
					:style="{ 'background-image': `url(${c.flag})` }"
					@click="filteredByItem(c.name)"
					:class="selectedItem === c.name ? 'active' : ''"
				>
					<div class="country-name">{{ c.name }}</div>
				</div>
			</template>
		</div>
	</div>
	<br />
</template>

<script>
export default {
	name: 'ItemFilter',
	props: ['items'],
	emits: ['filteredByItem'],
	data() {
		return {
			selectedItem: '',
		};
	},

	methods: {
		filteredByItem(c) {
			if (this.selectedItem === c) {
				this.selectedItem = '';
			} else {
				this.selectedItem = c;
			}

			this.$emit('filteredByItem', this.selectedItem);
		},
	},
};
</script>
