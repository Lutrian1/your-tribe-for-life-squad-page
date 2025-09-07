<script>

    import leaf1 from '$lib/assets/pictures/leaf1.svg';
    import leaf2 from '$lib/assets/pictures/leaf2.svg';

    export let data

    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import OnsTeam from "$lib/components/ons-team.svelte";

</script>

<div class="background">
	<img src="{leaf2}" alt="" class="leaf1">
	<img src="{leaf1}" alt="" class="leaf2">
	<img src="{leaf2}" alt="" class="leaf3">
	<img src="{leaf1}" alt="" class="leaf4">
</div>

<!-- COMPONENT: HEADER--> 
<Header />
 
<!-- COMPONENT: ONS TEAM (MAIN)-->
<OnsTeam titel="ONS TEAM" members={data.members} />

<!-- COMPONENT: FOOTER-->
<Footer />
