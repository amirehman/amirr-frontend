<template>
  <div>
    <ul class="hidden lg:flex items-center font-normal text-gray-800">
      <template v-if="menu">
        <li v-for="menu in menu.menuItems.nodes" :key="menu.id">
          <nuxt-link
          :to="menu.url"
          :class="menu.cssClasses.includes('active-design') ? 'mr-2 bg-green-200 border-2 border-transparent hover:border-green-400 hover:bg-transparent py-1' : 'py-2 hover:bg-yellow-200'"
          class="capitalize hover:text-black px-5 inline-block rounded-full transition-all">
            {{menu.label}}
        </nuxt-link>
        </li>
      </template>
      <template v-else>
      <li>
        <nuxt-link to="/podcasts" class="mr-2 px-5 py-1 inline-block rounded-full bg-green-200 border-2 border-transparent hover:border-green-400 hover:bg-transparent hover:text-black transition-all">Podcasts</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blogs" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Blogs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/support" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Support</nuxt-link>
      </li>
      </template>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: null
    }
  },
  async mounted() {
    const responses = await Promise.all([
      this.$gqlQueries.getMenuByName('Top Right'),
    ])
    this.menu = responses[0]
  },
}
</script>
