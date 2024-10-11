<svelte:options
  customElement={{
    tag: "custom-dialog-content",
    shadow: "open",
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<script lang="ts" context="module">
  export const Dialog = DialogPrimitive.Root;
  export const Trigger = DialogPrimitive.Trigger;
  export const Close = DialogPrimitive.Close;
</script>

<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import X from "lucide-svelte/icons/x";
  import {
    addGlobalTailwindToSvelteWebComponent,
    mergeClass,
    flyAndScale,
  } from "../utils";
  import DialogOverlay from "./dialog-overlay.svelte";
  import DialogPortal from "./dialog-portal.svelte";

  type $$Props = DialogPrimitive.ContentProps;

  let className: $$Props["class"] = undefined;
  export let transition: $$Props["transition"] = flyAndScale;
  export let transitionConfig: $$Props["transitionConfig"] = {
    duration: 200,
  };
  export { className as class };
</script>

<DialogPortal>
  <DialogOverlay />
  <DialogPrimitive.Content
    {transition}
    {transitionConfig}
    class={mergeClass(
      "bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full",
      className
    )}
    {...$$restProps}
  >
    <slot />
    <DialogPrimitive.Close
      class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
    >
      <X class="h-4 w-4" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</DialogPortal>
