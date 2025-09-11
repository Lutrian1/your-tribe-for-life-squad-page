<script>
    let { data } = $props();
    const members = data.members;

  const filter = data.filter;

    import Card from "$lib/components/card.svelte";
    import leaf1  from '$lib/assets/pictures/leaf1.svg';
    import leaf2  from '$lib/assets/pictures/leaf2.svg';
    import DetailHeader from "$lib/components/detailHeader.svelte";

</script>


<DetailHeader filter={data.filter}/>

<div class="squadNumberContainer">
    <h1 class="squadNumberActive">2F</h1>
    <a href="/squad-2e"><h2 class="squadNumberInactive squadNumberSidebar">2E</h2></a>
</div>

<div class="card">
    <img class="leafOne" alt="" src="{leaf1}">
    <img class="leafTwo" alt="" src="{leaf1}">
    <img class="leafThree" alt="" src="{leaf2}">

    {#each members as member}
        <Card 
        name={member.name} 
        mugshot={member.mugshot} 
        bio={member.bio} 
        squad={member.id} 
        fav_kitchen={member.fav_kitchen}
        fav_hobby={member.fav_hobby}
        github_handle={member.github_handle}
        fav_emoji={member.fav_emoji}
        fav_book_genre={member.fav_book_genre}
        fav_country={member.fav_country}/>
    {/each}
</div>



<style>

    * {
        margin: 0;
        padding: 0;
    }

    .squadNumberContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2rem 0rem 2rem 0rem ;
        background-color: var(--main-text-color);
        color: var(--main-background-color);  

        a {
            text-decoration: none;
            color: var(--main-background-color);  
            cursor: pointer;
        }
}


    .card {
        position: relative;
    }

      .leafTwo, .leafOne, .leafThree {
        display: none;

    }

    @media (min-width: 800px) {
        .leafOne {
            position: absolute;
            bottom: 0;
            right: 0;
            transform: rotate(90deg);
            z-index: 1000;
            display: block;
            height: 20rem;
            width: 20rem;
        }
    }

    @media (min-width: 800px) {
        .leafTwo {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1000;
            display: block;
            height: 20rem;
            width: 20rem;
        }
    }

     @media (min-width: 800px) {
        .leafThree {
            position: absolute;
            bottom: 30%;
            right: 10%;
            transform: rotate(90deg);
            z-index: 1000;
            display: block;
            height: 20rem;
            width: 20rem;
        }
    }








</style>
