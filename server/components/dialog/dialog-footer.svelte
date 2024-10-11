<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { mergeClass } from "../utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<div
  class={mergeClass(
    "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    className
  )}
  {...$$restProps}
>
  <slot />
</div>
