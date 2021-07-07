<template>
  <div>

    <section class="my-16 jumbotron bg-green-50 h-48 rounded-2xl">
      <div class="h-full flex items-center justify-center">
        <h1 class="px-5 text-center text-2xl md:text-3xl md:tracking-wide md:leading-10 font-light capitalize text-gray-800">
          <span class="lg:block text-center">Free themes, templates, and UI tools to help you </span>
          <span class="lg:block text-center">start your next project!</span>
        </h1>
      </div>
    </section>
    <!-- jumbrotron -->

    <section class="my-24 latest">

      <div class="section-header mb-10">
        <span class="capitalize text-xl tracking-wide font-medium select-none text-gray-800">Latest</span>
      </div>
      <!--  -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1f3b4390836469.Y3JvcCw4MDgsNjMyLDAsMA.png" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1f9b1771309437.Y3JvcCwxMTkyLDkzMyw2Miww.jpg" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/22c47b90383313.Y3JvcCwxOTIwLDE1MDEsMCww.png" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/2effd390366719.Y3JvcCw4MDgsNjMyLDAsMA.png" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3b971b81090977.Y3JvcCwxMzMzLDEwNDMsMCww.jpg" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

      </div>
    </section>

  </div>
</template>

<script>

import gql from "graphql-tag";

//Queries
import LatestProjectsQuery from "~/gql/queries/LatestProjects";

export default {
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const projects = await client
      .query({
        query: LatestProjectsQuery
      })
      .then(({ data }) => data && data.projects.nodes);

    return {
      projects
    };
  }
}
</script>
