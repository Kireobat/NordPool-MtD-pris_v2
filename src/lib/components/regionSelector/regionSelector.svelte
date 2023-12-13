<script lang="ts">
    import Region from "./Region.svelte";
    import type { RegionInterface } from "$lib/interfaces";
    import { onMount } from "svelte";

    let regions: RegionInterface[] = [];
    

    async function getRegionData() {
        const res = await fetch("/api/v1/spotpris/averageThisMonth", {
            method: "GET",
        });
        const resJson = await res.json();

        

        let tempData: any = [];

        for (let key in resJson.data) {
            // create a new object with the properties from resJson.data[key] and the key as name
            let newRegion: RegionInterface = {
                name: key,
                price: resJson.data[key].price.toFixed(1),
                change: resJson.data[key].change.toFixed(1)
            };

            // push the new object into regions2
            tempData.push(newRegion);
        }

        return (regions = tempData);
    }

    onMount(() => {
        getRegionData();
    });


</script>
<div class="flex justify-center">
        {#if regions.length != 0}
            <div class="customGrid w-full gap-4">
                {#each regions as region}
                    <div>
                        <Region {region}/>
                    </div>
                {/each}
            </div>
        {:else}
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-col"></div>
        {/if}
</div>

<style>
    .customGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
</style>