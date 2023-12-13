<script lang="ts">
    import type { RegionInterface } from "$lib/interfaces";
    import { Button } from "stwui";

    export let region: RegionInterface;

    console.log(region);
</script>
<div class="relative rounded-lg w-42 bg-background-col">
    <div class="flex justify-center py-3 rounded-lg shadow-md shadow-shadow-col" id="bgBelowImage">
        <div class="flex flex-col gap-4 w-full mx-3">
            <h2 class="text-lg font-body text-center font-normal">{region.name.charAt(0).toUpperCase() + region.name.slice(1)}</h2>

            <div class="bg-secondary-col flex flex-col text-center rounded">
                <h3 class="font-body font-normal">{region.price} øre/KWh</h3>
                <h3 class="font-body font-normal">i snitt</h3>
            </div>

            <Button class="bg-primary-col" on:click={()=>{window.location.href = "/region/" + region.name.toLocaleLowerCase()}}>
                <h2 class="text-lg font-body">Se mer</h2>
            </Button>
        </div>
    </div>
</div>