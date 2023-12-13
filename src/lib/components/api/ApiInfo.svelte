<script lang="ts">
    import type { EndpointInterface, EndpointColor } from '$lib/interfaces';

    export let endpoint: EndpointInterface;

    export let endpointColor: EndpointColor;
</script>

<div class="bg-slate-200 rounded-2xl mx-4 my-4 p-2">
    <h1 class="w-16 py-1 text-center rounded-md {endpointColor[endpoint.method]}">{endpoint.method}</h1>
    <h2>Path: <a href="{endpoint.path}" class="text-blue-600" >{endpoint.path}</a></h2>
    <h2>Description: {endpoint.description}</h2>
</div>