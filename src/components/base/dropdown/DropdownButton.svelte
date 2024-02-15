<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { DropdownState } from './DropdownState.svelte'
    import type { Snippet } from 'svelte'
    import { Button, ChevronDown, ChevronUp } from '$components'
    import { getContext } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownButtonProps extends HTMLButtonAttributes, VariantProps<typeof dropdownButtonVariants> {
        children: Snippet
        icon?: boolean
    }

    const dropdown = getContext<DropdownState>('dropdown')

    let { children, icon, class: className, ...props } = $props<DropdownButtonProps>()

    let dropdownButtonVariants = cva('py-2')
</script>

<Button
    {...props}
    variant="ghost"
    size="none"
    aria-haspopup="menu"
    aria-expanded={dropdown.open}
    onclick={dropdown.handleClick}
    onkeydown={dropdown.handleKeyDown}
    onblur={dropdown.handleOutsideClick}
    class={cn(dropdownButtonVariants({ className }))}
>
    {@render children()}
    {#if icon}
        {#if dropdown.open}
            <ChevronUp size="18" class="mt-0.5" />
        {:else}
            <ChevronDown size="18" class="mt-0.5" />
        {/if}
    {/if}
</Button>
