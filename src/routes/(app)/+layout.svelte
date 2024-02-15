<script lang="ts">
    import { Link, ThemeToggle, User, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from '$components'
    let { data } = $props()
</script>

<nav class="fixed top-0 z-50 grid h-16 w-full place-items-center border-b border-border bg-navbar shadow-sm">
    <div class="flex w-screen-90 max-w-6xl items-center justify-between">
        <Link href="/" class="text-3xl font-extrabold uppercase italic dark:font-extrabold">sprintpilot</Link>
        <div class="flex items-center gap-8">
            <ThemeToggle />
            <Dropdown>
                <DropdownTrigger><User size="20" />{data.user.username}</DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem><a href="settings">Settings</a></DropdownItem>
                    <DropdownItem><a href="profile">Your account</a></DropdownItem>
                    <DropdownItem><a href="logout">Sign out</a></DropdownItem>
                </DropdownMenu>
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
