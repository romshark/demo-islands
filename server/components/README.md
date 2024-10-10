Components contains all interactive client side components that are compiled to
[custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
which can later be used in the templ templates.

## Adding Components

When other components provided by [shadcn-svelte](https://www.shadcn-svelte.com/) are required simply copy paste the
component source from
[github.com/huntabyte/shadcn-svelte/docs/src/lib/registry](https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default)
and fix any discrepancies:
* rename `cs` to `mergeClass` which we changed to make the code more readable
* adjust path from `$lib` to just `~`
