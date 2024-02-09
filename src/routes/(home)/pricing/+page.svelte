<script>
    import { Check, Link } from '$components'
</script>

<svelte:head>
    <title>Sprintpilot | Pricing</title>
</svelte:head>

<section class="my-20">
    <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
            <h1 class="mb-4 text-5xl font-bold tracking-tight">Pricing</h1>
            <h2 class="mb-4 text-2xl font-semibold tracking-tight xxs:text-3xl">Designed for business teams like yours</h2>
            <p class="mb-5 dark:font-light sm:text-xl">
                We have you covered, no matter the size of your team. Unsure which plan is right for you? Start with the plan that suits your needs today, and upgrade later.
            </p>
        </div>
        <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
            <div class="mx-auto flex max-w-lg flex-col rounded-lg border border-border bg-card p-6 text-center shadow-lg xl:p-8">
                <h3 class="mb-4 text-2xl font-semibold">Hobby</h3>
                <p class="dark:font-light sm:text-lg">Best option for personal use & and small projects.</p>
                <div class="my-8 flex items-baseline justify-center">
                    <span class="mr-2 text-5xl font-semibold">$0</span>
                    <span>/month</span>
                </div>
                <ul class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>Community support</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>Up to 10 project boards</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Team size: <span class="font-semibold">1 developer</span>
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Premium support: <span class="font-semibold">6 months</span>
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Free updates: <span class="font-semibold">6 months</span>
                        </span>
                    </li>
                </ul>
                <Link href="/register" size="sm" variant="primary" class="rounded-full bg-zinc-500 py-2.5 hover:bg-zinc-600 dark:bg-zinc-300 dark:hover:bg-zinc-200">Sign up for free</Link>
            </div>
            <div class="mx-auto flex max-w-lg flex-col rounded-lg border border-border bg-card p-6 text-center shadow-lg xl:p-8">
                <h3 class="mb-4 text-2xl font-semibold">Startup</h3>
                <p class="dark:font-light sm:text-lg">Relevant for small agile teams who need extended support</p>
                <div class="my-8 flex items-baseline justify-center">
                    <span class="mr-2 text-5xl font-semibold">$99</span>
                    <span>/month</span>
                </div>
                <ul class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>Business hour support</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>Unlimited project boards</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Team size: <span class="font-semibold">12 developers</span>
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Premium support: <span class="font-semibold">24 months</span>
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Free updates: <span class="font-semibold">24 months</span>
                        </span>
                    </li>
                </ul>
                <Link href="/register" size="sm" variant="primary" class="rounded-full py-2.5">Get started</Link>
            </div>
            <div class="mx-auto flex max-w-lg flex-col rounded-lg border border-border bg-card p-6 text-center shadow-lg xl:p-8">
                <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
                <p class="dark:font-light sm:text-lg">Best for large teams with high usage and need for premium support.</p>
                <div class="my-8 flex items-baseline justify-center">
                    <span class="mr-2 text-5xl font-semibold">$799</span>
                    <span>/month</span>
                </div>
                <ul class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>24/7 Priority support</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>Unlimited project boards</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Team size: <span class="font-semibold">100+ developers</span>
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Premium support: <span class="font-semibold">36 months</span>
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Check class="text-success" />
                        <span>
                            Free updates: <span class="font-semibold">36 months</span>
                        </span>
                    </li>
                </ul>
                <Link href="/register" size="sm" variant="primary" class="rounded-full bg-yellow-500 py-2.5 hover:bg-yellow-600 dark:bg-yellow-300 dark:hover:bg-yellow-200">Available Soon</Link>
            </div>
        </div>
    </div>
</section>
