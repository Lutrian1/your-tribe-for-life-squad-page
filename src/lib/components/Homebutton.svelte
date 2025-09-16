<script>

    import carouselButtonLeft from "$lib/assets/carouselButtonLeft.svg";
    
</script>

<div class="homeButton">
    <a href="/"><img src="{ carouselButtonLeft }" alt="terug naar hoofdpagina"></a>
</div>

<style>
    .homeButton a {
        position: absolute;
        margin: 0.6rem;
    }

    img {
        height: 30px;
        width: 30px;

        transition: transform 0.3s ease;
        animation: animtion_shakeIng 1.5s infinite;
        transform-origin: center;
    }

    @keyframes animtion_shakeIng {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(10deg);
        }
        50% {
            transform: rotate(-10deg);
        }
        75% {
            transform: rotate(10deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
