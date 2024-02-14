<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import { getContext, type Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { fly } from 'svelte/transition'
    import { cn } from '$lib'

    interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownMenuVariants> {
        children: Snippet
    }

    const dropdown = getContext('dropdown')

    let dropdownMenuVariants = cva('absolute top-12 right-0 bg-background ring-1 ring-border ring-inset rounded-md z-50 animate-fade-in-down')

    let { children, open, class: className, ...props } = $props<DropdownMenuProps>()
</script>

{#if dropdown.open}
    <div {...props} class={cn(dropdownMenuVariants({ className }))} role="menu" transition:fly|local={{ duration: 100 }}>
        {@render children()}
    </div>
{/if}
