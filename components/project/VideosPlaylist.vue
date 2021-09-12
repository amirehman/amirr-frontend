<template>
  <div>
    <div class="w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-yellow-100 bg-opacity-75 backdrop-filter backdrop-blur-lg h-screen overflow-y-auto fixed top-0 right-0 z-50 shadow-xl">
      <div class="font-medium text-lg px-6 py-2 border-b bg-green-100 flex items-center justify-between select-none">
        <span>Playlist</span>
        <span @click="closeSidePanel" class="cursor-pointer text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>
      <ul v-if="playlist">

        <li v-for="(video, i) in playlist" :key="video.id">
          <nuxt-link :to="`/learn-with-aamir/${projectslug}/${video.slug}`" class="flex items-center block border-b p-3 space-x-5 hover:bg-yellow-100 transition-all  ">
            <span class="font-medium text-gray-600"> {{i+1}} </span>
            <span class="text-gray-900">{{video.title}}</span>
          </nuxt-link>
        </li>

      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['playlist', 'projectslug'],
    methods: {
      closeSidePanel() {
        this.$store.commit('isProjectSidePanelOpen', false)
      },
    },

  }
</script>

<style lang="scss" scoped>

</style>
