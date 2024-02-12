<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownContentProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownContentVariants> {
        children: Snippet
        isOpen: boolean
    }

    let dropdownContentVariants = cva('absolute top-10 right-0 bg-background ring-1 ring-border ring-inset rounded-md z-50')

    let { children, isOpen, class: className, ...props } = $props<DropdownContentProps>()
</script>

{#if isOpen}
    <div {...props} class={cn(dropdownContentVariants({ className }))} role="menu">
        {@render children()}
    </div>
{/if}
