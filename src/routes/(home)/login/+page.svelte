<script lang="ts">
    import { Button, Link, FormField, Form, Logo } from '$components'
    let { form } = $props()

    let emailError = $state<string | undefined>(undefined)
    let passwordError = $state<string | undefined>(undefined)

    $effect(() => {
        emailError = form?.email
        passwordError = form?.password
    })
</script>

<svelte:head>
    <title>Sprintpilot | Login</title>
</svelte:head>

<div class="my-20 w-screen-90 max-w-md rounded-lg border border-border bg-card px-6 py-8 shadow">
    <div class="grid place-items-center text-center">
        <Logo />
        <h1 class="mt-2 text-2xl font-semibold">Welcome back!</h1>
        <h2 class="mb-8 text-sm dark:font-light">Please enter your credentials to log in!</h2>
    </div>
    <Form method="POST">
        <FormField type="email" label="email" error={emailError} required />
        <FormField type="password" label="password" error={passwordError} required />
        <Button size="sm" class="mt-2">Login</Button>
    </Form>
    <div class="mt-4 flex items-center justify-center gap-2">
        <span class="text-sm">Don't have an account?</span>
        <Link href="/register" class="text-primary hover:text-primary-hover">Register</Link>
    </div>
</div>
