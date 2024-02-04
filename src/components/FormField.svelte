<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface FormFieldProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof formFieldVariants> {
        children?: Snippet
    }

    let { children, class: className, ...props } = $props<FormFieldProps>()

    let formFieldVariants = cva('space-y-1')
</script>

{#if children}
    <div {...props} class={cn(formFieldVariants({ className }))}>{@render children()}</div>
{:else}
    <div {...props} class={cn(formFieldVariants({ className }))}></div>
{/if}
