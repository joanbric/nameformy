<script>
	export let names = [];
	export let subject = '';
</script>

<div class="container">
	<h2>The name for your {subject}</h2>
	{#each names as namedata}
		{@const { name, meaning, because, pronunciation } = namedata}
		<article class="name-option-container">
            <header>
                <h3>{name} <button class="btn-copy"><i class='bx bx-copy'></i></button></h3>
                <p class="pronunciation">/{pronunciation}/</p>
                
            </header>
			<p class="meaning">{meaning}</p>
			<p class="because">{because}</p>
		</article>
	{/each}
</div>


<style>
    .container{
        text-align: center;
    }

    h2{
        padding: 20px 0;
    }
    .name-option-container{
        background-color: var(--clr-dark-violet);
        border: 1px solid var(--clr-pink);
        padding: 20px 40px;
        border-radius: 10px;
        width: max-content;
        max-width: 800px;
        margin-top: 20px;
    }

    h3{
        font-size: 2.5rem;
        position: relative;
    }

    .btn-copy{
        margin-left: 5px;        
        font-size: 1.5rem;
        background: none;
        color: var(--clr-pink);

    }
    .btn-copy:hover{
        color: rgb(255, 135, 235);
    }
    .meaning, .because{
        text-align: left;
        padding: .3rem 0;
        line-height: 1.2em;
    }
</style>

