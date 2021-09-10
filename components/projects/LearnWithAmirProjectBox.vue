<template>
  <div v-if="data.playlists && data.playlists.nodes.length > 0" @click="$router.push({ path: `/learn-with-aamir/${data.playlists.nodes[0].slug}/${data.slug}`})">
      <div class="image h-50 bg-gray-200 cursor-pointer">
      <template v-if="data.featuredImage">
        <img :srcset="data.featuredImage.node.srcSet" alt="image" height="auto" width="auto" class="h-full object-cover w-full">
      </template>
    </div>
    <!-- image -->
    <div class="p-3">
      <nuxt-link :to="`/learn-with-aamir/${data.playlists.nodes[0].slug}/${data.slug}`" class="text-gray-800">{{title}}</nuxt-link>
      <div v-if="data.playlists" class="text-sm text-gray-600 flex items-center justify-between">
        <span v-for="playlist in data.playlists.nodes" :key="playlist.id">
          {{playlist.name}}
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
