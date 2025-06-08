<template>
	<item-filter :items="types" @filteredByItem="filterGoodiesByType"></item-filter>

	<div class="container mt-5">
		<div class="columns is-multiline">
			<template v-for="(g, j) in goodiesPaginated" :key="j">
				<div class="column is-2 is-flex is-align-items-center is-justify-content-center is-relative">
					<Carousel :items-to-show="itemsToShow" :mouse-drag="false">
						<Slide v-for="image in g.image.src" :key="image.id">
							<figure class="image is-3by4" @click="openGameModal(g.image)">
								<img :src="image" :alt="g.image.alt" class="is-relative" />
							</figure>
						</Slide>

						<template #addons>
							<Navigation />
						</template>
					</Carousel>
					<owned-or-not :owned="g.own"></owned-or-not>
				</div>
			</template>
		</div>
		<empty-hero v-if="goodiesPaginated.length === 0"></empty-hero>

		<game-modal :game="gameModalContent" v-if="showGameModal" @close-modal="showGameModal = false"></game-modal>
	</div>
</template>

<script>
import GOODIES from '@/goodies.js';
import GameModal from '@/components/GameModal.vue';
import ItemFilter from '@/components/ItemFilter.vue';
import EmptyHero from '@/components/EmptyHero.vue';
import OwnedOrNot from '@/components/OwnedOrNot.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
	name: 'GoodiesView',
	props: ['ownFilter'],
	components: { Carousel, Slide, Navigation, GameModal, ItemFilter, EmptyHero, OwnedOrNot },
	data() {
		return {
			goodies: GOODIES,
			types: [
				{ flag: 'https://picsum.photos/200/300', name: 'TM1-2' },
				{ flag: 'https://picsum.photos/200/300', name: 'TM20' },
				{ flag: 'https://picsum.photos/200/300', name: 'TM-Turbo' },
				{ flag: 'https://picsum.photos/200/300', name: 'Shootmania' },
				{ flag: 'https://picsum.photos/200/300', name: 'Zerator' },
				{ flag: 'https://picsum.photos/200/300', name: 'Others' },
			],
			filteredGoodies: GOODIES,
			showGameModal: false,
			gameModalContent: null,
			itemsToShow: 1,
			currentPage: 1,
			perPage: 18,
		};
	},
	computed: {
		goodiesPaginated() {
			let ownFilteredGames = this.ownFilter !== undefined ? this.filteredGoodies.filter((g) => g.own === this.ownFilter) : this.filteredGoodies;
			return ownFilteredGames.slice(0, this.currentPage * this.perPage);
		},
	},
	methods: {
		filterGoodiesByType(g) {
			this.filteredGoodies = g !== '' ? this.goodies.filter((good) => good.type.includes(g)) : this.goodies;
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
.column {
	background-color: #57462e;
	background-clip: content-box;
}
.image img {
	object-fit: cover !important;
	object-position: center !important;
}
</style>
