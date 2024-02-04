<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface InputProps extends HTMLInputAttributes, VariantProps<typeof inputVariants> {}

    let { children, class: className, ...props } = $props<InputProps>()

    let inputVariants = cva(
        'h-10 flex w-full rounded-md bg-background px-3 py-2 text-sm ring-1 ring-inset ring-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:ring-destructive'
    )
</script>

<input {...props} class={cn(inputVariants({ className }))} />
