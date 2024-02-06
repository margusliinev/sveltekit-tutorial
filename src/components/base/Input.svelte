<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface InputProps extends HTMLInputAttributes, VariantProps<typeof inputVariants> {
        id: string
        name: string
    }

    let { id, name, class: className, ...props } = $props<InputProps>()

    let inputVariants = cva(
        'h-10 flex w-full rounded-md bg-input px-3 py-2 text-sm ring-1 ring-inset ring-border ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:ring-input-invalid'
    )
</script>

<input {...props} {id} {name} class={cn(inputVariants({ className }))} />
