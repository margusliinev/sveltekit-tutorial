<script>
    import Link from '$components/Link.svelte'

    const currentDate = new Date(Date.now()).toUTCString().split(' ').slice(1, 3).join(' ')
</script>

<header class="my-32 w-screen-90 max-w-4xl text-center">
    <h3 class="mx-auto mb-6 w-fit rounded-full border border-foreground px-7 py-2.5 text-sm font-medium">{currentDate}: We are now in open beta!</h3>
    <h1 class="grid text-3xl font-bold tracking-tight xxs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl">
        <span class="mb-2 text-primary">Build better software</span>
        <span>with sprintpilot</span>
    </h1>
    <h2 class="mx-auto mt-6 max-w-2xl md:text-lg">
        Sprintpilot is a project management tool of choice for developers around the world to improve real-time collaboration. With its built-in sprint planner and progress tracker, Sprintpilot helps
        you ship better software, faster.
    </h2>
    <div class="mt-6 flex items-center justify-center gap-6 text-sm md:mt-12">
        <Link href="/register" variant="primary" size="md" class="rounded-full">Get Started</Link>
        <Link href="/login">Want to demo? &rarr;</Link>
    </div>
</header>
