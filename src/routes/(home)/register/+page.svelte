<script lang="ts">
    import { Button, Link, FormField, Form, Logo } from '$components'
    let { form } = $props()

    let usernameError = $state<string | undefined>(undefined)
    let emailError = $state<string | undefined>(undefined)
    let passwordError = $state<string | undefined>(undefined)

    $effect(() => {
        usernameError = form?.username
        emailError = form?.email
        passwordError = form?.password
    })
</script>

<svelte:head>
    <title>Sprintpilot | Register</title>
</svelte:head>

<div class="my-20 w-screen-90 max-w-md rounded-lg border border-border bg-card px-6 py-8 shadow">
    <div class="grid place-items-center text-center">
        <Logo />
        <h1 class="mt-2 text-2xl font-semibold">Create an account</h1>
        <h2 class="mb-8 text-sm dark:font-light">And lets get you started with a free plan</h2>
    </div>
    <Form method="POST">
        <FormField type="text" label="username" error={usernameError} />
        <FormField type="email" label="email" error={emailError} />
        <FormField type="password" label="password" error={passwordError} />
        <Button size="sm" class="mt-2">Register</Button>
    </Form>
    <div class="mt-4 flex items-center justify-center gap-2">
        <span class="text-sm">Already have an account?</span>
        <Link href="/login" class="text-primary hover:text-primary-hover">Login</Link>
    </div>
</div>
