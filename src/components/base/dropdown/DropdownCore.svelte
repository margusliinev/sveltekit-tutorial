<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import { setContext, type Snippet } from 'svelte'
    import createDropdownState from './dropdown.svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface DropdownProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> {
        children: Snippet
    }

    const dropdown = createDropdownState({
        open: false
    })

    setContext<{ open: boolean }>('dropdown', dropdown)

    let dropdownVariants = cva('relative')

    let { children, class: className, ...props } = $props<DropdownProps>()
</script>

<div {...props} class={cn(dropdownVariants({ className }))}>
    {@render children()}
</div>
