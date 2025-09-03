<script>
  // Export lege members en titel zodat dit gebruik kan worden als props
  export let members = [];
  export let titel = "";

//   console.log("Dit is de memberlist:", members);
</script>

<section class="onsTeam">
  <h2 class="titel">{titel}</h2>

  {#if members}
    {#each members as member}
      <p>id: {member.id} van {member.name}</p>
    {/each}
  {:else}
    <p>Geen members gevonden</p>
  {/if}
</section>

<style>
  .onsTeam {
    margin: 0 auto;
  }

  .titel {
    width: 100%;
    text-align: center;
    background-color: grey;
  }
</style>
