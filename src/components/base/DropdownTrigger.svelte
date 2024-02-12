<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownTriggerProps extends HTMLButtonAttributes, VariantProps<typeof dropdownTriggerVariants> {
        children?: Snippet
        toggleDropdown: () => void
        isOpen: boolean
    }

    let dropdownTriggerVariants = cva('flex items-center gap-2')

    let { children, toggleDropdown, isOpen, class: className, ...props } = $props<DropdownTriggerProps>()
</script>

{#if children}
    <button type="button" aria-haspopup="true" aria-expanded={isOpen} {...props} class={cn(dropdownTriggerVariants({ className }))} onclick={toggleDropdown}>
        {@render children()}
    </button>
{:else}
    <button type="button" aria-haspopup="true" aria-expanded={isOpen} {...props} class={cn(dropdownTriggerVariants({ className }))} onclick={toggleDropdown}></button>
{/if}
