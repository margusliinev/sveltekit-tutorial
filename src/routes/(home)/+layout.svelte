<script>
    let isMobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <nav class="fixed top-0 z-50 grid h-16 w-full place-items-center border-b-2 border-zinc-800 bg-background shadow-sm">
        <div class="flex w-screen-90 max-w-6xl items-center justify-between">
            <a href="/" class="flex items-center gap-3" onclick={toggleMobileMenu}>
                <span class="text-2xl font-semibold sm:text-3xl">SprintPilot</span>
            </a>
            <ul class="hidden items-center text-sm font-medium sm:flex">
                <li>
                    <a href="/pricing" class="px-6 py-2 transition-colors hover:text-primary-hover"> Pricing </a>
                </li>
                <li>
                    <a href="/login" class="py-2 pl-6 pr-10 transition-colors hover:text-primary-hover"> Login </a>
                </li>
                <li class="font-semibold">
                    <a href="/register" class="flex items-center gap-1 rounded-full bg-primary px-4 py-2.5 text-primary-foreground transition-colors hover:bg-primary-hover">
                        Register
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </li>
            </ul>
            <button onclick={toggleMobileMenu} class="block sm:hidden" aria-label="toggle menu">
                {#if isMobileMenuOpen}
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                {:else}
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                {/if}
            </button>
            <div class={isMobileMenuOpen ? 'fixed inset-0 z-50 mt-16 bg-background p-8 sm:hidden' : 'hidden'}>
                <ul class="text-md font-medium">
                    <li>
                        <a href="/register" class="border-ring flex items-center gap-2 border-b py-6 hover:text-primary-hover" onclick={toggleMobileMenu}>
                            Register
                            <span aria-hidden="true" class="font-medium"> &rarr; </span>
                        </a>
                    </li>
                    <li>
                        <a href="/login" class="border-ring block border-b py-6 hover:text-primary-hover" onclick={toggleMobileMenu}> login </a>
                    </li>
                    <li>
                        <a href="/pricing" class="border-ring block border-b py-6 hover:text-primary-hover" onclick={toggleMobileMenu}> Pricing </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <slot />
</main>
