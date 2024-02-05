<script lang="ts">
    import type { HTMLFormAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { SubmitFunction } from '@sveltejs/kit'
    import type { Snippet } from 'svelte'
    import { enhance } from '$app/forms'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface FormProps extends HTMLFormAttributes, VariantProps<typeof formVariants> {
        children?: Snippet
        submitFunction?: SubmitFunction
    }

    let { children, submitFunction, class: className, ...props } = $props<FormProps>()

    let formVariants = cva('grid gap-4')
</script>

{#if children}
    <form {...props} use:enhance={submitFunction} class={cn(formVariants({ className }))}>{@render children()}</form>
{:else}
    <form {...props} class={cn(formVariants({ className }))}></form>
{/if}
