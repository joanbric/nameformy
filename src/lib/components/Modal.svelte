<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    
    let closeModal = () => {
        dispatch('close');
    }
    let closeModalKey = (e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }
</script>
<div on:click={closeModal} on:keydown={closeModalKey} class="background">
	<div on:click|stopPropagation={()=>{}} on:keydown|stopPropagation={()=>{}} class="container">
        <button class="btn-close" on:click={closeModal}><i class='bx bx-x-circle' ></i></button>
        <slot />
    </div>
</div>


<style>
    .background {
        position: absolute;
        inset: 0;
        z-index: 1000;
        background-color: #3335;
        backdrop-filter: blur(8px);
    }
    .container {
        min-width: 400px;
        min-height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--clr-grey);
        padding: 45px 50px;
        border-radius: 12px;
    }
    .btn-close{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #db4b4b;
        font-size: 1.5rem;
        background: none;
    }

    .btn-close:hover{
        color: red;
    }
</style>