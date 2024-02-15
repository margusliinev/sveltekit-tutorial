<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { DropdownState } from './DropdownState.svelte'
    import type { Snippet } from 'svelte'
    import { createDropdownState } from './DropdownState.svelte'
    import { setContext } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> {
        children: Snippet
    }

    const dropdown = createDropdownState({ open: false })
    setContext<DropdownState>('dropdown', dropdown)

    let dropdownVariants = cva('relative')

    let { children, class: className, ...props } = $props<DropdownProps>()
</script>

<div {...props} class={cn(dropdownVariants({ className }))}>
    {@render children()}
</div>
