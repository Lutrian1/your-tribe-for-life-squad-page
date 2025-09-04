<script>

    let { data } = $props();
    const members = data.members;

    import ClassCarousel from '$lib/components/classCarousel.svelte';

</script>


<section class="carousel-main-container">
    <div class="carousel-mugshot-container">
        {#each members as member }
            <ClassCarousel name= {member.name} mugshot= {member.mugshot}/>
        {/each}
    </div>
</section>


<style>
    
    * {
        margin: 0;
        padding: 0;
    }

    .carousel-main-container {
        margin-top: 15rem;
    }

    .carousel-mugshot-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin: 3rem auto;
        width: 100%;
        overflow-x: auto;
        scroll-behavior: smooth;
        position-anchor: --carousel-mugshot-container;
        scroll-snap-type: x mandatory;
    }

    .carousel-mugshot-container::-webkit-scrollbar {
        display: none;
    }

    .carousel-mugshot-container::scroll-button(right) {
        content: url("/src/lib/assets/carouselArrowRight.svg");
        border: none;
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0);
        position-area: bottom center;
        position: fixed;
        position-anchor: --carousel-mugshot-container;
        translate: 70%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .carousel-mugshot-container::scroll-button(left) {
        content: url("/src/lib/assets/carouselArrowLeft.svg");
        border: none;
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0);
        position-area: bottom center;
        position: fixed;
        position-anchor: --carousel-mugshot-container;
        translate: -70%;
        transform: translateY(-50%);
        cursor: pointer;
    }

</style>
