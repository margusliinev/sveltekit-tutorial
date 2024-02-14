<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownItemProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownItemVariants> {
        children: Snippet
    }

    let dropdownItemVariants = cva('text-sm hover:bg-border last-of-type:rounded-b-md first-of-type:rounded-t-md transition-colors')

    let { children, class: className, ...props } = $props<DropdownItemProps>()

    function handleKeyDown(e: KeyboardEvent) {
        let element = e.currentTarget as HTMLDivElement
        let nextElement = element.nextElementSibling as HTMLDivElement
        let previousElement = element.previousElementSibling as HTMLDivElement

        if (e.key === 'ArrowUp' && previousElement?.role === 'menuitem') {
            previousElement.focus()
        } else if (e.key === 'ArrowDown' && nextElement?.role === 'menuitem') {
            nextElement.focus()
        } else if (e.key === 'Enter' && element.firstElementChild?.firstElementChild instanceof HTMLButtonElement) {
            element.firstElementChild.firstElementChild.click()
        }
    }
</script>

<div {...props} class={cn(dropdownItemVariants({ className }))} role="menuitem" tabindex={-1} onkeydown={handleKeyDown}>{@render children()}</div>
