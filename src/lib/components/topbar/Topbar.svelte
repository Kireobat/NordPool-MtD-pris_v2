<script lang="ts">
    import DarkmodeToggle from "./DarkmodeToggle.svelte";
    import Menu from "./Menu.svelte";
</script>

<div class="p-6 flex justify-between shadow-md shadow-shadow-col">
    <h1 class="font-heading text-2xl font-bold">Spotpris.eu</h1>
    <div class="flex gap-4">
        <div class="flex flex-col justify-center">
            <DarkmodeToggle />
        </div>

        <div class="flex flex-col justify-center">
            <Menu />
        </div>
    </div>
    
</div>