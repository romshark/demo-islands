<script lang="ts">
	import { Command as CommandPrimitive } from "cmdk-sv";
	import { mergeClass } from "~/utils.js";

	type $$Props = CommandPrimitive.ListProps;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<CommandPrimitive.List
	class={mergeClass("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
	{...$$restProps}
>
	<slot />
</CommandPrimitive.List>
