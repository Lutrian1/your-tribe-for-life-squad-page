<script>

    export let name;
    export let mugshot;
    export let bio;
    export let fav_kitchen;
    export let fav_hobby;
    export let github_handle;
    export let fav_emoji;
    export let fav_book_genre;
    export let fav_country

</script>


<section class="mainContainer animation_scroll">
        
            <article class="membersData">
                <div class="membersInfo">
                    <h1 class="membersName">{name}</h1>

                    <p class="membersDescription">{bio || "Hey, Ik houdt van coderen en het maken van leuke creative dingen op het web 😃 🥳"}</p>

                    <details class="membersInfoDropDown">
                        <summary>Meer van mij</summary>
                        
                        <ul>
                            <li>eten: {fav_kitchen || "Pasta"}</li>
                            <li>Hobby: {fav_hobby || "Dansen"}</li>
                            <li>github: {github_handle || "Codemaster"}</li>
                            <li>Favoriete Emoji: {fav_emoji || "🤡"}</li>
                            <li>Favoriete boek genre: {fav_book_genre || "Thriller"}</li>
                            <li>Lievelingsland: {fav_country || "NL"}</li>
                        </ul>
                    </details>
                </div>

                <figure class="membersImageContainer">
                    <picture>
                        <source type="image/avif" srcset="https://fdnd.directus.app/assets/{mugshot}?format=avif&width=600&height=1000">
                        <source type="image/webp" srcset="https://fdnd.directus.app/assets/{mugshot}?format=webp&width=600&height=1000">
                        <img class="mugshotImage" src="https://fdnd.directus.app/assets/{mugshot}" loading="lazy" alt="{name}" width="400">
                    </picture>
                </figure>
            </article>

        </section>



<style>

     * {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

  
.filterButton {
    border: none;
    border: 1px solid var(--main-text-color);
    padding: 0.5rem;
    border-radius: 20%;
    font-family: var(--main-font);
    background-color: var(--main-background-color);  
    color: var(--main-text-color);
    font-size: larger;  
    cursor: pointer;
}

.filterButton:active {
    background-color: var(--squad-number-sidebar-inactive);
}

.filterContainer {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    background-color: var(--main-background-color);
    padding: 0.5rem;
}

.backButton img, .logo {
    height: 3rem;
}

/* main content */
.squadNumberContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem 2rem 0rem ;
}

.mainContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 1rem;
}

.membersData {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.membersInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

  @media (min-width: 800px) {
        .membersData {
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    grid-template-rows: auto;
    padding: 1rem;  
}

.membersInfo {
    grid-column: 2 / 2;
    grid-row: 1;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.membersImageContainer {

   grid-column: 1 / 2;
    grid-row: 1;
}
    }


.membersInfoDropDown {
    border-radius: 10px;
    /* padding: 1rem; */
    /* background-color: #fff8f0; */
    transition: all 0.3s ease;
    margin-top: 1rem;
    width: fit-content;
}

.membersInfoDropDown summary {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    list-style: none; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: clamp(1.3em, 2vw, 2em);
}

.membersInfoDropDown summary::-webkit-details-marker {
    display: none; 
}

.membersInfoDropDown summary::after {
    content: url(/src/lib/assets/pictures/carouselArrowLeft.svg); 
    display: inline-block; 
    margin-left: 1rem;
    transition: transform 0.3s ease;
    animation: animtion_shakeIng 1.5s infinite; 
    transform-origin: center; 
}

@keyframes animtion_shakeIng {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
}

.membersInfoDropDown ul {
    /* margin-top: 0.5rem; */
    padding-left: 1.2rem;
    color: var(--main-text-color);
}

.membersInfoDropDown li {
    margin-bottom: 0.4rem;
    font-size: clamp(1.3em, 2vw, 2em);
}

    .membersImageContainer {
        border: 10px solid #fcc094;
        border-radius: 2%;
        flex-grow: 2;
    }

    .mugshotImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-position: center;
    }

    picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-position: center;
    }


/* scroll animatie */
.animation_scroll {
    animation: animation_cornerScroll 1s ease-out;

     /* Dit is de naam van het element waarmee je aangeeft hoelang de scrool duurt. 
    je geeft de classname van dat element waardoor nu duidelijk is hoelang dit element is  */
    view-timeline-name: --scroll-animation;

     /* dit is de het element waarin je de scroll animatie wilt uitvoeren. dit is de class name van het element */
    animation-timeline: --scroll-animation;
    
    /* welke richting de scroll naartoe gaat dit geval horizontaal  */
    view-timeline-axis: block;

    /* wanneer de animatie begint bij hoeveel procent het in het element is en hoeveel procent het covert */
    animation-range: entry 0% cover 25%;
}

@keyframes animation_cornerScroll {
    from {
        opacity: 0;
        transform: translateX(50vw) translateY(50vw);
    }
    to {
        opacity: 1;
        transform: translateX(0) translateY(0);
    }
}


</style>



