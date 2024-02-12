<script lang="ts">
    /* eslint-disable */
    import type { SubmitFunction } from '@sveltejs/kit'
    import { Moon, Sun, Button, Form } from '$components'
    import { page } from '$app/stores'

    const submitUpdateTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get('theme')

        if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme)
        }
    }
</script>

<Form method="post" submitFunction={submitUpdateTheme}>
    <Button variant="ghost" size="none" formaction="/?/setTheme&theme=dark&redirectTo={$page.url}" class="inline-flex dark:hidden">
        <Sun size="20" />
    </Button>
    <Button variant="ghost" size="none" formaction="/?/setTheme&theme=light&redirectTo={$page.url}" class="hidden dark:inline-flex">
        <Moon size="20" />
    </Button>
</Form>
