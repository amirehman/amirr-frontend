<template>
  <div>
    <ul class="hidden lg:flex items-center font-normal text-gray-800">
      <li class="pr-5">
        <h1 class="capitalize text-xl tracking-wide font-semibold select-none">
          <nuxt-link to="/" class="not-active">Aamir R.</nuxt-link>
        </h1>
      </li>
      <template v-if="menu">
      <li v-for="menu in menu.menuItems.nodes" :key="menu.id">
      <nuxt-link
        :to="menu.url"
        class="capitalize px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">{{menu.label}}
      </nuxt-link>
      </li>
      </template>
      <template v-else>
      <li>
        <nuxt-link to="/ui-components" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">UI Components</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/themes" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Themes</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/templates" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Templates</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/clones" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Clones</nuxt-link>
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
      this.$gqlQueries.getMenuByName('Main Menu'),
    ])
    this.menu = responses[0]
  },
}
</script>
