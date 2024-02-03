<script lang="ts">
    import type { SubmitFunction } from '@sveltejs/kit'
    /* eslint-disable */
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'
    import Link from '$components/Link.svelte'

    let isMobileMenuOpen = $state(false)

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen
    }

    const submitUpdateTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get('theme')

        if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme)
        }
    }
</script>

<main class="grid h-screen min-h-screen w-screen place-items-center">
    <nav class="fixed top-0 z-50 grid h-16 w-full place-items-center bg-background">
        <div class="flex w-screen-90 max-w-6xl items-center justify-between">
            <Link href="/" class="text-3xl font-extrabold uppercase italic" onclick={toggleMobileMenu}>sprintpilot</Link>
            <form method="post" use:enhance={submitUpdateTheme} class="grid">
                <button formaction="/?/setTheme&theme=dark&redirectTo={$page.url}" class="absolute scale-100 font-semibold transition-all duration-300 dark:scale-0">
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
                <button formaction="/?/setTheme&theme=light&redirectTo={$page.url}" class="scale-0 font-semibold transition-all duration-300 dark:scale-100">
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
