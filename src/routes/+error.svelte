<script>
    import { page } from '$app/stores';
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <div class="w-screen-90 text-center">
        <p class="text-7xl font-bold text-primary">{$page.status}</p>
        <h1 class="mt-4 text-4xl font-semibold tracking-tight xxs:text-5xl">
            {#if $page.status === 404}
                Page Not Found
            {:else}
                {$page.error?.message || 'Internal Server Error'}
            {/if}
        </h1>
        <p class="text-foreground/90 mt-6 text-lg">
            {#if $page.status === 404}
                Sorry, the page you are looking for could not be found.
            {:else}
                We encountered an error and cannot fulfill the request.
            {/if}
        </p>
        <div class="mt-8 flex items-center justify-center gap-6 text-sm font-semibold">
            <a href="/" class="rounded-full bg-primary px-3.5 py-2.5 text-primary-foreground transition-colors hover:bg-primary-hover">Go Back Home</a>
            <a href="/login" class="group flex items-center gap-1">
                Login Page
                <span aria-hidden="true" class="font-normal transition-colors group-hover:text-primary">&rarr;</span>
            </a>
        </div>
    </div>
</main>
