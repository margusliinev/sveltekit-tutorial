<script lang="ts">
    import { Button, Link, ThemeToggle, User, Form, Dropdown, DropdownTrigger, DropdownContent, ChevronDown, ChevronUp, DropdownItem } from '$components'
    let { data } = $props()

    let isOpen = $state(false)

    function toggleDropdown() {
        isOpen = !isOpen
    }
</script>

<nav class="fixed top-0 z-50 grid h-16 w-full place-items-center border-b border-border bg-navbar shadow-sm">
    <div class="flex w-screen-90 max-w-6xl items-center justify-between">
        <Link href="/" class="text-3xl font-extrabold uppercase italic dark:font-extrabold">sprintpilot</Link>
        <div class="flex items-center gap-8">
            <ThemeToggle />
            <Dropdown>
                <DropdownTrigger {isOpen} {toggleDropdown}>
                    <User size="20" />
                    {data.user.username}
                    {#if isOpen}
                        <ChevronUp size={18} class="mt-1" />
                    {:else}
                        <ChevronDown size={18} class="mt-1" />
                    {/if}
                </DropdownTrigger>
                <DropdownContent {isOpen}>
                    <DropdownItem>
                        <Link href="/profile" variant="ghost">Your account</Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Form method="post" action="/?/logout">
                            <Button variant="ghost" size="none">Logout</Button>
                        </Form>
                    </DropdownItem>
                </DropdownContent>
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
