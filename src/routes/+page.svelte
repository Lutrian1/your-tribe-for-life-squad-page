<script>
  // Alles wat de load functie in +page.server.js returnt komt hier terecht
  export let data;
  import OnsTeam from "$lib/components/ons-team.svelte";

  //   console.log('Dit is data:', data)
</script>


<OnsTeam titel="Ons team" members={data.members} />

<!-- \<script>
    let { data } = $props();

    const members = data.members.data
    console.log(data.members);

</scrip>

{#each members as member}
    <a href="/{member.id}">{member.name} - {member.bio}</a>
{/each} -->
