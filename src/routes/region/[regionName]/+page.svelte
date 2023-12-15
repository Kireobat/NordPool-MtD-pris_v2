<script lang="ts">
    import type { RegionInterface } from "$lib/interfaces";

    import MonthtoDateAverage from "$lib/components/regionScreen/MonthtoDateAverage.svelte";
    import Topbar from "$lib/components/topbar/Topbar.svelte";
    import { onMount } from "svelte";
    import PriceExtremes from "$lib/components/regionScreen/PriceExtremes.svelte";

    export let data: { regionName: string };

    let regionData: RegionInterface;

    let resJsonFiltered:any;

    function filterRegionData(region: string, resJson: any) {

        let tempData: any = {
            name: region,
            price: resJson.data[region]?.price.toFixed(1),
            change: resJson.data[region]?.change.toFixed(1),
        };

        if (tempData.change > 0) {
            tempData.prefix = "+";
        } else {
            tempData.prefix = "";
        }

        return (resJsonFiltered = tempData);
    }

    async function getRegionData() {
    const res = await fetch("/api/v1/spotpris/averageThisMonth", {
        method: "GET",
    });
    const resJson = await res.json();

    filterRegionData(data.regionName, resJson);

    return (regionData = resJsonFiltered);
    }

    onMount(() => {
    getRegionData();
    });

    const periodElements = [
        {
            label: "Denne måneden",
            value: "this-month",
        },
        {
            label: "Siste 3 måneder",
            value: "last-3-months",
        },
        {
            label: "Siste 6 måneder",
            value: "last-6-months",
        },
        {
            label: "Siste året",
            value: "last-year",
        }
    ]
</script>

<main class="h-full bg-background-col text-text-col">
    <Topbar />
    {#if regionData}

        <div class="flex flex-col justify-center mt-4">
            <h1 class="font-body font-normal text-center">{data.regionName.charAt(0).toUpperCase() + data.regionName.slice(1)}</h1>
            <div class="flex flex-col gap-4">
                <MonthtoDateAverage region={regionData} />
                <PriceExtremes type="min" region={regionData.name} elements={periodElements}/>
            </div>
        </div>

    {:else}
    <div class="flex justify-center items-center h-full">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-col"></div>
    </div>
    {/if}
    
</main>

<style>
</style>
