<script>
    import Animation_Scribble from '$lib/components/animation_scribble.svelte';

    import leaf1 from '$lib/assets/pictures/leaf1.svg';
    import leaf2 from '$lib/assets/pictures/leaf2.svg';

    export let data

    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import OnsTeam from "$lib/components/onsTeam.svelte";

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

<!-- COMPONENT: ANIMATIE (GEBRUIK DEZE VOOR DE SCRIBBLE EFFECT TIJDENS HET OPENEN VAN EEN PAGINA)-->
<Animation_Scribble />


<style>

/*----------------------------------- HEADER: Positie --------------------------------------*/
header {
    container-type: inline-size;
    container-name: header;

    display: flex;
    flex-direction: column;

    .headerColumn1 { grid-area: col1; }
    .headerColumn2 { grid-area: col2; }
    .headerColumn3 { grid-area: col3; }

    p{
        text-align: center;
        font-weight: 800;
        width: auto;
        height: auto;
    }
}

/*----------------------------------- HEADER: Container query - Telefoon --------------------------------------*/
@container header (max-width: 700px){
    
    .headerColumn1{
        display: none;
    }
    
    .headerColumn3{
        margin-top: 4vh;
        display: flex;
        justify-content: center;
    }

    p{
        font-size: clamp(1.3em, 1.3vw, 1.7em);
        margin: 0;
        max-width: 380px;
    }
}

/*----------------------------------- HEADER: Container query - Desktop --------------------------------------*/
@container header (min-width: 700px){

    .headerContainer{
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "col2 col2"
            "col1 col3"; 
        }

        .headerColumn1, .headerColumn3{
            display: flex;
            justify-content: center;
        }

        p{
            font-size: clamp(1.1em, 1.2vw, 1.5em);
            margin: 0;
            max-width: 310px;
        }

}

@container header (min-width: 1100px){

    .headerContainer{
        display: grid; 
        flex-direction: row;
        grid-template-columns: 0.8fr 1.4fr 0.8fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: "col1 col2 col3";
        position: relative;
    }

    .headerColumn1, .headerColumn3{
        margin-top: 20vh;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    p{
        max-width: 310px;
        max-height: 241px;
    }
}

/*----------------------------------- LOGO --------------------------------------*/

.logo{
    margin-top: 2vw;
    display: flex;
    justify-content: center;
    .logoImg{
        max-width: 80%;
        height: auto;
        min-width: 180px;
    }
    .sikjeTitle{ /* Tekst is visueel niet te zien, maar bestaat nog wel. Display none haalt anders het element weg voor screen readers.*/
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
        z-index: 1;
    }
}

</style>
