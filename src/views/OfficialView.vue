<template>
	<item-filter :items="countries" @filteredByItem="filterGamesByCountry"></item-filter>
	<div class="container mt-5">
		<div class="columns is-multiline">
			<template v-for="(g, j) in gamesPaginated" :key="j">
				<div class="column is-6 is-flex is-flex-direction-column is-justify-content-space-between">
					<div class="columns">
						<div class="column is-4">
							<div class="is-relative">
								<Carousel :items-to-show="itemsToShow" :mouse-drag="false">
									<Slide v-for="image in g.image.src" :key="image.id">
										<figure class="image" @click="openGameModal(g.image)">
											<img :src="image" :alt="g.image.alt" />
										</figure>
									</Slide>

									<template #addons>
										<Navigation />
									</template>
								</Carousel>
								<owned-or-not :owned="g.own"></owned-or-not>
							</div>
						</div>
						<div class="column is-8">
							<h3 class="title is-size-5">{{ g.title }}</h3>
							<ul class="has-text-white p-3">
								<li><strong>Publisher:</strong> {{ g.publisher }}</li>
								<li><strong>Country:</strong> {{ g.country }}</li>
								<li><strong>EAN:</strong> {{ g.ean }}</li>
								<li><strong>Bigbox:</strong> {{ g.bigbox }}</li>
								<li><strong>Rarity:</strong> {{ g.rarity }}</li>
								<li><strong>Platform:</strong> {{ g.support }}</li>
							</ul>
						</div>
					</div>
					<hr />
				</div>
			</template>
		</div>
		<empty-hero v-if="gamesPaginated.length === 0"></empty-hero>
		<game-modal :game="gameModalContent" v-if="showGameModal" @close-modal="showGameModal = false"></game-modal>
	</div>
</template>

<script>
import COUNTRIES from '@/countries.js';
import GAMES from '@/games.js';
import GameModal from '@/components/GameModal.vue';
import ItemFilter from '@/components/ItemFilter.vue';
import EmptyHero from '@/components/EmptyHero.vue';
import OwnedOrNot from '@/components/OwnedOrNot.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
	name: 'OfficialView',
	props: ['modelValue', 'rarityFilter', 'ownFilter'],
	components: { Carousel, Slide, Navigation, GameModal, ItemFilter, EmptyHero, OwnedOrNot },
	data() {
		return {
			countries: COUNTRIES.filter((c) => !['India'].includes(c.name)),
			games: GAMES,
			filteredGames: GAMES,
			itemsToShow: 1,
			showGameModal: false,
			gameModalContent: null,
			currentPage: 1,
			perPage: 16,
		};
	},
	computed: {
		gamesPaginated() {
			let rarirtyFilteredGames =
				this.rarityFilter !== 'All' ? this.filteredGames.filter((g) => g.rarity === this.rarityFilter) : this.filteredGames;
			let ownFilteredGames = this.ownFilter !== undefined ? rarirtyFilteredGames.filter((g) => g.own === this.ownFilter) : rarirtyFilteredGames;
			return ownFilteredGames
				.filter(
					(g) =>
						g.title.toLocaleLowerCase().includes(this.modelValue.toLocaleLowerCase()) ||
						g.publisher.toLocaleLowerCase().includes(this.modelValue.toLocaleLowerCase()) ||
						g.country.toLocaleLowerCase().includes(this.modelValue.toLocaleLowerCase()) ||
						g.ean.toLocaleLowerCase().includes(this.modelValue.toLocaleLowerCase()) ||
						g.bigbox.toLocaleLowerCase().includes(this.modelValue.toLocaleLowerCase()) ||
						g.support.toLocaleLowerCase().includes(this.modelValue.toLocaleLowerCase()) ||
						g.rarity.toLocaleLowerCase().includes(this.modelValue.toLocaleLowerCase())
				)
				.slice(0, this.currentPage * this.perPage);
		},
	},
	methods: {
		filterGamesByCountry(c) {
			this.filteredGames = c !== '' ? this.games.filter((g) => g.country.includes(c)) : this.games;
		},
		openGameModal(g) {
			this.gameModalContent = g;
			this.showGameModal = true;
		},
		handleScroll() {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
				this.currentPage++;
			}
		},
	},
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	unmounted() {
		window.removeEventListener('scroll', this.handleScroll);
	},
};
</script>

<style scoped>
ul {
	list-style: inside;
}
</style>
