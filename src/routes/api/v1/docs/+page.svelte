<script lang="ts">
    import { getV1Endpoints } from '$lib/utils/docs/generateDocs';
    import ApiInfo from '$lib/components/api/ApiInfo.svelte';
    import type { EndpointColor } from '$lib/interfaces';

    const endpoints = getV1Endpoints();

    

    const endpointColor: EndpointColor = {
        GET: 'bg-green-400',
        POST: 'bg-blue-400',
        PUT: 'bg-yellow-400',
        DELETE: 'bg-red-400',
    };
</script>

<div>
    <div class="flex justify-between mx-6">
        <div class="flex flex-col justify-center">
            <h1 class="text-3xl">This is the v1 api</h1>
        </div>

        <div class="flex">
            <div class="flex flex-col justify-center">
                <h2 class="text-2xl">Meaning of the Colors:</h2>
            </div>
            {#each Object.keys(endpointColor) as color}
                <div class="flex">
                    <div class=" flex flex-col justify-center w-16 h-16 rounded-md {endpointColor[color]}">
                        <h2 class="text-1xl text-center">{color}</h2>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    {#each endpoints as endpoint}
        <ApiInfo {endpoint} {endpointColor} />
    {/each}
</div>