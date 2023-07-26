<script>
	import LogoAnimation from './svgs/LogoAnimation.svelte';
</script>

<div class="container home-section-container">
		<div class="logo-animation">
			<LogoAnimation />
		</div>
		<div class="content">
			<h1>Discover Perfect Names for Anything</h1>
			<h2 >
				Generate unique and creative names for objects, people, animals, places, and more instantly.
			</h2>
			<p>
				Ready to find the perfect name? Click the 'Generate' button and discover a list of unique
				and creative names that fit your preferences!
			</p>
			<button class="btn-primary">Generate Names Now</button>
		</div>
	<div class="next-animation"><i class="bx bx-chevron-down" /></div>
</div>

<style>
	.container {
		display: grid;
		height: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 90% 10%;
        grid-template-areas: 
        "logo-animation content"
        "next-animation next-animation";
        justify-items: center;
        align-items: center;
        column-gap: 50px;
	}

    .logo-animation{
        grid-area: "logo-animation";
        align-self: end;
    }
    .content{
        grid-area: "content";
    }

    .content h1{
        font-size: 3rem;    
    }
    .content h2{
        font-family: var(--fnt-general);
    }

    .content p{
        padding: 50px 0; 
    }
    .next-animation{
        grid-area: "next-animation";
        grid-column: span 2;
    }
	.bx-chevron-down {
		font-size: 6rem;
		color: var(--clr-fnt-discret);
		font-weight: 100;

		animation: jumping 2s infinite ease-in-out alternate;
	}

	@keyframes jumping {
        from{
            transform: translateY(-10px);
        }
        to{
            transform: translateY(10px);
        }
    }
</style>
