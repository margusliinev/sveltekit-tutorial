<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonVariants> {
        children: Snippet
        open: boolean
    }

    let buttonVariants = cva('grid')

    let { children, open = false, class: className, ...props } = $props<DropdownProps>()

    function openDropdown() {
        open = !open
    }
</script>

<div {...props} class={cn(buttonVariants({ className }))} onclick={openDropdown} role="menu" tabindex="0">
    {#if open}
        {@render children()}
    {/if}
</div>
