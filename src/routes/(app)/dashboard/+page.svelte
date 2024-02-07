<script lang="ts">
    let { data } = $props()
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <h1 class="text-xl font-medium">This is your user ID: {data.user.id}</h1>
</main>
