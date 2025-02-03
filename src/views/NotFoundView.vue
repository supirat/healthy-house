<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 class="text-6xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p class="text-xl text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
        <router-link to="/" class="text-lg text-teal-500 hover:underline">Go back to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFoundView'
}
</script>

<style scoped>
</style>
