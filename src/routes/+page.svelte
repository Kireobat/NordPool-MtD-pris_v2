<script lang="ts">
    import RegionSelector from "$lib/components/regionSelector/RegionSelector.svelte";
    import Topbar from "$lib/components/topbar/Topbar.svelte";
    
</script>
<main class="h-full bg-background-col text-text-col">
    <Topbar />
    <div class="mx-6 mt-4">
        <RegionSelector />
    </div>
</main>