<script lang="ts">
    import type { RegionInterface } from "$lib/interfaces";

    let month = new Date().toLocaleString("nb-NO", { month: "long" });

    export let region: RegionInterface;
</script>

    <div class="bg-background-col rounded-lg shadow-md shadow-shadow-col mx-4">
        <div class="flex flex-col gap-4 w-full">
            <h2 class="text-lg font-body text-center font-normal mt-4">Snitt for {month}</h2>
            <div class="flex justify-evenly mb-4 w-full">
                <div class="flex flex-col gap-4 w-40">
                    <div class="bg-secondary-col p-2 rounded">
                        <h3 class="font-body font-normal text-base text-center">{region.price} øre/KWh</h3>
                    </div>
                    <div class="bg-secondary-col p-2 rounded text-center">
                        <h3 class="font-body font-normal text-base">Endring</h3>
                        <h2 class="font-body font-normal text-2xl">{region.prefix}{region.change}%</h2>
                    </div>
                </div>
                <div class="bg-secondary-col p-2 rounded w-40">
                    <h2 class="font-body font-normal text-2xl text-center">Graf</h2>
                </div>
            </div>
            
        </div>
    </div>