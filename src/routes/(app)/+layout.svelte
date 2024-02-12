<script lang="ts">
    import { Link, ThemeToggle, User, Dropdown, ChevronDown, ChevronUp, DropdownItem } from '$components'
    let { data } = $props()

    let open = $state(false)
</script>

<nav class="fixed top-0 z-50 grid h-16 w-full place-items-center border-b border-border bg-navbar shadow-sm">
    <div class="flex w-screen-90 max-w-6xl items-center justify-between">
        <Link href="/" class="text-3xl font-extrabold uppercase italic dark:font-extrabold">sprintpilot</Link>
        <div class="relative flex items-center gap-8">
            <ThemeToggle />
            <Dropdown {open}>
                {#snippet trigger()}
                    <User size="20" />
                    {data.user.username}
                    {#if open}
                        <ChevronUp size={18} />
                    {:else}
                        <ChevronDown size={18} />
                    {/if}
                {/snippet}
                <DropdownItem type="link" href="/settings">Settings</DropdownItem>
                <DropdownItem type="link" href="/profile">Your account</DropdownItem>
                <DropdownItem type="button" method="post" action="/?/logout">Sign out</DropdownItem>
            </Dropdown>
        </div>
    </div>
</nav>
<main class="grid h-full min-h-screen w-full place-items-center">
    <div class="fixed inset-0 -z-10 transform-gpu overflow-hidden opacity-40 blur-3xl" aria-hidden="true">
        <div class="h-full w-full bg-gradient-to-tr from-background to-foreground opacity-10"></div>
    </div>
    <slot />
</main>
