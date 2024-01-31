<script lang="ts">
    import type { SubmitFunction } from '@sveltejs/kit';
    import { enhance } from '$app/forms';

    let isMobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    const submitUpdateTheme: SubmitFunction = ({ formData }) => {
        const theme = String(formData.get('theme'));

        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    };
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <div class="fixed inset-0 -z-10 transform-gpu overflow-hidden opacity-10 blur-3xl" aria-hidden="true">
        <div class="h-full w-full bg-gradient-to-tr from-background to-foreground opacity-10"></div>
    </div>
    <nav class="border-border fixed top-0 z-50 grid h-16 w-full place-items-center border-b shadow">
        <div class="flex w-screen-90 max-w-6xl items-center justify-between">
            <a href="/" class="flex items-center gap-3 transition-none duration-0" onclick={toggleMobileMenu}>
                <span class="text-2xl font-extrabold uppercase italic transition-none duration-0 sm:text-3xl">sprintpilot</span>
            </a>
            <ul class="hidden items-center text-sm font-medium sm:flex">
                <li>
                    <form method="post" action="/?/setTheme" use:enhance={submitUpdateTheme} class="grid px-4">
                        <button name="theme" value="light" class="absolute h-[1rem] w-[1rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-sun"
                                ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path
                                    d="M20 12h2"
                                /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg
                            >
                        </button>
                        <button name="theme" value="dark" class="h-[1rem] w-[1rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
                            >
                        </button>
                    </form>
                </li>
                <li>
                    <a href="/pricing" class="px-6 py-2 hover:text-primary-hover"> Pricing </a>
                </li>
                <li>
                    <a href="/login" class="py-2 pl-6 pr-10 hover:text-primary-hover"> Login </a>
                </li>
                <li class="font-semibold">
                    <a href="/register" class="flex items-center gap-1 rounded-full bg-primary px-4 py-2.5 text-primary-foreground hover:bg-primary-hover">
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
