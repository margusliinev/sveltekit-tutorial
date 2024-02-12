<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements'
    import type { VariantProps } from 'class-variance-authority'
    import type { SubmitFunction } from '@sveltejs/kit'
    import type { Snippet } from 'svelte'
    import { cva } from 'class-variance-authority'
    import { cn } from '$lib'
    import { enhance } from '$app/forms'

    interface DropdownItemProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownItemVariants> {
        children?: Snippet
        type: 'link' | 'button'
        href?: string
        method?: string
        action?: string
        submitFunction?: SubmitFunction
    }

    let dropdownItemVariants = cva('text-sm hover:bg-border last-of-type:rounded-b-md first-of-type:rounded-t-md transition-colors')

    let { children, type = 'link', href, method, action, submitFunction, class: className, ...props } = $props<DropdownItemProps>()
</script>

{#if children && type === 'link'}
    <div {...props} class={cn(dropdownItemVariants({ className }))} role="menuitem" tabindex={-1}>
        <a {href} class="block w-full py-2 pl-3 pr-6">{@render children()}</a>
    </div>
{:else if children && type === 'button'}
    <div {...props} class={cn(dropdownItemVariants({ className }))} role="menuitem" tabindex={-1}>
        <form {method} {action} use:enhance={submitFunction}>
            <button type="submit" class="w-full py-2 pl-3 pr-6 text-left">{@render children()}</button>
        </form>
    </div>
{/if}
