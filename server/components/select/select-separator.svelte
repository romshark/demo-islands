<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";
  import { addGlobalTailwindToSvelteWebComponent, mergeClass } from "../utils";

  type $$Props = SelectPrimitive.SeparatorProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Separator
  class={mergeClass("bg-muted -mx-1 my-1 h-px", className)}
  {...$$restProps}
/>
