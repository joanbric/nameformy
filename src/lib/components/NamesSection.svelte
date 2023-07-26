<script>
	import work from '$lib/imgs/work.svg';
	import heart from '$lib/imgs/heart.svg';
</script>

<div class="container home-section-container">
	<h2>Recent Names Generated</h2>
	<div class="last-names">
		<p>The name for my <span class="subject">Dog</span> is <span class="name">Sapin</span></p>
		<ul class="last-names__list">
			<li class="last-names__list__item">Sapin</li>
			<li class="last-names__list__item">Sapin</li>
			<li class="last-names__list__item">Sapin</li>
			<li class="last-names__list__item">Sapin</li>
		</ul>
	</div>
	<div class="names-generated">
		<img src={work} alt="Gears" />
		<h3>Names Generated</h3>
		<p>105</p>
	</div>
	<div class="who-like">
		<img src={heart} alt="heart" />
		<h3>People Who Like</h3>
		<p>105</p>
	</div>
</div>

<style>
	.container {
		text-align: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 3fr 2fr;
		grid-template-areas:
			'title title'
			'last-names last-names'
			'names-generated who-like';
        align-items: center;
        padding: 40px 0;
        max-width: 1050px;
        column-gap: 30px;
	}

	.last-names,
	.names-generated,
	.who-like {
		border-radius: 10px;
		border: 3px solid var(--clr-pink);
		background-color: var(--clr-dark-violet);
		padding: 20px;
        min-width: 450px;

        box-shadow: var(--shdw-pink);
	}
	h2 {
		grid-area: title;
	}
	.last-names {
		grid-area: last-names;
	}

	.names-generated {
		grid-area: names-generated;
	}
	.who-like {
		grid-area: who-like;
	}

	.last-names p {
		display: flex;
		flex-direction: column;
		font-family: var(--fnt-title);
		font-size: 3rem;
	}

	.last-names p span {
		color: var(--clr-gold);
	}

	.last-names__list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 40px;
	}

	.last-names__list__item {
		background-color: var(--clr-bg-inputs);
		padding: 2px 10px;
		border-radius: 100vmax;
	}

	.names-generated img,
	.who-like img {
		width: 100px;
		fill: white;
	}
	.names-generated h3,
	.who-like h3 {
		padding: 20px 0;
	}

	.names-generated p,
	.who-like p {
		font-size: 3rem;
		font-weight: 700;
	}
</style>
