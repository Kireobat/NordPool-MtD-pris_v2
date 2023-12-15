<script lang="ts">
    import { Dropdown, Button } from "stwui";

    export let elements: 
        {
            label: string;
            value: string;
        }[];

    let dropdownVisible: boolean = false;

    function toggleDropdown() {
        dropdownVisible = !dropdownVisible;
    }

    function closeDropdown(selectedElement: { label: string; value: string}) {
        dropdownVisible = false;
        periode = selectedElement.label;

    }

    let periode: string = "Velg periode";
</script>

<Dropdown bind:visible={dropdownVisible}>
    <Button slot="trigger" class="bg-primary-col text-text-col flex gap-4" on:click={toggleDropdown}>
        <h3 class="font-body font-normal text-center">{periode}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512" class="fill-text-col">
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
        </svg>
    </Button>
    <Dropdown.Items slot="items">
        {#each elements as element}
            <Dropdown.Items.Item on:click={()=>{closeDropdown(element)}} label={element.label}>
            </Dropdown.Items.Item>  
        {/each}
    </Dropdown.Items>
</Dropdown>