<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { fly } from 'svelte/transition'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'
    import { Button } from '$components'

    interface DropdownProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> {
        children: Snippet
        trigger: Snippet
        open: boolean
    }

    let dropdownVariants = cva('absolute top-12 right-0 bg-background ring-1 ring-border ring-inset rounded-md z-50 animate-fade-in-down')

    let { children, trigger, open, class: className, ...props } = $props<DropdownProps>()

    function toggleDropdown() {
        open = !open
    }

    function escapeDropdown(event: KeyboardEvent) {
        if (open && event.key === 'Escape') open = false
    }

    function closeDropdown(e: FocusEvent) {
        if (open && (e.relatedTarget as HTMLElement)?.closest('[role="menu"]')) return
        open = false
    }
</script>

<Button variant="ghost" size="none" class="py-3" aria-haspopup="menu" aria-expanded={open} onclick={toggleDropdown} onkeyup={escapeDropdown} onblur={closeDropdown}>
    {@render trigger()}
</Button>
{#if open}
    <div {...props} class={cn(dropdownVariants({ className }))} role="menu" transition:fly|local={{ duration: 100 }} onfocusout={closeDropdown}>
        {@render children()}
    </div>
{/if}
