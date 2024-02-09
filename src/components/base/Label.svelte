<script lang="ts">
    import type { HTMLLabelAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface LabelProps extends HTMLLabelAttributes, VariantProps<typeof labelVariants> {
        children?: Snippet
        for: string
    }

    let { children, for: htmlFor, class: className, ...props } = $props<LabelProps>()

    let labelVariants = cva('text-sm leading-none font-medium capitalize dark:font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70')
</script>

{#if children}
    <label {...props} for={htmlFor} class={cn(labelVariants({ className }))}>{@render children()}</label>
{:else}
    <label {...props} for={htmlFor} class={cn(labelVariants({ className }))}></label>
{/if}
