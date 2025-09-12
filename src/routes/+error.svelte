<script>
	import { page } from '$app/state';

</script>

<main>

  <h1>404 Page {page.error.message}</h1>
  <p>We couldn't find the page you were looking for. Navigate back to the homepage.</p>
        
  <a href="/" class="homeButton">

    <span class="buttonText">Home</span>
    
      <div class="svgContainer">

        <svg viewBox="0 0 251 158" class="outline">
          <path class="svgPath" d="M78.9966 23.4989C48.9966 31.9989 -7.49877 38.0018 2.99985 85.5004C22.7861 175.019 73.9998 161.498 160.5 141.998C247 122.498 239.999 74.1812 202.999 48.4998C93.4999 -27.5021 63 13.0003 27.5 7.50033" />
        </svg>

      </div>

  </a>
</main>

<style>

main{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

h1{
  font-size: clamp(2.5em, 10vw, 6.5em);
  margin: 0;
}

p{
   font-size: clamp(1em, 5vw, 2em);
   padding: 1vw;
   margin: 2vh;
   color: black;
}

.homeButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  font-size: clamp(2.5em, 10vw, 6.5em);
  font-weight: 800;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
}

.buttonText {
  position: relative;
   z-index: 2;
}

.svgContainer {
  position: absolute;
  width: 130%;
  height: 130%;
}
        
.outline {
    width: 100%;
    height: 100%;
    display: none;
}

.svgPath {
  stroke: var(--main-text-color);
  stroke-width: 8;
  stroke-linecap: round;
  fill: none;
  stroke-dasharray: 640.3837890625;
  stroke-dashoffset: 640.3837890625;
  animation: animation_drawHover 3s ease-in-out forwards;
}

.homeButton:hover{
  .outline {
    display: block;
  }
}

@keyframes animation_drawHover {
  0% {
    stroke-dashoffset: 640.3837890625;
  }
  20% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes animation_drawHoverOut {
  0% {
    stroke-dashoffset: 640.3837890625;
  }
  20% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 640.3837890625;
  }
}


</style>
