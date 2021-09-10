<template>
  <div>
      <div class="my-16">

        <div class="filter mb-5 flex items-center justify-between">

            <div>
              <h1 class="text-2xl">{{project.title}}</h1>
            </div>

        </div>
        <!-- filter end -->

        <div class="content-wrapper">

        <div class="image-sec flex items-start mt-6 mb-8 md:mb-0">
          <div class="w-full">
            <ProjectPreviewImages :project="project" type="video" />
          </div>
        </div>
        <div class="next-prev flex items-center justify-between rounded-b-xl overflow-hidden">
          <button class="active:outline-none focus:outline-none p-5 border-l border-b bg-green-100 text-lg font-medium text-gray-700 hover:bg-green-200 transition-all w-full">Previous</button>
          <button class="active:outline-none focus:outline-none p-5 border border-t-0 bg-gray-100 text-lg font-medium text-gray-700 hover:bg-gray-200 transition-all w-full" @click="isSideBarOpen(!isProjectSidePanelOpen)">Playlist</button>
          <button class="active:outline-none focus:outline-none p-5 border-r border-b bg-yellow-100 text-lg font-medium text-gray-700 hover:bg-yellow-200 transition-all w-full">Next</button>
        </div>


        <section class="info mb-0 lg:my-20">
        <div class="w-full flex flex-wrap lg:flex-nowrap lg:space-x-16">
          <div class="w-full lg:w-2/3 order-2 lg:order-1">

          <div class="overview w-full page-content">
              <ProjectContent :content="project.content" />
          </div>

          <div class="comments mt-24">
            <Disqus />
          </div>

          </div>
          <!-- table section end -->

          <div class="elemets-used w-full lg:w-1/3 border rounded-xl p-5 order-1 lg:order-2">
            <ProjectTechnologies :technologies="project.technologies.nodes" />
            <hr class="my-6">
            <ProjectComponentDetails :project="project" :repo-name="repo.name" />
          </div>
        </div>
      </section>
      <!-- info -->

        <!-- ========== Playlist ======== -->

        <transition name="slide">
        <ProjectVideosPlaylist v-shortkey.once="[`esc`]" @shortkey.native="closeSidePanel" v-if="isProjectSidePanelOpen" :project="project" />
        </transition>

        <!-- ========== Playlist ======== -->

        </div>

      </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.project.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.seoContent
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.project.featuredImage.node.sourceUrl
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.project.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.project.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.seoContent
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.project.featuredImage.node.sourceUrl
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.project.featuredImage.node.sourceUrl
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.project.title
        }
      ]
    }
  },
  data() {
    return {
      repo: {}
    }
  },
  computed: {

    isProjectSidePanelOpen () {
      return this.$store.state.isProjectSidePanelOpen
    },

    seoContent () {
      if(this.project.content){
        return this.project.content.replace(/<img[^>]*>/g,"").substring(0, 220).replace(/(<([^>]+)>)/gi, "");
      }else{
        return "Learn with Aamir"
      }
    }
  },
  methods: {

    closeSidePanel() {
      this.$store.commit('isProjectSidePanelOpen', false)
    },

    isSideBarOpen (status) {
      this.$store.commit('isProjectSidePanelOpen', status)
    }

  },
  mounted() {
    if(this.project) {
      return this.$githubApi.getRepo(this.project.projectExtra.projectGithubRepoName)
      .then((repo) => {
          this.repo = repo.json;
      });
    }
  },
  async asyncData({ $gqlQueries, $githubApi, params, redirect }) {

    const responses = await Promise.all([
      $gqlQueries.getVideo(params.video),
    ])

    if(!responses[0]){ redirect('/404')}

    return {
      project: responses[0],
    }
  }
}
</script>


<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
