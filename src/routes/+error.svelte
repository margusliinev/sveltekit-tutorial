<script>
    /* eslint-disable */
    import { page } from '$app/stores'
</script>

<main class="grid h-screen min-h-screen w-screen place-items-center">
    <section class="w-screen-90 text-center">
        <h1 class="text-7xl font-bold text-primary">{$page.status}</h1>
        <h2 class="mt-4 text-5xl font-semibold tracking-tight">{$page.error?.message || 'Internal Server Error'}</h2>
        <h3 class="text-foreground/80 mt-6 text-lg">We encountered an error and cannot fulfill the request.</h3>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm font-semibold">
            <a href="/" class="rounded-full bg-primary px-3.5 py-2.5 text-primary-foreground transition-colors hover:bg-primary-hover">Go Back Home</a>
            <a href="/login" class="group flex items-center gap-1">
                Login Page
                <span aria-hidden="true" class="transition-colors group-hover:text-primary">&rarr;</span>
            </a>
        </div>
    </section>
</main>
