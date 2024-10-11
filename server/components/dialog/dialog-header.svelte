<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { mergeClass } from "../utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<div
  class={mergeClass(
    "flex flex-col space-y-1.5 text-center sm:text-left",
    className
  )}
  {...$$restProps}
>
  <slot />
</div>
