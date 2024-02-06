<script lang="ts">
    import { Button, Input, InputError, Label, Link, FormField, Form } from '$components'
    let { form } = $props()
    let isUsernameError = $state<undefined | true>(undefined)
    let isEmailError = $state<undefined | true>(undefined)
    let isPasswordError = $state<undefined | true>(undefined)

    $effect(() => {
        if (form?.username) {
            isUsernameError = true
        }
        if (form?.email) {
            isEmailError = true
        }
        if (form?.password) {
            isPasswordError = true
        }
    })
</script>

<svelte:head>
    <title>Sprintpilot | Register</title>
</svelte:head>

<div class="my-20 w-screen-90 max-w-md rounded-lg border border-border bg-card px-6 py-8 shadow">
    <div class="grid place-items-center text-center">
        <img src="logo-light.png" alt="light logo" width="50" height="50" class="hidden aspect-auto dark:block" />
        <img src="logo-dark.png" alt="dark logo" width="50" height="50" class="visible aspect-auto dark:hidden" />
        <h1 class="mt-2 text-2xl font-semibold">Create an account</h1>
        <h2 class="mb-8 text-sm">And lets get you started with a free plan</h2>
    </div>
    <Form method="POST">
        <FormField>
            <Label for="username">Username</Label>
            <Input type="text" id="username" name="username" aria-describedby="username-error" aria-invalid={isUsernameError} />
            <InputError id="username-error">
                {#if form?.username}
                    {form.username}
                {/if}
            </InputError>
        </FormField>
        <FormField>
            <Label for="email">Email</Label>
            <Input type="email" id="email" name="email" aria-describedby="email-error" aria-invalid={isEmailError} />
            <InputError id="email-error">
                {#if form?.email}
                    {form.email}
                {/if}
            </InputError>
        </FormField>
        <FormField>
            <Label for="password">Password</Label>
            <Input type="password" id="password" name="password" aria-describedby="password-error" aria-invalid={isPasswordError} />
            <InputError id="password-error">
                {#if form?.password}
                    {form.password}
                {/if}
            </InputError>
        </FormField>
        <Button size="sm" class="mt-2">Register</Button>
    </Form>
    <div class="mt-4 flex items-center justify-center gap-2">
        <span class="text-sm">Already have an account?</span>
        <Link href="/login" class="font-semibold text-primary hover:text-primary-hover">Login</Link>
    </div>
</div>
