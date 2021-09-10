<template>
  <div @click="$router.push({ path: `/learn-with-aamir/${data.slug}`})">
      <div class="image h-50 bg-gray-200">
      <template v-if="data.playlistExtra">
        <img :srcset="data.playlistExtra.playlistThumbnail.srcSet" alt="image" height="auto" width="auto" class="h-full object-cover w-full">
      </template>
    </div>
    <!-- image -->
    <div class="p-3">
      <nuxt-link :to="`/learn-with-aamir/${data.slug}`" class="text-gray-800">{{title}}</nuxt-link>
      <div class="text-sm text-gray-600 flex items-center justify-between">
        <span v-if="data.projects">
          {{data.projects.nodes.length}} Videos
        </span>
      </div>
    </div>
    <!-- info -->
  </div>
</template>

<script>
  export default {
    props: ['data', 'title']

  }
</script>

<style lang="scss" scoped>

</style>
