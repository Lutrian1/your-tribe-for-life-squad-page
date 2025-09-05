<script>
  // Export lege members en titel zodat dit gebruik kan worden als props
  export let members = [];
  export let titel = "";

  // console.log("Dit is de memberlist:", members);
</script>

<section class="ourTeam">
  <h2 class="title">{titel}</h2>
  <div
    class="carousel carousel--scroll-buttons carousel--scroll-markers carousel--inert"
  >
    <!-- For each met een loop index -->
    {#each members as member, i}
      <li class="ourTeamCard carousel__slide" data-label="Slide {i + 1}">
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
            />
          </picture></a
        >
        <div class="memberInfo">
          <h3>{member.name}</h3>
          <p>
            Bio: lorem ipsum lorem ipsum {member.bio}
          </p>
        </div>
      </li>
    {/each}
  </div>
</section>

<style>
  /* Our team */
  .ourTeam {
    margin: 0 auto;
    max-width: 1200px;
  }

  .title {
    font-size: 3em;
    width: 100%;
    text-align: center;
    font-weight: 1000;
  }

  /* Carousel */
  .carousel {
    display: flex;
    width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    anchor-name: --carousel;
    gap: 2em;
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

  /* Our Team Card */
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

  .ourTeamCard img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 1px solid #c91833;
  }

  .ourTeamCard::scroll-marker {
    content: "";
    height: 2em;
    width: 2em;
    border-radius: 50%;
    border: 1px solid #c91833;
  }

  .ourTeamCard::scroll-marker:target-current {
    background-color: #c91833;
  }

  .memberInfo {
    width: 100%;
    margin-right: 1em;
  }
  .memberInfo h3 {
    font-size: 1.5em;
    text-align: end;
  }
  .memberInfo p {
    font-size: 2em;
    text-align: start;
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
      max-width: 400px;
      text-align: end;
    }
    .memberInfo h3 {
      font-size: 2em;
    }
    .memberInfo p {
      font-size: 1em;
      text-align: end;
    }
  }
</style>
