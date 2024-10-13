<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";
  import { scale } from "svelte/transition";
  import { mergeClass, flyAndScale } from "../utils";
  import type { SelectOptions } from './select.svelte';
  import SelectItem from './select-item.svelte';

  type $$Props = SelectPrimitive.ContentProps & {options: SelectOptions};
  type $$Events = SelectPrimitive.ContentEvents;

  export let sideOffset: $$Props["sideOffset"] = 4;
  export let inTransition: $$Props["inTransition"] = flyAndScale;
  export let inTransitionConfig: $$Props["inTransitionConfig"] = undefined;
  export let outTransition: $$Props["outTransition"] = scale;
  export let outTransitionConfig: $$Props["outTransitionConfig"] = {
    start: 0.95,
    opacity: 0,
    duration: 50,
  };

  let className: $$Props["class"] = undefined;
  export { className as class };
  export let options: SelectOptions;
</script>

<SelectPrimitive.Content
  {inTransition}
  {inTransitionConfig}
  {outTransition}
  {outTransitionConfig}
  {sideOffset}
  class={mergeClass(
    "bg-popover text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md outline-none",
    className
  )}
  {...$$restProps}
  on:keydown
>
  <div class="w-full p-1">
    {#each options as {value, label}}
      <SelectItem {value} {label}>{label}</SelectItem>
    {/each}
  </div>
</SelectPrimitive.Content>
