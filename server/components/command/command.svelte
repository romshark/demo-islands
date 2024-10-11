<svelte:options
  customElement={{
    tag: "custom-command",
    shadow: "open",
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<script lang="ts" context="module">
  export const Loading = CommandPrimitive.Loading;
</script>

<script lang="ts">
  import { Command as CommandPrimitive } from "cmdk-sv";
  import { addGlobalTailwindToSvelteWebComponent, mergeClass } from "../utils";

  type $$Props = CommandPrimitive.CommandProps;

  export let value: $$Props["value"] = undefined;

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<CommandPrimitive.Root
  class={mergeClass(
    "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
    className
  )}
  bind:value
  {...$$restProps}
>
  <slot />
</CommandPrimitive.Root>
