<template>
  <div>

    <section class="my-10 md:my-16 jumbotron bg-green-50 h-48 rounded-2xl">
      <div class="h-full flex items-center justify-center">
        <h1 class="px-5 text-center text-xl md:text-3xl md:tracking-wide md:leading-10 font-light capitalize text-gray-800">
          <span class="lg:block text-center">Free themes, templates, and UI tools to help you </span>
          <span class="lg:block text-center">start your next project!</span>
        </h1>
      </div>
    </section>
    <!-- jumbrotron -->

    <section class="my-8 md:my-12 latest">

      <div class="section-header mb-10">
        <span class="capitalize text-xl tracking-wide font-medium select-none text-gray-800">Latest</span>
      </div>
      <!--  -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

        <!-- v-if="project.projectTypes.nodes.length != 0" -->
        <div class="card border rounded-xl" v-for="(project, i) in projects" :key="i">
          <ProjectsProjectCard is-project-types="true" :project="project" :index="i" :project-type-slug="project.projectTypes.nodes[0].slug" />
        </div>

      </div>
    </section>

  </div>
</template>

<script>

export default {
  async asyncData({ $gqlQueries }) {

    const projects = await $gqlQueries.getLatestProjects()

    return {
      projects
    };
  }
}
</script>
