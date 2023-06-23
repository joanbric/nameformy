<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import NfmLogoBig from './NFM-logo_big.svelte';
    import { fromTheBottle, toTheBottle, typewriter } from '$lib/utils/transitions.js';

	let i = 0;

	const words = [
		'Dog',
		'Fido',
		'Cat',
		'Kitty',
		'Daughter',
		'Zoe',
		'Company',
		'Neplix',
		'Son',
		'Sonny',
		'Car',
		'McQueen'
	];

	let isWordVisible = true;
	onMount(() => {
		const intervalId = setInterval(() => {
			isWordVisible = true;
			i = i + 1;
			if (i === words.length) {
				i = 0;
			}
			setTimeout(() => {
				isWordVisible = false;
			}, 2000);
		}, 4000);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="container">
	{#key i}
		{#if isWordVisible}
			{#if i % 2 === 0}
				<span
					in:typewriter={{ speed: 1, delay: 0 }}
					out:toTheBottle={{ duration: 500, delay: 1000 }}>{words[i]}</span
				>
			{:else}
				<span class="name" in:fromTheBottle={{ duration: 500, delay: 0 }} out:fade={{ delay: 0 }}
					>{words[i]}</span
				>
			{/if}
		{/if}
	{/key}
	<div class="logo-container">
		<NfmLogoBig />
	</div>
</div>

<style>
	.container {
		position: relative;
		text-align: center;
		padding-top: 200px;
		margin-top: 100px;
		overflow: hidden;
	}
	span {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 4rem;
		font-family: var(--fnt-title);
	}
	span.name {
		transform: translateX(-50%, 400px);
	}

	.logo-container {
		animation: shake 8s 2s infinite ease-in-out;
	}

	@keyframes animate {
		0% {
			opacity: 1;
			transform: translate(-50%, 0);
		}
		100% {
			opacity: 0;
			transform: translate(-50%, 400px) scale(0.4);
		}
	}

	@keyframes shake {
		0% {
			transform: rotate(0deg);
		}
		6.25% {
			transform: rotate(10deg);
		}
		12.5% {
			transform: rotate(0deg);
		}
		18.75% {
			transform: rotate(-10deg);
		}
		25% {
			transform: rotate(0deg);
		}
	}
</style>
