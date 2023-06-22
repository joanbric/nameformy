<script>
    import '$lib/styles/global.css';
    import favicon from '$lib/imgs/favicon.png';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Calistoga&family=Poiret+One&display=swap"
		rel="stylesheet"
	/>
    <link rel="shortcut icon" href={favicon} type="image/png">
</svelte:head>

<Header/>
<slot />
<Footer/>