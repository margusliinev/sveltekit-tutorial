<script>
    import { Button, Input, Label, Link, FormField, Form } from '$components'
</script>

<div class="my-20 w-screen-90 max-w-md rounded-lg border border-input px-6 py-8 shadow-sm">
    <div class="grid place-items-center">
        <img src="apple-touch-icon.png" alt="logo" width={40} height={40} class="mb-2" />
        <h1 class="mb-1 text-2xl font-semibold">Create an account</h1>
        <h2 class="mb-8 text-sm">And lets get you started with a free plan</h2>
    </div>
    <Form method="POST">
        <FormField>
            <Label for="username">Username</Label>
            <Input type="text" id="username" name="username" aria-describedby="username-error" aria-invalid={undefined} />
        </FormField>
        <FormField>
            <Label for="email">Email</Label>
            <Input type="email" id="email" name="email" aria-describedby="email-error" aria-invalid={undefined} />
        </FormField>
        <FormField>
            <Label for="password">Password</Label>
            <Input type="password" id="password" name="password" aria-describedby="password-error" aria-invalid={undefined} />
        </FormField>
        <Button size="sm">Register</Button>
    </Form>
    <div class="mt-2 flex items-center justify-center gap-2">
        <p class="text-sm">Already have an account?</p>
        <Link href="/login">Login</Link>
    </div>
</div>
