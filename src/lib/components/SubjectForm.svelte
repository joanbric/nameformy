<script>
	let subject = '';
</script>

<div class="container">
	<h2>Who or what do you want to name?</h2>

	<ul class="subjects">
		<li class="subject"><a href="/Dog">Dog</a></li>
		<li class="subject"><a href="/Cat">Cat</a></li>
		<li class="subject"><a href="/Bird">Bird</a></li>
		<li class="subject"><a href="/Guitar">Guitar</a></li>
		<li class="subject"><a href="/Book">Book</a></li>
		<li class="subject"><a href="/Song">Song</a></li>
		<li class="subject"><a href="/Movie">Movie</a></li>
		<li class="subject"><a href="/Game">Game</a></li>
		<li class="subject"><a href="/TV-Show">TV Show</a></li>
		<li class="subject"><a href="/Son">Son</a></li>
		<li class="subject"><a href="/Bicycle">Bicycle</a></li>
		<li class="subject"><a href="/Car">Car</a></li>
		<li class="subject"><a href="/Website">Website</a></li>
		<li class="subject"><a href="/Toy">Toy</a></li>
		<li class="subject"><a href="/Character">Character</a></li>
		<li class="subject"><a href="/Product">Product</a></li>
		<li class="subject"><a href="/Company">Company</a></li>
		<li class="subject"><a href="/App">App</a></li>
		<li class="subject"><a href="/Sport-team">Sport team</a></li>
		<li class="subject"><a href="/Daughter">Daughter</a></li>
		<li class="subject"><a href="/Party">Party</a></li>
	</ul>

	<input type="text" bind:value={subject} placeholder="Other (please specify)" />

	<a href="/{subject}" class="btn-primary">Go</a>
</div>

<style>
	.container {
		text-align: center;
	}
	h2 {
		padding: 1.5rem 0;
		text-align: center;
	}

	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
		padding: 40px 0;
	}
	.subject a {
		background-color: var(--clr-bg-inputs);
		color: white;
		text-decoration: none;
		padding: 2px 10px;
		border-radius: 100vmax;
	}

	input {
		display: block;
		padding: 5px 10px;
		outline: none;
		font-size: 1.2rem;
		border-radius: 5px;
		border: none;
		width: 100%;
		padding: 5px 10px;
	}

	.btn-primary {
		display: inline-block;
		padding: 5px 10px;
		text-decoration: none;
		margin-top: 2rem;
	}
</style>
