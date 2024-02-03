<script>
    /* eslint-disable */
    import { page } from '$app/stores'
    import Link from '$components/Link.svelte'
</script>

<main class="grid h-screen min-h-screen w-screen place-items-center">
    <section class="w-screen-90 text-center">
        <h1 class="text-7xl font-bold text-primary">{$page.status}</h1>
        <h2 class="mt-4 text-5xl font-semibold tracking-tight">{$page.error?.message || 'Internal Server Error'}</h2>
        <h3 class="text-foreground/80 mt-6 text-lg">We encountered an error and cannot fulfill the request.</h3>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm font-semibold">
            <Link href="/" variant="primary" size="md" class="rounded-full">Go Back Home</Link>
            <Link href="/login">Login Page &rarr;</Link>
        </div>
    </section>
</main>
