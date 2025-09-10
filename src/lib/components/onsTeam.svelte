<script>
  // Export lege members en titel zodat dit gebruik kan worden als props
  export let members = [];
  export let titel = "";
  import scribble from '$lib/assets/pictures/scribble.svg';

  // console.log("Dit is de memberlist:", members);
</script>

<main>
  <section class="ourTeam">
    <img src="{scribble}" alt="" class="scribble1">
    <h2 class="title">{titel}</h2>
    <div
      class="carousel carousel--scroll-buttons carousel--scroll-markers carousel--inert"
    >
      <!-- For each met een loop index -->
      {#each members as member, i}
        <li class="ourTeamCard carousel__slide" data-label="Slide {i + 1} animation_eraseOut" >
          <img src="{scribble}" alt="" class="scribble2">
          <a href={member.website}>
            <picture>
              <source
                srcset="https://fdnd.directus.app/assets/{member.mugshot}?format=webp"
                type="image/webp"
              />

              <!-- Fallback -->
              <img
                src="https://fdnd.directus.app/assets/{member.mugshot}"
                alt={member.name}
                width="200"
                loading="lazy"
                class="mugshot"
              />
            </picture></a
          >
          <div class="memberInfo">
            <h3>{member.name}</h3>
            <p class="memberDescription">
              Bio: lorem ipsum lorem ipsum {member.bio}
            </p>
          </div>
        </li>
      {/each}
    </div>
  </section>
</main>

<style>
main{
    @media (min-width: 1100px){
      display: flex;
      justify-content: center;
    }
}

h2.title{
  margin-top: 1vh;
}
/*----------------------------------- OUR TEAM --------------------------------------*/
  .ourTeam {
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 10vw 0;

    @media (min-width: 1100px){
      display: inline-block;
      max-width: 1300px;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
  }

  .scribble1{
    position: absolute;
    z-index: -1;
    width: 80vw;
    height: 40vh;
    @media (min-width: 1100px){
      display: none;
    }
  }
  
  .scribble2{
    position: absolute;
    z-index: -1;
    display: none;
     @media (min-width: 1100px){
      display: inline-block;
    }
  }

  .title {
    font-size: clamp(50px, 10vw, 90px);
    width: 100%;
    text-align: center;
    font-weight: 800;
    margin: 0px;
  }

/*----------------------------------- CAROUSEL --------------------------------------*/
  .carousel {
    display: flex;
    width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    anchor-name: --carousel;
    gap: 8vw;
    text-align: center;
    scroll-marker-group: after;
  }

  .carousel--scroll-buttons {
    &::scroll-button(*) {
      position: fixed;
      position-anchor: --carousel;
      cursor: pointer;
      border: none;
      background-color: transparent;
    }

    &::scroll-button(right) {
      position-area: inline-end center;
      content: url(../assets/carouselButtonRight.svg);
      translate: -100%;
    }
    &::scroll-button(right):disabled {
      opacity: 0;
    }

    &::scroll-button(left) {
      position-area: inline-start center;
      content: url(../assets/carouselButtonLeft.svg);
      translate: 100%;
    }
    &::scroll-button(left):disabled {
      opacity: 0;
    }
  }

  .carousel::scroll-marker-group {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  ::-webkit-scrollbar {
    width: 0; /* Verwijder scrollbar */
  }

/*----------------------------------- OUR TEAM CARD --------------------------------------*/
  .ourTeamCard {
    scroll-snap-align: start;
    height: 100%;
    flex: 0 0 100%;
    list-style-type: none;
    display: flex;
    gap: 2em;
    justify-content: space-between;

    /* background: url(../assets/scribbleBackground.svg); */
  }

  .mugshot {
    width: 80px;
    height: 110px;
    object-fit: cover;
    border: 1px solid #c91833;
  }

  .ourTeamCard::scroll-marker {
    content: "";
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #c91833;
  }

  .ourTeamCard::scroll-marker:target-current {
    background-color: #c91833;
  }
/*----------------------------------- BIOGRAFIE MEMBER --------------------------------------*/
  .memberInfo {
    width: 100%;
    @media (min-width: 1100px){
      width: 15vw;
    }
  }
  .memberInfo h3 {
    font-size: 32px;
    text-align: end;
    margin: 0;
    @media (min-width: 1100px){
      margin: 20px;
    }
  }
   .memberInfo p {
    font-size: 24px;
    margin: 0;
    text-align: start;
    @media (min-width: 1100px){
      margin: 20px;
    }
  }

  @media (min-width: 768px) {
    .carousel {
      justify-content: space-between;
    }

    .ourTeamCard {
      flex: 0;
    }
    .ourTeamCard::scroll-marker {
      content: none;
    }

    .memberInfo {
      max-width: 200px;
      text-align: end;
    }
    .memberInfo h3 {
      font-size: 32px;
    }
    .memberInfo p {
      font-size: 20px;
      text-align: left;
    }
  }
</style>
