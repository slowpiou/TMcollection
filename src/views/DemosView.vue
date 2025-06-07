<template>
	<item-filter :items="countries" @filteredByItem="filterDemosByCountry"></item-filter>

	<div class="container mt-5">
		<div class="columns is-multiline">
			<template v-for="(g, j) in demosPaginated" :key="j">
				<div class="column is-2 is-flex is-flex-direction-column is-justify-content-space-between">
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

					<div class="content">{{ g.title }}</div>
				</div>
			</template>
		</div>
		<empty-hero v-if="demosPaginated.length === 0"></empty-hero>

		<game-modal :game="gameModalContent" v-if="showGameModal" @close-modal="showGameModal = false"></game-modal>
	</div>
</template>

<script>
import COUNTRIES from '@/countries.js';
import DEMOS from '@/demos.js';
import ItemFilter from '@/components/ItemFilter.vue';
import GameModal from '@/components/GameModal.vue';
import OwnedOrNot from '@/components/OwnedOrNot.vue';
import EmptyHero from '@/components/EmptyHero.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
	name: 'DemosView',
	props: ['ownFilter'],
	components: { Carousel, Slide, Navigation, GameModal, ItemFilter, EmptyHero, OwnedOrNot },
	data() {
		return {
			demos: DEMOS,
			countries: COUNTRIES.filter((c) =>
				['France', 'Germany', 'India', 'Italy', 'Spain', 'Portugal', 'UK', 'Ukraine', 'Russia', 'USA', 'Poland', 'Brazil', 'Czech'].includes(c.name)
			),
			filteredDemos: DEMOS,
			itemsToShow: 1,
			selectedCountry: '',
			showGameModal: false,
			gameModalContent: null,
			currentPage: 1,
			perPage: 18,
		};
	},
	computed: {
		demosPaginated() {
			let ownFilteredDemos = this.ownFilter !== undefined ? this.filteredDemos.filter((g) => g.own === this.ownFilter) : this.filteredDemos;

			return ownFilteredDemos.slice(0, this.currentPage * this.perPage);
		},
	},
	methods: {
		filterDemosByCountry(c) {
			this.filteredDemos = c !== '' ? this.demos.filter((g) => g.country.includes(c)) : this.demos;
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
