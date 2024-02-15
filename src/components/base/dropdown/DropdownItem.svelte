<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { DropdownState } from './DropdownState.svelte'
    import type { Snippet } from 'svelte'
    import { getContext } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownItemProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownItemVariants> {
        children: Snippet
    }

    const dropdown = getContext<DropdownState>('dropdown')

    let dropdownItemVariants = cva('text-sm hover:bg-border last-of-type:rounded-b-md first-of-type:rounded-t-md transition-colors')

    let { children, class: className, ...props } = $props<DropdownItemProps>()
</script>

<div {...props} class={cn(dropdownItemVariants({ className }))} role="menuitem" tabindex={-1} onkeydown={dropdown.handleKeyDown}>{@render children()}</div>
