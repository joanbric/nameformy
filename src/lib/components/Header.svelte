<script>
	import SmallLogo from '$lib/components/svgs/NFM-logo_small.svelte';
	import { createEventDispatcher } from 'svelte';
	export let select = 'home';

	const dispatch = createEventDispatcher();

	function handleGenerateClick() {
		dispatch('generate');
		showModal();
	}
	import Modal from '$lib/components/Modal.svelte';
	import SubjectForm from './SubjectForm.svelte';

	let isModalVisible = false;
	function showModal() {
		isModalVisible = true;
	}
</script>

<header>
	<div class="icon"><a href="/"><SmallLogo /></a></div>
	<nav class="menu">
		<ul>
			<li><a on:click={() => (select = 'home')} href="/#home">Home</a></li>
			<li><a on:click={() => (select = 'names')} href="/#names">Names</a></li>
			<li><a on:click={() => (select = 'features')} href="/#features">Features</a></li>
			<li><a on:click={() => (select = 'about')} href="/#about">About</a></li>
			<li><button class="btn-primary" on:click={handleGenerateClick}>Generate</button></li>
			<li class="selected {select}" />
		</ul>
	</nav>
</header>
{#if isModalVisible}
	<Modal on:close={() => (isModalVisible = false)}>
		<SubjectForm />
	</Modal>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 4rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;

		background-color: #34373e;
	}

	ul {
		display: flex;
		align-items: center;
		position: relative;
	}

	li {
		width: 150px;
		text-align: center;
	}

	.selected.home {
		left: 0%;
	}
	.selected.names {
		left: 20%;
	}
	.selected.features {
		left: 40%;
	}
	.selected.about {
		left: 60%;
	}

	.selected {
		position: absolute;
		display: block;
		width: 20%; /* 1 of 5 items in the menu  */
		height: 3px;
		background-color: var(--clr-fnt-link);
		left: 0;
		bottom: 0;
		transition: all ease-in-out 0.3s;
	}

	nav a,
	button {
		display: block;
		width: 100%;
		height: auto;
		padding: 1rem 37.5px;

		font-family: var(--fnt-title);
		font-size: 1.2rem;
	}

	a {
		text-decoration: none;
	}

	button:hover {
		cursor: pointer;
	}
</style>
