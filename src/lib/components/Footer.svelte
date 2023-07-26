<script>
    import NFMLogoBig from '$lib/components/svgs/NFM-logo_big.svelte';

    function handleGenerateClick() {
        
    }
</script>
<footer>
    <div class="content">
        <div class="logo"><NFMLogoBig /></div>
        <div class="links">
            <h2>Links</h2>
            <p><a href="https://github.com/NameForMy" class="github-link"><i class='bx bxl-github'></i><span class="link-content">/nameformy</span></a></p>
            <p><a href="mailto:info@nameformy.com">info@nameformy.com</a></p>
        </div>
        <button on:click={handleGenerateClick} class="btn-primary">Generate Names</button>
    </div>
    <p class="copyright">© 2023 NameForMy.com.  All rights reserved</p>
</footer>

<style>
    footer{
        padding: 2rem 0 1rem 0;
        text-align: center;
    }
    .content{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 4rem 0;
    }
    .logo{
        display: flex;
        max-width: 100px;
        max-height: 100px;
        align-items: center;
    }



    .github-link{
        display: inline-flex;
        align-items: center;
        text-decoration: none;
    }
    .link-content{
        text-decoration: underline;
    }
    .bxl-github{
        font-size: 2rem;
    }

    .copyright{
        font-size: .8rem;
        color: var(--clr-fnt-discret);
        padding: 1rem 0;
    }
</style>