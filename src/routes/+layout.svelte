<script>
    import '$lib/styles/global.css';
    import favicon from '$lib/imgs/favicon.png';
    import Header from '$lib/components/Header.svelte';
</script>
<svelte:head>

    <!-- FONT -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Poppins:wght@400;700&display=swap" rel="stylesheet">

    <!-- FAVICON -->
    <link rel="shortcut icon" href={favicon} type="image/png">
    <!-- BOXICON FONT -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>


<Header />
<main>
    <slot />
</main>


<style>
</style>