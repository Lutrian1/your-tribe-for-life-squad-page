<script>
  import { onMount } from "svelte";

  let showLoader = $state(true);
  console.log("Loader start:", showLoader);

  $effect(() => {
    console.log(1)
    // Deze code wordt alleen uitgevoerd in de browser
    const timer = setTimeout(() => {
      showLoader = false;
      //showLoader.style.display = "none";
      console.log("Loader hidden:", showLoader);
    }, 4000);
  });
</script>

{#if showLoader}
  <section class="loadingPage">
    ik ben aan het laden
  </section>
{/if}

<style>
  .loadingPage {
    position: fixed;
    inset: 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  svg {
    height: 400px;
    width: 400px;
    stroke: white;
    fill-opacity: 0;
    stroke-width: 3px;
    stroke-dasharray: 4500;
    animation: draw 7s ease;
  }

  .sikje {
    opacity: 0;
    animation: fadeInFromBottom 3s forwards;
    animation-delay: 1s;
  }

  .snorLinks {
    opacity: 0;
    animation: fadeInFromLeft 3s forwards;
    animation-delay: 2s;
  }

  .snorRechts {
    opacity: 0;
    animation: fadeInFromRight 3s forwards;
    animation-delay: 2s;
  }

  @keyframes draw {
    0% {
      stroke-dashoffset: 4500;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes fadeInFromRight {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
</style>
