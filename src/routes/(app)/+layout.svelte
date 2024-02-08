<script lang="ts">
    /* eslint-disable */
    import { Link, ThemeToggle } from '$components'

    let { data } = $props()
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <div class="fixed inset-0 -z-10 transform-gpu overflow-hidden opacity-40 blur-3xl" aria-hidden="true">
        <div class="h-full w-full bg-gradient-to-tr from-background to-foreground opacity-10"></div>
    </div>
    <nav class="fixed top-0 z-50 grid h-32 w-full place-items-center border-b border-border bg-navbar">
        <div class="max-w-8xl flex w-screen-90 items-center justify-between">
            <Link href="/" class="-ml-2 text-2xl font-extrabold uppercase italic dark:font-extrabold">sprintpilot</Link>
            <div class="flex items-center gap-2">
                <span>{data.user.username}</span>
                <ThemeToggle />
            </div>
        </div>
        <div class="max-w-8xl flex w-screen-90 justify-between self-end px-10">
            <ul class="-mb-px flex gap-16">
                <li class={data?.route === '/dashboard' ? 'w-28 border-b border-primary text-center' : 'w-28 text-center'}>
                    <Link href="/dashboard" class="pb-3 text-lg font-semibold tracking-tight">Dashboard</Link>
                </li>
                <li class={data?.route === '/projects' ? 'w-28 border-b border-primary text-center' : 'w-28 text-center'}>
                    <Link href="/projects" class="pb-3 text-lg font-semibold tracking-tight">Projects</Link>
                </li>
                <li class={data?.route === '/analytics' ? 'w-28 border-b border-primary text-center' : 'w-28 text-center'}>
                    <Link href="/analytics" class="pb-3 text-lg font-semibold tracking-tight">Analytics</Link>
                </li>
            </ul>
        </div>
    </nav>
    <slot />
</main>
