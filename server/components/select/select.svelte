<svelte:options
  customElement={{
    tag: "test-select",
    shadow: "open",
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<script lang="ts">
  import { addGlobalTailwindToSvelteWebComponent } from "../utils";
  import { Select as SelectPrimitive } from "bits-ui";
  import SelectContent from "./select-content.svelte";
  import SelectTrigger from "./select-trigger.svelte";
  import SelectItem from "./select-item.svelte";
  import SelectLabel from "./select-label.svelte";

  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
  ];
  const vegetables = [
    { value: "tomato", label: "Tomato" },
    { value: "cat", label: "Katze" },
    { value: "donut", label: "Donut" },
    { value: "brötchen", label: "Brötchen" },
    { value: "toast", label: "Toast" },
  ];
</script>

<SelectPrimitive.Root portal={null}>
  <SelectTrigger class="w-[180px]">
    <SelectPrimitive.Value placeholder="Select a fruit or vegetable" />
  </SelectTrigger>
  <SelectContent>
    <SelectPrimitive.Group>
      <SelectLabel>Fruits</SelectLabel>
      {#each fruits as fruit}
        <SelectItem value={fruit.value} label={fruit.label}
          >{fruit.label}</SelectItem
        >
      {/each}
    </SelectPrimitive.Group>
    <SelectPrimitive.Group>
      <SelectLabel>Vegetables</SelectLabel>
      {#each vegetables as vegetable}
        <SelectItem value={vegetable.value} label={vegetable.label}
          >{vegetable.label}</SelectItem
        >
      {/each}
    </SelectPrimitive.Group>
  </SelectContent>
  <SelectPrimitive.Input name="foodInput" />
</SelectPrimitive.Root>
