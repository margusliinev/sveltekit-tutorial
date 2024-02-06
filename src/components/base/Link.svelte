<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'

    interface LinkProps extends HTMLAnchorAttributes, VariantProps<typeof linkVariants> {
        children: Snippet
        href: string
        variant?: 'primary' | 'ghost'
        size?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }

    let { children, href, variant, size, class: className, ...props } = $props<LinkProps>()

    let linkVariants = cva(
        'inline-flex items-center justify-center gap-1 rounded-md text-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-offset-2 ring-offset-background transition-colors focus-visible:ring-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
        {
            variants: {
                variant: {
                    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary font-medium dark:font-semibold',
                    ghost: 'focus-visible:ring-foreground font-medium dark:font-normal'
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
                variant: 'ghost',
                size: 'none'
            }
        }
    )
</script>

<a {...props} {href} class={cn(linkVariants({ variant, size, className }))}>{@render children()}</a>
