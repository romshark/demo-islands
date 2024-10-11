<svelte:options
  customElement={{
    tag: "custom-label",
    shadow: "open",
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<script lang="ts">
  import { Label as LabelPrimitive } from "bits-ui";
  import { addGlobalTailwindToSvelteWebComponent, mergeClass } from "../utils";

  type $$Props = LabelPrimitive.Props;
  type $$Events = LabelPrimitive.Events;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<LabelPrimitive.Root
  class={mergeClass(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    className
  )}
  {...$$restProps}
  on:mousedown
>
  <slot />
</LabelPrimitive.Root>
