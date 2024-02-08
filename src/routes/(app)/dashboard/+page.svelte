<script lang="ts">
    let { data } = $props()
</script>

<main class="grid h-full min-h-screen w-full place-items-center">
    <h1 class="text-xl font-medium">Welcome Back, {data.user.username}</h1>
</main>
