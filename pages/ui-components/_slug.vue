<template>
  <div>
      <section class="project-header mt-12 lg:mt-32 lg:mb-16">

        <ul class="breadcrumbs flex items-center space-x-1 font-medium text-sm lg:text-base">
          <li>
            <nuxt-link to="/" class="not-active text-green-600">Ui Components</nuxt-link>
          </li>
          <li class="text-gray-600">
            <span>/</span>
          </li>
          <li class="text-gray-600">
            <nuxt-link class="not-active" to="/">Single Component</nuxt-link>
          </li>
        </ul>


        <div class="image-sec grid grid-cols-1 lg:grid-cols-1 gap-10 mt-6 mb-8 md:mb-0">
          <div>
            <ProjectPreviewImages :project="project" />
          </div>
          <div class="flex items-center w-full">
            <div class="w-full">
              <ProjectComponentDownloadPreview :project="project" :repo="repo" />
            </div>
          </div>
        </div>

      </section>

      <section class="info mt-10 lg:mt-0 mb-0 lg:mb-32">
        <div class="w-full flex flex-wrap lg:flex-nowrap lg:space-x-16">
          <div class="w-full lg:w-2/3 order-2 lg:order-1">

          <div class="overview w-full page-content">
              <ProjectContent :content="project.content" v-if="repo" :repo="repo" />
          </div>

          <div class="comments mt-24">
            <Disqus />
          </div>

          </div>
          <!-- table section end -->

          <div class="elemets-used w-full lg:w-1/3 border rounded-xl p-5 order-1 lg:order-2">
            <ProjectTechnologies :technologies="project.technologies.nodes" />
            <hr class="mt-6">
            <ProjectComponentDetails :project="project" :repo-name="repo.name" />
          </div>
        </div>
      </section>
      <!-- info -->
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
    seoContent () {
      if(this.project.content){
        return this.project.content.replace(/<img[^>]*>/g,"").substring(0, 220).replace(/(<([^>]+)>)/gi, "");
      }else{
        return "Learn with Aamir"
      }
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
      $gqlQueries.getProject(params.slug),
    ])

    if(!responses[0]){ redirect('/404')}

    return {
      project: responses[0],
    }
  }
}
</script>
