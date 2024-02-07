<script lang="ts">
    import { Button, Input, InputError, Label, Link, FormField, Form } from '$components'

    let { form } = $props()
    let isEmailError = $state<undefined | true>(undefined)
    let isPasswordError = $state<undefined | true>(undefined)

    $effect(() => {
        isEmailError = undefined
        isPasswordError = undefined
        if (form?.email) {
            isEmailError = true
        }
        if (form?.password) {
            isPasswordError = true
        }
    })
</script>

<svelte:head>
    <title>Sprintpilot | Login</title>
</svelte:head>

<div class="my-20 w-screen-90 max-w-md rounded-lg border border-border bg-card px-6 py-8 shadow">
    <div class="grid place-items-center text-center">
        <img src="logo-light.png" alt="light logo" width="50" height="50" class="hidden aspect-auto dark:block" />
        <img src="logo-dark.png" alt="dark logo" width="50" height="50" class="visible aspect-auto dark:hidden" />
        <h1 class="mt-2 text-2xl font-semibold">Welcome back!</h1>
        <h2 class="mb-8 text-sm dark:font-light">Please enter your credentials to log in!</h2>
    </div>
    <Form method="POST">
        <FormField>
            <Label for="email">Email</Label>
            <Input type="email" id="email" name="email" aria-describedby="email-error" aria-invalid={isEmailError} required />
            <InputError id="email-error">
                {#if form?.email}
                    {form.email}
                {/if}
            </InputError>
        </FormField>
        <FormField>
            <Label for="password">Password</Label>
            <Input type="password" id="password" name="password" aria-describedby="password-error" aria-invalid={isPasswordError} required />
            <InputError id="password-error">
                {#if form?.password}
                    {form.password}
                {/if}
            </InputError>
        </FormField>
        <Button size="sm" class="mt-2">Login</Button>
    </Form>
    <div class="mt-4 flex items-center justify-center gap-2">
        <span class="text-sm">Don't have an account?</span>
        <Link href="/register" class="text-primary hover:text-primary-hover">Register</Link>
    </div>
</div>
