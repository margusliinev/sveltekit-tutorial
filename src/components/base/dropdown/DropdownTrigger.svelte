<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { DropdownState } from './DropdownState.svelte'
    import type { Snippet } from 'svelte'
    import { getContext } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownTriggerProps extends HTMLButtonAttributes, VariantProps<typeof dropdownTriggerVariants> {
        children: Snippet
    }

    const dropdown = getContext<DropdownState>('dropdown')

    let { children, class: className, ...props } = $props<DropdownTriggerProps>()

    let dropdownTriggerVariants = cva(
        'inline-flex items-center justify-center gap-2 rounded-md text-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-offset-2 ring-offset-background focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none'
    )
</script>

<button
    aria-expanded={dropdown.open}
    aria-haspopup="menu"
    {...props}
    class={cn(dropdownTriggerVariants({ className }))}
    onclick={dropdown.handleClick}
    onkeydown={dropdown.handleKeyDown}
    onblur={dropdown.handleOutsideClick}
>
    {@render children()}
</button>
