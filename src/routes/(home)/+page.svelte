<script>
    import { ArrowRight, Link } from '$components'

    const currentDate = new Date(Date.now()).toUTCString().split(' ').slice(1, 3).join(' ')
</script>

<svelte:head>
    <title>Sprintpilot | Home</title>
</svelte:head>

<header class="my-32 w-screen-90 max-w-4xl text-center">
    <h3 class="mx-auto mb-6 w-fit rounded-full border border-border-strong px-7 py-2.5 text-sm">{currentDate}: We are now in open beta!</h3>
    <h1 class="grid text-3xl font-bold tracking-tight xxs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl">
        <span class="mb-2 text-primary">Build better software</span>
        <span>with sprintpilot</span>
    </h1>
    <h2 class="mx-auto mt-6 max-w-2xl md:text-lg">
        Sprintpilot is a project management tool of choice for developers around the world to improve real-time collaboration. With its built-in sprint planner and progress tracker, Sprintpilot helps
        you ship better software, faster.
    </h2>
    <div class="mt-6 flex items-center justify-center gap-6 md:mt-12">
        <Link href="/register" variant="primary" size="md" class="rounded-full">Get Started</Link>
        <Link href="/login" class="group">
            Want to demo?
            <ArrowRight size="14" strokeWidth="2" class="mt-0.5 group-hover:text-primary" />
        </Link>
    </div>
</header>
