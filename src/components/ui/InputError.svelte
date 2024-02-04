<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface InputErrorProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof inputErrorVariants> {
        children?: Snippet
        id: string
    }

    let { children, id, class: className, ...props } = $props<InputErrorProps>()

    let inputErrorVariants = cva('block text-sm text-input-invalid')
</script>

{#if children}
    <span {...props} {id} class={cn(inputErrorVariants({ className }))}>{@render children()}</span>
{:else}
    <span {...props} {id} class={cn(inputErrorVariants({ className }))}></span>
{/if}
