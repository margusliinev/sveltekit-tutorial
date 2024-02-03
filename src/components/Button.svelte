<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface ButtonProps extends HTMLButtonAttributes, VariantProps<typeof buttonVariants> {
        children: Snippet
        variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'ghost'
        size?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }

    let { children, variant, size, class: className, ...props } = $props<ButtonProps>()

    let buttonVariants = cva(
        'inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-offset-2 ring-offset-background focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none',
        {
            variants: {
                variant: {
                    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary',
                    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-secondary',
                    success: 'bg-success text-success-foreground hover:bg-success-hover focus-visible:ring-success',
                    warning: 'bg-warning text-warning-foreground hover:bg-warning-hover focus-visible:ring-warning',
                    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive-hover focus-visible:ring-destructive',
                    ghost: 'focus-visible:ring-foreground'
                },
                size: {
                    none: 'px-0 py-0',
                    xs: 'px-3 py-1.5',
                    sm: 'px-4 py-2',
                    md: 'px-6 py-3',
                    lg: 'px-8 py-4',
                    xl: 'px-10 py-5'
                }
            },
            defaultVariants: {
                variant: 'primary',
                size: 'md'
            }
        }
    )
</script>

<button {...props} class={cn(buttonVariants({ variant, size, className }))}>{@render children()}</button>
