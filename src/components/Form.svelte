<script lang="ts">
    import type { HTMLFormAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface FormProps extends HTMLFormAttributes, VariantProps<typeof formVariants> {
        children: Snippet
    }

    let { children, class: className, ...props } = $props<FormProps>()

    let formVariants = cva('grid gap-4')
</script>

<form {...props} class={cn(formVariants({ className }))}>{@render children()}</form>
