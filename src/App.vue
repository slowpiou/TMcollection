<template>
	<div>
		<nav class="navbar has-background-black-ter py-3 mb-3" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div class="navbar-menu is-justify-content-space-between">
				<div class="container is-fluid">
					<div class="columns">
						<div class="column is-5 is-flex is-align-items-center">
							<RouterLink to="/" class="navbar-item">Official</RouterLink>
							<RouterLink to="/goodies" class="navbar-item">Goodies</RouterLink>
							<RouterLink to="/demos" class="navbar-item">Demos</RouterLink>
						</div>
						<div class="column is-2">
							<div class="content has-text-centered mb-0">
								<h1 class="pt-3 title is-size-4 mb-0">TM Collection</h1>
								<p class="is-italic is-size-7">by SUPERCOBY</p>
							</div>
						</div>
						<div class="column is-5 is-flex is-align-items-center is-justify-content-flex-end">
							<div class="control has-icons-left mr-3" v-if="$route.name === 'home'">
								<input class="input" type="text" placeholder="Search game" v-model="searchGame" id="search-game" />
								<span class="icon is-small is-left">
									<i class="fas fa-search"></i>
								</span>
							</div>
							<div class="dropdown mr-3" :class="showFilterDropdown ? 'is-active' : ''">
								<div class="dropdown-trigger" @click="showFilterDropdown = !showFilterDropdown">
									<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
										<span>Games Filters</span>
										<span class="icon is-small">
											<i class="fas fa-angle-down" aria-hidden="true"></i>
										</span>
									</button>
								</div>
								<div class="dropdown-menu" id="dropdown-menu" role="menu">
									<div class="dropdown-content">
										<a class="dropdown-item" :class="ownFilter === true ? 'has-text-success' : ''" @click="ownFilter = true"
											>Owned</a
										>
										<a class="dropdown-item" :class="ownFilter === false ? 'has-text-success' : ''" @click="ownFilter = false"
											>Not owned</a
										>
										<a
											class="dropdown-item"
											:class="ownFilter === undefined ? 'has-text-success' : ''"
											@click="ownFilter = undefined"
											>All</a
										>
										<template v-if="$route.name === 'home'">
											<hr class="dropdown-divider" />
											<div class="dropdown-item is-size-7 pl-2 pb-1">Rarity</div>
											<a
												class="dropdown-item"
												:class="rarityFilter === 'Gem' ? 'has-text-success' : ''"
												@click="rarityFilter = 'Gem'"
												>Gem</a
											>
											<a
												class="dropdown-item"
												:class="rarityFilter === 'Very Rare' ? 'has-text-success' : ''"
												@click="rarityFilter = 'Very Rare'"
												>Very rare</a
											>
											<a
												class="dropdown-item"
												:class="rarityFilter === 'Rare' ? 'has-text-success' : ''"
												@click="rarityFilter = 'Rare'"
												>Rare</a
											>
											<a
												class="dropdown-item"
												:class="rarityFilter === 'Common' ? 'has-text-success' : ''"
												@click="rarityFilter = 'Common'"
												>Common</a
											>
											<a
												class="dropdown-item"
												:class="rarityFilter === 'All' ? 'has-text-success' : ''"
												@click="rarityFilter = 'All'"
												>All</a
											>
										</template>
									</div>
								</div>
							</div>
							<div id="socials" class="buttons is-justify-content-center">
								<a href="https://discord.gg/QhfB3UKSe5" class="button socials-button" target="_blank">
									<span class="icon is-small">
										<i class="fab fa-discord"></i>
									</span>
								</a>
								<a href="https://x.com/cobrasktm" class="button socials-button" target="_blank">
									<span class="icon is-small">
										<i class="fab fa-x-twitter"></i>
									</span>
								</a>
								<a href="https://www.youtube.com/@cobytm" class="button socials-button" target="_blank">
									<span class="icon is-small">
										<i class="fab fa-youtube"></i>
									</span>
								</a>
								<a href="https://github.com/SuperCoby/" class="button socials-button" target="_blank">
									<span class="icon is-small">
										<i class="fab fa-github"></i>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>

		<RouterView v-model="searchGame" :rarityFilter="rarityFilter" :ownFilter="ownFilter" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchGame: '',
			showFilterDropdown: false,
			rarityFilter: 'All',
			ownFilter: undefined,
		};
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

#app {
	font-family: Poppins, Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#socials {
	gap: 0.25rem;
}
nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

.navbar-item:hover,
.navbar-item.router-link-active {
	color: white;
	border-bottom: 2px solid white;
}
.control.has-icons-left .input:focus ~ .icon {
	color: white;
}
.input:focus {
	border-color: white;
	box-shadow: rgba(255, 255, 255, 0.25) 0px 0px 0px 3px;
}
#search-game {
	max-width: 200px;
}

@import 'vue3-carousel/carousel.css';
.carousel {
	--vc-nav-color: #aaaaaa;
	--vc-nav-color-hover: white;
	--vc-nav-border-radius: 0;
	--vc-nav-height: 100%;
}
.carousel__next {
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) !important;
}
.carousel__prev {
	background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) !important;
}
.carousel__next--disabled,
.carousel__prev--disabled {
	cursor: default !important;
	opacity: 0 !important;
}
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
.country-flag:hover .country-name,
.country-flag.active .country-name {
	background-color: rgba(0, 0, 0, 0.5);
	visibility: visible;
	transition: all 0.3s;
}
</style>
