<script lang="ts">
    import '../styles/fonts.css';
    import '../styles/index.css';
    import type { SubmitFunction } from '@sveltejs/kit';
    import { enhance } from '$app/forms';

    let isMobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    const submitUpdateTheme: SubmitFunction = ({ formData }) => {
        const theme = String(formData.get('theme'));

        if (theme) document.documentElement.setAttribute('data-theme', theme);
    };
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <nav class="ligh fixed top-0 z-50 grid h-16 w-full place-items-center border-b border-border bg-background shadow">
        <div class="flex w-screen-90 max-w-6xl items-center justify-between">
            <a href="/" class="flex items-center gap-3" onclick={toggleMobileMenu}>
                <span class="text-3xl font-extrabold uppercase italic">sprintpilot</span>
            </a>
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
        </div>
    </nav>
    <slot />
</main>
