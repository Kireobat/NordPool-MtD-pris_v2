<script lang="ts">
    import Region from "./Region.svelte";
    import type { RegionInterface } from "$lib/interfaces";



    const regions: RegionInterface[] = [
        {
            name: "Oslo",
        },
        {
            name: "Kristiansand",
        },
        {
            name: "Bergen",
        },
        {
            name: "Molde",
        },
        {
            name: "Trondheim",
        },
        {
            name: "Tromsø",
        },
    ];


</script>
<div class="flex justify-center">
    <div class="customGrid w-full">
        {#each regions as region}
            <div class="">
                <Region {region}/>
            </div>
        {/each}
    </div>
</div>

<style>
    .customGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    }
</style>