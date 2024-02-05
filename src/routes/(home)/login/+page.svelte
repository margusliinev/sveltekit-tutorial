<script>
    import { Button, Input, InputError, Label, Link, FormField, Form } from '$components'
</script>

<div class="my-20 w-screen-90 max-w-md rounded-lg border border-border bg-card px-6 py-8 shadow">
    <div class="grid place-items-center text-center">
        <img src="logo-light.png" alt="light logo" width="50" height="50" class="hidden aspect-auto dark:block" />
        <img src="logo-dark.png" alt="dark logo" width="50" height="50" class="visible aspect-auto dark:hidden" />
        <h1 class="mt-2 text-2xl font-semibold">Welcome back!</h1>
        <h2 class="mb-8 text-sm">Please enter your credentials to log in!</h2>
    </div>
    <Form method="POST">
        <FormField>
            <Label for="email">Email</Label>
            <Input type="email" id="email" name="email" aria-describedby="email-error" aria-invalid={undefined} />
            <InputError id="email-error"></InputError>
        </FormField>
        <FormField>
            <Label for="password">Password</Label>
            <Input type="password" id="password" name="password" aria-describedby="password-error" aria-invalid={undefined} />
            <InputError id="password-error"></InputError>
        </FormField>
        <Button size="sm" class="mt-2">Login</Button>
    </Form>
    <div class="mt-4 flex items-center justify-center gap-2">
        <span class="text-sm">Don't have an account?</span>
        <Link href="/register" class="font-semibold text-primary hover:text-primary-hover">Register</Link>
    </div>
</div>
