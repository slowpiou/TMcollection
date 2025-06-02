<template>
	<div id="app">
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
				<div class="is-flex">
					<RouterLink to="/" class="navbar-item">Official</RouterLink>
					<RouterLink to="/goodies" class="navbar-item">Goodies</RouterLink>
					<RouterLink to="/owned" class="navbar-item">Owned</RouterLink>
					<RouterLink to="/demos" class="navbar-item">Demos</RouterLink>
				</div>
				<h1 class="py-3 has-text-white title is-size-4 mb-0">TMCollection</h1>
				<div class="is-flex is-align-self-center">
					<div class="control has-icons-left mr-3" v-if="$route.name === 'home'">
						<input class="input" type="text" placeholder="Search game" v-model="searchGame" id="search-game" />
						<span class="icon is-small is-left">
							<i class="fas fa-search"></i>
						</span>
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
		</nav>
		<RouterView v-model="searchGame" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchGame: '',
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

@import 'vue3-carousel/carousel.css';
.carousel {
	--vc-nav-color: #aaaaaa;
	--vc-nav-color-hover: white;
	--vc-nav-border-radius: 0;
	--vc-nav-height: 100%;
}
.carousel__next {
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)) !important;
}
.carousel__prev {
	background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)) !important;
}
.carousel__next--disabled,
.carousel__prev--disabled {
	cursor: default !important;
	opacity: 0 !important;
}
</style>
