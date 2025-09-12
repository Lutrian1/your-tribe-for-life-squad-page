<script>

// export let filter;


 
</script>




<header class="filterContainer">
    <!-- <a class="backButton" href="/"><img src="/src/lib/assets/carouselArrowLeft.svg"></a> -->

    <!-- als je drukt op de button komt de name en de value in de url, bv /squad-2f?filter=morning -->
    <form method="get">
        <button class="filterButton" type="submit" name="filter" value="alle">Alle</button>
        <button class="filterButton" type="submit" name="filter" value="morning">Morning</button>
        <button class="filterButton" type="submit" name="filter" value="evening">Evening</button>
    </form>

    <!-- <img class="logo" src="/src/lib/assets/pictures/logo.svg"> -->
</header>

<style>
    .filterButton {
    border: none;
    border: 1px solid var(--main-text-color);
    padding: 0.5rem;
    border-radius: 20%;
    font-family: var(--main-font);
    background-color: var(--main-background-color);  
    color: var(--main-text-color);
    font-size: larger;  
    cursor: pointer;

    &:hover {
        background-color: var(--main-text-color);
        color: var(--main-background-color);  
    }
}

.filterButton:active {
    background-color: var(--squad-number-sidebar-inactive);
}

.filterContainer {
    display: flex;
    align-items: center;
    /* justify-content: space-between;  */
    background-color: var(--main-background-color);
    padding: 1rem;
    justify-content: center;
}

.filterContainer form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

</style>