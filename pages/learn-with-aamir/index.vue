<template>
  <div>
      <div class="my-16">
        <div class="filter mb-16">
          <div class="bg-yellow-100 bg-opacity-75 w-64 rounded-full h-10 relative cursor-pointer group" @click="checkDataType">

              <div :class="dataType == 'playlist-active' ? 'playlist-active' : 'videos-active' " class="data-type-button group-hover:bg-green-200"></div>

              <button class="w-1/2 flex items-center justify-center uppercase font-medium text-gray-700 tracking-wide absolute left-0 top-0 h-full">Playlist</button>
              <button class="w-1/2 flex items-center justify-center uppercase font-medium text-gray-600 tracking-wide absolute right-0 top-0 h-full">Videos</button>

          </div>
        </div>
        <!-- filter end -->


        <div class="content-wrapper">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10" v-if="!$apollo.queries.loading">

              <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-300 transition cursor-pointer" v-for="data in datas" :key="data.id">

                  <ProjectsLearnWithAmirPlaylistBox v-if="dataType == 'playlist-active'" :data="data" :title="data.name" />
                  <ProjectsLearnWithAmirProjectBox v-else :data="data" :title="data.title" />

              </div>
              <!-- column -->

            </div>
            <!-- grid -->

            <LoaderProjectBox v-else classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10" />


        </div>

      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataType: 'playlist-active'
    }
  },
  watch: {
    'dataType': function (value) {
      if(value === 'videos-active') {
        this.getVideos()
      }else{
        this.getPlaylists()
      }
    }
  },
  computed: {
    isItems () {
      return this.projectType.projects.nodes.length == 0 ? false : true
    }
  },
  methods: {

    checkDataType () {
       if(this.dataType == 'playlist-active')
        this.dataType = 'videos-active'
      else
        this.dataType = 'playlist-active'
    },

    async getVideos () {

      const responses = await Promise.all([
        this.$gqlQueries.getVideos()
      ])

      if(!responses[0]){ redirect('/')}

        this.datas = responses[0].projects.nodes

    },

    async getPlaylists () {

      const responses = await Promise.all([
        this.$gqlQueries.getPlaylists()
      ])

      if(!responses[0]){ redirect('/')}

      this.datas = responses[0].nodes



    }
  },
  async asyncData({ $gqlQueries, redirect }) {

    const responses = await Promise.all([
      $gqlQueries.getPlaylists(),
    ])

    if(!responses[0]){ redirect('/')}

    return {
      datas: responses[0].nodes,
    }
  }
}
</script>
