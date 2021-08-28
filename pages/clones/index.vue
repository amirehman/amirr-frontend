<template>
  <div>

    <section class="my-16 jumbotron bg-green-50 h-48 rounded-2xl">
      <div class="h-full flex items-center justify-center">
        <h1 class="px-5 text-center text-2xl md:text-3xl md:tracking-wide md:leading-10 font-normal lg:font-light capitalize text-gray-800">
          <span class="lg:block text-center">Free clones of famous websites & applications Using </span>
          <span class="lg:block text-center">  TailwindCSS, Bootstrap and custom CSS</span>
        </h1>
      </div>
    </section>
    <!-- jumbrotron -->

    <section class="my-8 md:my-12" v-if="isItems">

      <div class="section-header mb-10">
        <span class="capitalize text-xl tracking-wide font-medium select-none text-gray-800">Clones</span>
      </div>
      <!--  -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

        <div class="card border rounded-xl overflow-hidden" v-for="(project, i) in projectType.projects.nodes" :key="i">
          <ProjectsProjectCard :project="project" :index="i" :project-type-slug="projectType.slug" />
        </div>
        <!-- card -->

      </div>
    </section>

    <div v-else class="h-64 flex items-center justify-center">
      <span class="text-3xl text-gray-500 tracking-wider font-light uppercase">Coming soon...</span>
    </div>

  </div>
</template>

<script>

export default {
  computed: {
    isItems () {
      return this.projectType.projects.nodes.length == 0 ? false : true
    }
  },
  async asyncData({ $gqlQueries, redirect }) {

    const responses = await Promise.all([
      $gqlQueries.getProjectsByType('clones'),
    ])

    if(!responses[0]){ redirect('/')}

    return {
      projectType: responses[0],
    }
  }
}
</script>
