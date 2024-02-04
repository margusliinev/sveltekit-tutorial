<script lang="ts">
    import type { HTMLLabelAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface LabelProps extends HTMLLabelAttributes, VariantProps<typeof labelVariants> {
        children: Snippet
        for: string
    }

    let { children, for: htmlFor, class: className, ...props } = $props<LabelProps>()

    let labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')
</script>

<label {...props} for={htmlFor} class={cn(labelVariants({ className }))}>{@render children()}</label>
