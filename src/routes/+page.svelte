<script>
  // Alles wat de load functie in +page.server.js returnt komt hier terecht
  export let data;
  import OnsTeam from "$lib/components/ons-team.svelte";

  //   console.log('Dit is data:', data)
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<OnsTeam titel="Ons team" members={data.members} />

<!-- \<script>
    let { data } = $props();

    const members = data.members.data
    console.log(data.members);

</scrip>

{#each members as member}
    <a href="/{member.id}">{member.name} - {member.bio}</a>
{/each} -->
