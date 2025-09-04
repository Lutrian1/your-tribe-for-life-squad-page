<script>

    export let name;
    export let mugshot;

</script>


<figure class="carousel-item">
    <figcaption>
        <p>{name}</p>
    </figcaption>
        <picture>
            <source type="image/avif" srcset="https://fdnd.directus.app/assets/{mugshot}?format=avif&width=360" loading="lazy">
            <source type="image/webp" srcset="https://fdnd.directus.app/assets/{mugshot}?format=webp&width=360" loading="lazy">
            <img src="https://fdnd.directus.app/assets/{mugshot}" loading="lazy" alt="{name}" width="400">
    </picture>
</figure>


<style>
    * {
        margin: 0;
        padding: 0;
    }

    .carousel-item {
        flex: 0 0 20em;
        padding: 1rem;
        text-align: center;
        align-content: center;
        scroll-snap-align: start;
    }

     picture source, img {
        aspect-ratio: 4/5;
        width: 20rem;
        padding-top: 1rem;
    }

    
</style>
