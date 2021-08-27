<template>
  <div>
    <ul class="text-gray-800">
      <template v-if="menu">
        <li v-for="menu in menu.menuItems.nodes" :key="menu.id">
          <nuxt-link :to="menu.url" class="not-active">{{menu.label}}</nuxt-link>
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
      this.$gqlQueries.getMenuByName('Footer'),
    ])
    this.menu = responses[0]
  },
}
</script>
