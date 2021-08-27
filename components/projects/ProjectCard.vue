<template>
  <div>
    <nuxt-link :to="`${projectTypeSlug}/${project.slug}`" class="block relative">
      <span v-if="project.projectExtra.projectVideoLink" class="absolute bottom-3 right-3 text-gray-800 opacity-25">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
      <template v-if="project.featuredImage">
        <img :srcset="project.featuredImage.node.srcSet" alt="image" height="500" width="500" class="w-full">
      </template>
      <template v-else>
        <UtilsLoadingBox />
      </template>
    </nuxt-link>
    <div class="info p-3 space-y-1 md:space-y-0">
      <nuxt-link :to="`${projectTypeSlug}/${project.slug}`" class="not-active text-semibold text-2xl md:text-lg flex items-center justify-between">
        <span>{{project.title}} </span>
        <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
      </nuxt-link>
      <div class="text-gray-700 md:flex items-center justify-between text-sm">

        <span class="block md:inline mt-1 md:mt-0">
        <template v-for="(category, b) in project.categories.nodes">
          <nuxt-link :to="`/categories/${category}`" :key="b" class="not-active capitalize hover:text-yellow-500"> {{category.name}} </nuxt-link>
          <template v-if="project.categories.nodes.length != b+1">, </template>
        </template>
        </span>

        <span v-if="isProjectTypes" class="block md:inline mt-1 md:mt-0">
          <template v-for="(type, i) in project.projectTypes.nodes">
          <nuxt-link :to="`/categories/${type}`" :key="i" class="not-active capitalize hover:text-yellow-500"> {{type.name}} </nuxt-link>
          <template v-if="project.projectTypes.nodes.length != i+1">, </template>
        </template>
        </span>
        <!-- <nuxt-link class="not-active" aria-label="project title" :to="`${projectTypeSlug}/${project.slug}`" v-html="project.excerpt"></nuxt-link> -->

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['project', 'index', 'projectTypeSlug', 'isProjectTypes']
  }
</script>

<style lang="scss" scoped>

</style>
