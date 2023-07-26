<script>
	import AboutSection from '$lib/components/AboutSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import FeaturesSection from '$lib/components/FeaturesSection.svelte';
	import NamesSection from '$lib/components/NamesSection.svelte';

	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<section id="home">
		<HeroSection />
	</section>
	<section id="names">
		<NamesSection />
	</section>
	<section id="features">
		<FeaturesSection />
	</section>
	<section id="about">
		<AboutSection />
	</section>
	<Footer />
</div>

<style>
	.container {
		height: 100vh;
		overflow: auto;
		scroll-behavior: smooth;
		scroll-snap-type: y mandatory;
	}
	section {
		widows: 100%;
		height: 100%;
		overflow: hidden;
		padding: 0 40px;
		scroll-snap-stop: always;
		scroll-snap-align: center;
	}

	.container section:nth-child(even) {
		background-color: var(--clr-grey);
	}
</style>
