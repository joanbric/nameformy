<script>
	import { page } from '$app/stores';
    import Modal from '$lib/components/Modal.svelte';
    import NameReveal from '$lib/components/NameReveal.svelte';
	import { afterUpdate } from 'svelte';

	/** @type {import('./$types').ActionData}*/
	export let form;

    console.log(form);

	const { subject } = $page.params;
	let formSubmited = false;
	let characteristics = [
		'Short and catchy',
		'Descriptive and informative',
		'Unique and memorable',
		'Traditional and classic',
		'Modern and innovative',
		'Playful and whimsical',
		'Professional and sophisticated'
	];
	let characteristic, meaning, language, keywords;

	function handleCharacteristic(e) {
		if (e.target.checked) characteristic = e.target.value;
	}
</script>

<div class="container">
	{#if form?.success }
		<Modal on:close={()=>{form = {}}}>
            <NameReveal names={form.names} {subject} />
        </Modal>
	{/if}
	<h1>
		<span class="discrete big">NameForMy</span>&nbsp;
		<span class="big">{subject}</span>&nbsp;
		{#if characteristic}
			<span class="discrete medium">must be</span>&nbsp;
			<span class="medium">{characteristic}</span>&nbsp;
		{/if}
		{#if meaning}
			<span class="discrete medium">meaning</span>&nbsp;
			<span class="medium">{meaning}</span>&nbsp;
		{/if}
		{#if language}
			<span class="discrete medium">in</span>&nbsp;
			<span class="medium">{language}</span>&nbsp;
		{/if}
		<br />
		{#if keywords}
			<span class="discrete small">in addition:</span>&nbsp;
			<span class="small">{keywords}</span>
		{/if}
	</h1>

	<form method="post" on:submit={(e) => (formSubmited = true)}>
		<label for="characteristic" class="quiestion"
			>Please specify the desired characteristics of the name</label
		>
		<div class="characteristics">
			{#each characteristics as characteristic}
				<label for={characteristic}
					><input
						type="radio"
						id={characteristic}
						name="characteristic"
						on:change={handleCharacteristic}
						value={characteristic}
					/>
					{characteristic}
				</label>
			{/each}
			<input
				type="text"
				bind:value={characteristic}
				placeholder="Other (please specify)"
				name="characteristic"
				id="customCharacteristic"
			/>
		</div>

		<label for="" class="quiestion">A specific etymology or meaning</label>
		<input type="text" name="meaning" id="meaning" placeholder="Etymology" bind:value={meaning} />
		<label for="language" class="quiestion">Write the language you prefer for the name</label>
		<input type="text" name="language" id="language" placeholder="Language" bind:value={language} />
		<label for="keywords" class="quiestion"
			>Provide any additional context, keywords, or specific requirements that may help us generate
			a tailored name for your needs</label
		>
		<textarea
			name="keywords"
			id="keywords"
			placeholder={`- Children's book character: “The name should be fun, playful, and easy for kids to remember.” \n - Pet: Keywords like 'pampered,' 'paws,' or 'fluffy'. \n - Gaming app: “The name should be dynamic, energetic, and appeal to the target audience of gamers.”`}
			bind:value={keywords}
		/>

		<button type="submit" class="btn-primary" disabled={formSubmited}>
			{#if formSubmited}
				Generating...
			{:else}
				Generate name
			{/if}
		</button>
	</form>
</div>

<style>
	.container {
		padding: 100px 0;
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
	}
	h1 {
		background-color: #313744;

		border-radius: 10px;
		border: var(--brd-grey-light);
		box-shadow: 0px 0px 10px 0px rgba(154, 169, 205, 0.5), 0px 0px 20px 0px rgba(154, 169, 205, 0.6);
		padding: 10px 20px;

		text-align: center;
		letter-spacing: -0.05rem;
		text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

		position: sticky;
		top: 100px;
	}
	.discrete {
		color: var(--clr-fnt-discret);
	}
	.big {
		font-size: 3rem;
	}
	.medium {
		font-size: 2rem;
	}
	.small {
		font-size: 1.5rem;
	}

	/* FORM */
	form {
		max-width: 700px;
		margin: 100px auto 0 auto;
	}

	.quiestion {
		display: block;
		margin-top: 30px;
		font-size: 1.2rem;
		font-weight: 600;
		padding: 10px 0;
	}

	.characteristics {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;
	}
	.characteristics label,
	input,
	textarea {
		background-color: var(--clr-bg-inputs);
		padding: 3px 10px;
		border-radius: 5px;
	}
	.characteristics label:hover {
		cursor: pointer;
	}
	.characteristics input[type='radio'] {
		display: none;
	}

	input,
	textarea {
		border: none;
		outline: none;
		font-size: 1rem;
		padding: 10px;
		color: white;
		width: 100%;
	}

	textarea {
		min-height: 150px;
		resize: vertical;
	}
	input::placeholder,
	textarea::placeholder {
		color: #b8b8b8;
	}

	.btn-primary {
		display: block;
		margin: 20px 0 0 auto;
	}
</style>
