<template>
	<div id="movie-modal">
		<div class="is-active modal">
			<div class="modal-background" @click="$emit('close-modal')"></div>
			<div class="modal-content">
				<Carousel :items-to-show="itemsToShow">
					<Slide v-for="image in game.src" :key="image.id">
						<figure class="image">
							<img :src="image.substring(0, image.length - 5)" :alt="game.alt" />
						</figure>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="$emit('close-modal')"></button>
		</div>
	</div>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
	name: 'GameModal',
	props: ['game'],
	components: { Carousel, Slide, Navigation },
	data() {
		return {
			itemsToShow: 1,
		};
	},
};
</script>
