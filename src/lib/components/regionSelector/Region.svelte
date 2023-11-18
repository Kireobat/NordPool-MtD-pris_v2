<script lang="ts">
    import type { RegionInterface } from "$lib/interfaces";
    import { Button } from "stwui";

    export let region: RegionInterface;
</script>
<div class="relative rounded-lg w-44">
    <div class="flex justify-center py-3 rounded-lg shadow-xl" id="bgBelowImage">
        <div class="flex flex-col gap-4">
            <h2 class="text-lg font-body text-center">{region.name}</h2>
            <Button class="bg-primary-col" on:click={()=>{window.location.href = "/" + region.name.toLocaleLowerCase()}}>
                <h2 class="text-lg font-body">Se spotpris</h2>
            </Button>
        </div>
    </div>
</div>