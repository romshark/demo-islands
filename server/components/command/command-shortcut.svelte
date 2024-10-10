<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { mergeClass } from "~/utils.js";

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<span
	class={mergeClass("text-muted-foreground ml-auto text-xs tracking-widest", className)}
	{...$$restProps}
>
	<slot />
</span>
