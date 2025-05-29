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
				<RouterLink to="/" class="navbar-item">Official</RouterLink>
				<a class="navbar-item">Goodies</a>
				<h1 class="py-3 has-text-white title is-size-4 mb-0">TMCollection</h1>
				<a class="navbar-item">Owned</a>
				<a class="navbar-item">Demos</a>

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
		</nav>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
