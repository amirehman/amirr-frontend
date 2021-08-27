<template>
  <div>
    <div class="flex items-center justify-center py-12" v-if="error.statusCode === 404">
      <img class="w-full lg:w-1/2 opacity-75" src="../assets/images/404.svg" alt="404">
    </div>
    <div class="flex items-center justify-center">
      <NuxtLink to="/" class="not-active p-3 border rounded hover:border-gray-400">Go Home</NuxtLink>
    </div>


  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
