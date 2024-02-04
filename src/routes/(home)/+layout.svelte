<script lang="ts">
    /* eslint-disable */
    import { Button, Link } from '$components/ui'
    import { ThemeToggle } from '$components'

    let isMobileMenuOpen = $state(false)

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen
    }
</script>

<main class="grid h-screen min-h-screen w-screen place-items-center">
    <div class="fixed inset-0 -z-10 transform-gpu overflow-hidden opacity-40 blur-3xl" aria-hidden="true">
        <div class="h-full w-full bg-gradient-to-tr from-background to-foreground opacity-10"></div>
    </div>
    <nav class="fixed top-0 z-50 grid h-16 w-full place-items-center border-b border-border bg-navbar shadow">
        <div class="flex w-screen-90 max-w-6xl items-center justify-between">
            <Link href="/" class="text-3xl font-extrabold uppercase italic">sprintpilot</Link>
            <ul class="hidden items-center gap-8 sm:flex">
                <li>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
            <ul class={isMobileMenuOpen ? 'fixed inset-0 z-50 mt-16 bg-navbar p-8 sm:hidden' : 'hidden'}>
                <li class="flex w-full border-b border-border-strong py-4">
                    <ThemeToggle />
                </li>
                <li class="block w-full border-b border-border-strong py-5">
                    <Link href="/register" onclick={toggleMobileMenu}>Register</Link>
                </li>
                <li class="block w-full border-b border-border-strong py-5">
                    <Link href="/login" onclick={toggleMobileMenu}>Login</Link>
                </li>
                <li class="block w-full border-b border-border-strong py-5">
                    <Link href="/pricing" onclick={toggleMobileMenu}>Pricing</Link>
                </li>
            </ul>
            <Button size="none" variant="ghost" onclick={toggleMobileMenu} class="sm:hidden" aria-label="toggle menu">
                {#if isMobileMenuOpen}
                    <svg class="h-6 w-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                {:else}
                    <svg class="h-6 w-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                {/if}
            </Button>
        </div>
    </nav>
    <slot />
</main>
