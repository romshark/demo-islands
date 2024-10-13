<svelte:options
  customElement={{
    tag: "test-select",
    shadow: "none",
    props: {
      optionsJson: {type: 'String', attribute: 'options-json'},
    },
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<script lang="ts" context="module">
  export type SelectOptions = Array<{label: string; value: string|boolean|number}>;
</script>

<script lang="ts">
  import { addGlobalTailwindToSvelteWebComponent } from "../utils";
  import { Select as SelectPrimitive } from "bits-ui";
  import SelectContent from "./select-content.svelte";
  import SelectTrigger from "./select-trigger.svelte";

  export let name: string;
  export let placeholder = '';
  export let optionsJson: string;

  const options = JSON.parse(optionsJson) as SelectOptions;
</script>

<SelectPrimitive.Root {...$$restProps}>
  <SelectTrigger>
    <SelectPrimitive.Value {placeholder} />
  </SelectTrigger>
  <SelectContent {options} />
  <SelectPrimitive.Input {name} />
</SelectPrimitive.Root>
