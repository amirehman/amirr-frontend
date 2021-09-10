<template>
  <div>
      <div class="my-16">

        <div class="mb-10 flex items-center justify-between">

            <div>
              <h1 class="text-2xl">Learn Javasript in Urdu</h1>
            </div>

            <div class="filter hidden">
              Filter
            </div>
            <!-- filter end -->

        </div>



        <div class="content-wrapper">

            <div v-if="videos.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">

              <div class="border border-gray-200 rounded-lg overflow-hidden" v-for="data in videos" :key="data.id">

                <ProjectsLearnWithAmirProjectBox :data="data" :title="data.title" />

              </div>
              <!-- column -->

            </div>
            <!-- grid -->

            <div class="h-48 flex items-center justify-center select-none" v-else>
              <div>
                <img class="w-20 fill-current opacity-50" src="../../../assets/images/folder.svg" alt="404">
                <span class="block text-sm text-gray-500 text-center font-medium tracking-wider">No videos</span>
              </div>
            </div>

        </div>

      </div>
  </div>
</template>

<script>
  export default {

    async asyncData({ $gqlQueries, params, redirect }) {

      const responses = await Promise.all([
        $gqlQueries.getPlaylist(params.playlist),
      ])

      if(!responses[0]){ redirect('/404')}

      return {
        videos: responses[0].projects.nodes,
      }
    }

  }
</script>
