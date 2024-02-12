<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownItemProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownItemVariants> {
        children?: Snippet
    }

    let dropdownItemVariants = cva('')

    let { children, class: className, ...props } = $props<DropdownItemProps>()
</script>

{#if children}
    <div {...props} class={cn(dropdownItemVariants({ className }))}>
        {@render children()}
    </div>
{:else}
    <div {...props} class={cn(dropdownItemVariants({ className }))}></div>
{/if}
