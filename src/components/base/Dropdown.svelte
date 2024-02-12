<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { fly } from 'svelte/transition'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> {
        children: Snippet
        open: boolean
    }

    let dropdownVariants = cva('absolute top-12 right-0 bg-background ring-1 ring-border ring-inset rounded-md z-50 animate-fade-in-down')

    let { children, open, class: className, ...props } = $props<DropdownProps>()
</script>

{#if open}
    <div {...props} class={cn(dropdownVariants({ className }))} role="menu" transition:fly|local={{ duration: 100 }}>
        {@render children()}
    </div>
{/if}
