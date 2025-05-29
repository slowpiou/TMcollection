<template>
	<div class="container my-5">
		<div class="columns is-multiline">
			<template v-for="(c, i) in countries" :key="i">
				<div class="column is-1 m-1 country-flag" :style="{ 'background-image': `url(${c.flag})` }">
					<div class="country-name">{{ c.name }}</div>
				</div>
			</template>
		</div>
	</div>
	<div class="container">
		<div class="columns is-multiline is-align-items-center">
			<template v-for="(g, j) in games" :key="j">
				<div class="column is-2">
					<figure class="image is-2by3">
						<img :src="g.image.src" :alt="g.image.alt" />
					</figure>
				</div>
				<div class="column is-4">
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
			</template>
		</div>
	</div>
</template>

<script>
import COUNTRIES from '@/countries.js';
import GAMES from '@/games.js';

export default {
	name: 'OfficialView',
	data() {
		return {
			countries: COUNTRIES,
			games: GAMES,
		};
	},
};
</script>

<style scoped>
.country-flag {
	height: 50px;
	overflow: hidden;
	background-size: cover;
	background-position: center center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	position: relative;
	cursor: pointer;
}
.country-name {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-weight: bold;
	visibility: hidden;
}
.country-flag:hover .country-name {
	background-color: rgba(0, 0, 0, 0.5);
	visibility: visible;
	transition: all 0.3s;
}
ul {
	list-style: inside;
}
</style>
