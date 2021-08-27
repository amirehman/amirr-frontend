<template>
  <div>
      <section class="project-header mt-12 lg:mt-32 lg:mb-16">

        <ul class="breadcrumbs flex items-center space-x-1 font-medium text-sm lg:text-base">
          <li>
            <nuxt-link to="/" class="not-active text-green-600">Templates</nuxt-link>
          </li>
          <li class="text-gray-600">
            <span>/</span>
          </li>
          <li class="text-gray-600">
            <nuxt-link to="/" class="not-active">Single Component</nuxt-link>
          </li>
        </ul>


        <div class="image-sec grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6 mb-8 md:mb-0">
          <div>
            <ProjectPreviewImages :project="project" />
          </div>
          <div class="flex items-center w-full">
            <div class="w-full">
              <ProjectDownloadPreview :project="project" :repo="repo" />
            </div>
          </div>
        </div>

      </section>

      <section class="info mb-0 lg:mb-32">
        <div class="w-full flex flex-wrap lg:flex-nowrap lg:space-x-16">
          <div class="w-full lg:w-2/3 order-2 lg:order-1">
            <ProjectDetails :project="project" :repo-name="repo.name" />
          <!-- table end -->

          <div class="overview mt-16 md:my-16 w-full">
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
  data() {
    return {
      repo: {}
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
