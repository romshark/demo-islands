<script lang="ts">
	import { Command as CommandPrimitive } from "cmdk-sv";
	import { mergeClass } from "~/utils.js";

	type $$Props = CommandPrimitive.EmptyProps;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<CommandPrimitive.Empty class={mergeClass("py-6 text-center text-sm", className)} {...$$restProps}>
	<slot />
</CommandPrimitive.Empty>
