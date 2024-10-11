<svelte:options
  customElement={{
    tag: "custom-button",
    shadow: "open",
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<!-- https://svelte.dev/docs/svelte-components#script-context-module -->
<script lang="ts" context="module">
  import { type VariantProps, tv } from "tailwind-variants";

  const buttonVariants = tv({
    base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  type Variant = VariantProps<typeof buttonVariants>["variant"];
  type Size = VariantProps<typeof buttonVariants>["size"];

  type Props = ButtonPrimitive.Props & {
    variant?: Variant;
    size?: Size;
  };

  type Events = ButtonPrimitive.Events;

  export {
    type Props,
    type Events,
    //
    type Props as ButtonProps,
    type Events as ButtonEvents,
    buttonVariants,
  };
</script>

<script lang="ts">
  import { Button as ButtonPrimitive } from "bits-ui";
  import { addGlobalTailwindToSvelteWebComponent, mergeClass } from "../utils";

  type $$Props = Props;
  type $$Events = Events;

  let className: $$Props["class"] = undefined;
  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
  export let builders: $$Props["builders"] = [];
  export { className as class };
</script>

<ButtonPrimitive.Root
  {builders}
  class={mergeClass(buttonVariants({ variant, size, className }))}
  type="button"
  {...$$restProps}
  on:click={() => alert("FUUU")}
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
