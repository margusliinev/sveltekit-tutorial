<script lang="ts">
    import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { Label, Input, InputError } from '$components'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface FormFieldProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof formFieldVariants> {
        children?: Snippet
        label: string
        type: HTMLInputAttributes['type']
        error: string | undefined
    }

    let { children, label, type, error, class: className, ...props } = $props<FormFieldProps>()

    let formFieldVariants = cva('space-y-1')
</script>

<div {...props} class={cn(formFieldVariants({ className }))}>
    <Label for={label}>{label}</Label>
    <Input {type} id={label} name={label} aria-describedby={`${label}-error`} aria-invalid={error ? true : undefined} oninput={() => (error = '')} />
    <InputError id={`${label}-error`}>{error}</InputError>
</div>
