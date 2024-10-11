<svelte:options
  customElement={{
    tag: "custom-popover-content",
    shadow: "open",
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<script lang="ts" context="module">
  export const Popover = PopoverPrimitive.Root;
  export const Trigger = PopoverPrimitive.Trigger;
  export const Close = PopoverPrimitive.Close;
</script>

<script lang="ts">
  import { Popover as PopoverPrimitive } from "bits-ui";
  import {
    addGlobalTailwindToSvelteWebComponent,
    mergeClass,
    flyAndScale,
  } from "../utils";

  type $$Props = PopoverPrimitive.ContentProps;
  let className: $$Props["class"] = undefined;
  export let transition: $$Props["transition"] = flyAndScale;
  export let transitionConfig: $$Props["transitionConfig"] = undefined;
  export { className as class };
</script>

<PopoverPrimitive.Content
  {transition}
  {transitionConfig}
  class={mergeClass(
    "bg-popover text-popover-foreground z-50 w-72 rounded-md border p-4 shadow-md outline-none",
    className
  )}
  {...$$restProps}
>
  <slot />
</PopoverPrimitive.Content>
