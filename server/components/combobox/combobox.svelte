<svelte:options
  customElement={{
    tag: "custom-combobox",
    shadow: "open",
    extend: addGlobalTailwindToSvelteWebComponent,
  }}
/>

<script lang="ts">
  import Check from "lucide-svelte/icons/check";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import { tick } from "svelte";
  import Command from "../command/command.svelte";
  import CommandInput from "../command/command-input.svelte";
  import CommandGroup from "../command/command-group.svelte";
  import CommandEmpty from "../command/command-empty.svelte";
  import CommandItem from "../command/command-item.svelte";
  import PopoverContent, {
    Popover,
    Trigger as PopoverTrigger,
  } from "../popover/popover-content.svelte";
  import Button from "../button/button.svelte";
  import { addGlobalTailwindToSvelteWebComponent, mergeClass } from "../utils";

  const frameworks = [
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  let open = false;
  let value = "";

  $: selectedValue =
    frameworks.find((f) => f.value === value)?.label ?? "Select a framework...";

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
</script>

<Popover bind:open let:ids>
  <PopoverTrigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      class="w-[200px] justify-between"
    >
      {selectedValue}
      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent class="w-[200px] p-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandEmpty>No framework found.</CommandEmpty>
      <CommandGroup>
        {#each frameworks as framework}
          <CommandItem
            value={framework.value}
            onSelect={(currentValue) => {
              value = currentValue;
              closeAndFocusTrigger(ids.trigger);
            }}
          >
            <Check
              class={mergeClass(
                "mr-2 h-4 w-4",
                value !== framework.value && "text-transparent"
              )}
            />
            {framework.label}
          </CommandItem>
        {/each}
      </CommandGroup>
    </Command>
  </PopoverContent>
</Popover>
