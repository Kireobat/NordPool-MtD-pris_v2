<script lang="ts">
    import Dropdown from "../dropdown/Dropdown.svelte";

    

    export let type: "min" | "max";
    export let region: string;
    export let elements: { label: string; value: string }[];
    

    let thing = region;

    let price = 123;
    let date = new Date().toLocaleDateString("nb-NO", { day: "2-digit", month: "long", year: "numeric" });
</script>

<div class="bg-background-col rounded-lg shadow-md shadow-shadow-col mx-4 w-44">
    {#if type === "min"}
        <h2 class="font-body font-normal text-2xl text-center">Laveste pris</h2>
    {:else}
        <h2 class="font-body font-normal text-2xl text-center">Høyeste pris</h2>
    {/if}
    <div class="bg-secondary-col rounded m-4 py-2 flex justify-center">
        <Dropdown {elements} />
    </div>
    <div class="bg-secondary-col rounded m-4">
        <h3 class="font-body font-normal text-center text-base">{price} øre/KWh</h3>
        <h3 class="font-body font-normal text-center text-base">{date}</h3>
    </div>
</div>