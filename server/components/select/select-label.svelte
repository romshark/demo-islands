<script lang="ts">
  import { Select as SelectPrimitive } from "bits-ui";
  import { mergeClass } from "../utils";

  type $$Props = SelectPrimitive.LabelProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Label
  class={mergeClass("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
  {...$$restProps}
>
  <slot />
</SelectPrimitive.Label>
