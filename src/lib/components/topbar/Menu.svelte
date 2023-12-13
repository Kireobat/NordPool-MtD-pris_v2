<script lang="ts">

let open = false;

</script>

<button on:click={()=> open = !open}>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" class="scale-150 invert fill-background-col">
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
</button>

{#if open}

<div class="absolute w-full h-full z-50 left-0 flex top-0">
    <button on:click={()=> open = false} class="bg-text-col opacity-30 w-36">
    </button>
    <div class="bg-secondary-col w-full">
        <div class="mt-8 mr-6 ml-4">
            <div class="flex justify-end">
                <button on:click={()=> open = false}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512" class="fill-text-col scale-150">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </button>
            </div>
            <div class="mt-8">
                <div class="flex justify-end">
                    <h1 class="font-body font-normal">Meny</h1>
                </div>
                <ul class="mt-8 text-xl">
                    <a href="/" class="font-body font-normal flex justify-end">Velg by</a>
                    <a href="/about" class="font-body font-normal flex justify-end">Om oss</a>
                    <a href="/api/docs" class="font-body font-normal flex justify-end">API dokumentasjon</a>
                </ul>
            </div>
        </div>
    </div>
</div>

{/if}