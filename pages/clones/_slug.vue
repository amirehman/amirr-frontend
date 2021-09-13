<template>
  <div>
      <section class="project-header mt-12 lg:mt-32 lg:mb-16">

        <ul class="breadcrumbs flex items-center space-x-1 font-medium text-sm lg:text-base">
          <li>
            <nuxt-link to="/" class="not-active text-green-600">Clones</nuxt-link>
          </li>
          <li class="text-gray-600">
            <span>/</span>
          </li>
          <li class="text-gray-600">
            <nuxt-link to="/" class="not-active">{{project.title}}</nuxt-link>
          </li>
        </ul>


        <div class="image-sec flex flex-wrap lg:flex-nowrap lg:space-x-12 mt-6 mb-8 md:mb-0">
          <div class="w-full lg:w-2/3">
            <ProjectPreviewImages :project="project" />
          </div>
          <div class="flex items-center w-full lg:w-1/3">
            <div class="w-full">
              <ProjectDownloadPreview :project="project" :repo="repo" />
            </div>
          </div>
        </div>

      </section>

      <section class="info mb-0 lg:mb-32">
        <div class="w-full flex flex-wrap lg:flex-nowrap lg:space-x-16">
          <div class="w-full lg:w-2/3 order-2 lg:order-1">
            <ProjectDetails v-if="repo" :project="project" :repo="repo" />
          <!-- table end -->

          <div v-if="project.content" class="overview mt-16 md:my-16 w-full">
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
      title: this.project.title + " | Aamir R.",
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
        },

        {
        hid: "title",
        name: "title",
        content: this.project.title
      },
      {
        hid: "description",
        name: "description",
        content: this.seoContent
      },
      {
        hid: "keywords",
        name: "keywords",
        content: this.project ? this.seoTags.forEach(tag => { tag  }) : 'hello'
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
    seoTags () {
      if(this.project){
        return this.project.tags.nodes.map(t => t.name)
      }
    },
    seoContent () {
      if(this.project && this.project.projectExtra.seoDescription){
        return this.project.projectExtra.seoDescription
        // return this.project.content.replace(/<img[^>]*>/g,"").substring(0, 220).replace(/(<([^>]+)>)/gi, "");
      }else{
        return "Aamir R. presents Hght quality, free TailwindCSS, and Bootstrap themes, templates, and UI components to download. Get them now!"
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
