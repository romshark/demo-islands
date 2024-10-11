<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import { mergeClass } from "../utils";

  type $$Props = DialogPrimitive.DescriptionProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<DialogPrimitive.Description
  class={mergeClass("text-muted-foreground text-sm", className)}
  {...$$restProps}
>
  <slot />
</DialogPrimitive.Description>
