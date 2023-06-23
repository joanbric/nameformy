<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import NfmLogoBig from './NFM-logo_big.svelte';
	import { fromTheBottle, toTheBottle, typewriter } from '$lib/utils/transitions.js';
    import words from '$lib/utils/nounList.js';

	/*
        Animation explain for 4s duration per mutation
        0s -> onMount (load page)
            show the first word, start the interval
        1s -> out word
        2s -> duratonGap, shaking bottle
        3s -> in next word 
        4s -> out next word (mutation completed)


    */

	export let durationPerMutation = 6000;
	const durationPerWord = durationPerMutation / 2;
	const durationGap = durationPerMutation / 4;


	let i = 0;
	let isWordVisible = false;
	onMount(() => {
		isWordVisible = true;
		const intervalId = setInterval(() => {
			isWordVisible = true;

			i += 1;
			if (i === words.length) i = 0;

            if (i % 2 !== 0) return
			setTimeout(() => {
				isWordVisible = false;
			}, durationPerWord - durationGap);
		}, durationPerWord);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="container">
	{#key i}
		{#if isWordVisible}
			{#if i % 2 === 0}
				<span class="subject" in:typewriter={{ speed: 1, delay: 0 }} out:toTheBottle={{ duration: 500, delay: 0 }}
					>{words[i]}</span
				>
			{:else}
				<span
					class="name"
					in:fromTheBottle={{ duration: 500, delay: durationGap }}
					out:fade={{ delay: 0 }}>{words[i]}</span
				>
			{/if}
		{/if}
	{/key}
	<div
		class="logo-container"
		style={`
        animation-duration: ${durationPerMutation / 1000}s;
        animation-delay: ${durationPerWord / 1000 - 0.5}s;
        `}
	>
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
		font-size: 3.8rem;
		font-family: var(--fnt-title);
	}
    span.subject {
        color: var(--clr-fnt-discret)
    }
	span.name {
		transform: translateX(-50%, 400px);
        font-size: 4.4rem;
	}

	.logo-container {
		animation: ease-in-out infinite shake;
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
		3.125% {
			transform: rotate(10deg);
		}
		6.25% {
			transform: rotate(-10deg);
		}
		9.375% {
			transform: rotate(10deg);
		}
		12.5% {
			transform: rotate(-10deg);
		}
		15.625% {
			transform: rotate(10deg);
		}
		18.75% {
			transform: rotate(-10deg);
		}
		21.875% {
			transform: rotate(10deg);
		}
		25% {
			transform: rotate(0deg);
		}

        30% {
            transform: scaleY(1);
        }
        34%{
            transform: scaleY(0.8);
        }
        38% {
            transform: scaleY(1);
        }
	}
</style>
