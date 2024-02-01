<script>
    /* eslint-disable */
    import { page } from '$app/stores';
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <div class="w-screen-90 text-center">
        <h1 class="text-7xl font-bold text-primary">{$page.status}</h1>
        {#if $page.status === 404}
            <h2 class="mt-4 text-4xl font-semibold tracking-tight xxs:text-5xl">Page Not Found</h2>
        {:else}
            <h2 class="mt-4 text-4xl font-semibold tracking-tight xxs:text-5xl">{$page.error?.message || 'Internal Server Error'}</h2>
        {/if}
        {#if $page.status === 404}
            <h3 class="text-foreground/90 mt-6 text-lg">Sorry, the page you are looking for could not be found.</h3>
        {:else}
            <h3 class="text-foreground/90 mt-6 text-lg">We encountered an error and cannot fulfill the request.</h3>
        {/if}
        <div class="mt-8 flex items-center justify-center gap-6 text-sm font-semibold">
            <a href="/" class="rounded-full bg-primary px-3.5 py-2.5 text-primary-foreground transition-colors hover:bg-primary-hover">Go Back Home</a>
            <a href="/login" class="group flex items-center gap-1">
                Login Page
                <span aria-hidden="true" class="font-normal transition-colors group-hover:text-primary">&rarrj;</span>
            </a>
        </div>
    </div>
</main>
