<script lang="ts">
    import { Button, Link, ThemeToggle, User, Form, Dropdown, ChevronDown, ChevronUp, DropdownItem } from '$components'
    let { data } = $props()

    let open = $state(false)

    function toggleDropdown() {
        open = !open
    }
</script>

<nav class="fixed top-0 z-50 grid h-16 w-full place-items-center border-b border-border bg-navbar shadow-sm">
    <div class="flex w-screen-90 max-w-6xl items-center justify-between">
        <Link href="/" class="text-3xl font-extrabold uppercase italic dark:font-extrabold">sprintpilot</Link>
        <div class="relative flex items-center gap-8">
            <ThemeToggle />
            <Button variant="ghost" size="none" onclick={toggleDropdown} class="py-3">
                <User size="20" />
                {data.user.username}
                {#if open}
                    <ChevronUp size={18} />
                {:else}
                    <ChevronDown size={18} />
                {/if}
            </Button>
            <Dropdown {open}>
                <DropdownItem>
                    <Link href="/profile" variant="ghost" class="py-2 pl-3 pr-6">Your account</Link>
                </DropdownItem>
                <DropdownItem>
                    <Form method="post" action="/?/logout" class="block">
                        <Button variant="ghost" size="none" class="w-full justify-start py-2 pl-3 pr-6">Sign out</Button>
                    </Form>
                </DropdownItem>
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
