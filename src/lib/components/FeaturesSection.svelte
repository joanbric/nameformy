<script>
	import imgCustormization from '$lib/imgs/customization.png';
	import imgRobot from '$lib/imgs/robot.png';
	import imgLinguistic from '$lib/imgs/linguistic.png';
</script>

<div class="container home-section-container">
	<h2>Features</h2>
	<p class="intro">
		Our powerful name generation tool gives you the ability to explore a wide range of options and
		discover the perfect name in a matter of seconds.
	</p>

	<div class="features">
		<div class="feature">
			<img class="feature__img" src={imgCustormization} alt="Three quimics containers" />
			<h3 class="feature__title">Customization and Personalization</h3>
			<p class="feature__desc">
				The web app allows users to specify their desired characteristics for the generated names.
				From short and catchy to traditional and classic, users can tailor their preferences to
				create names that align perfectly with their unique requirements.
			</p>
		</div>
		<div class="feature">
			<img class="feature__img" src={imgRobot} alt="A robot" />
			<h3 class="feature__title">AI-Powered Precision</h3>
			<p class="feature__desc">
				With the power of artificial intelligence at its core, NameForMy.com utilizes advanced
				algorithms to deliver precise and relevant name suggestions. The AI algorithms analyze vast
				amounts of data and patterns to generate names that are not only creative but also resonate
				with the intended purpose, giving users confidence in the quality of the names generated.
			</p>
		</div>
		<div class="feature">
			<img class="feature__img" src={imgLinguistic} alt="Globe inside a speech bubble" />
			<h3 class="feature__title">Extensive Linguistic Diversity</h3>
			<p class="feature__desc">
				NameForMy.com leverages its vast database of linguistic elements from multiple languages and
				cultures. This rich diversity enables the web app to generate names that encompass a wide
				range of origins, ensuring a global appeal and providing users with a broad spectrum of
				creative options.
			</p>
		</div>
	</div>
</div>

<style lang="scss">

	.container {
		text-align: center;
	}
    h2{
        font-size: 2rem;
    }
	p {
		padding: 20px 0;
		max-width: 850px;
		margin: 0 auto;
	}

    .intro{
        padding: 100px 0;
    }
	.features {
		display: flex;
		justify-content: space-around;
        gap: 20px;
        flex-wrap: wrap;
	}

	.feature {
		width: 0;
		flex-grow: 1;
	}

    .feature__title{
        font-size: 1.6rem;
        padding: 20px 0;
    }
</style>
