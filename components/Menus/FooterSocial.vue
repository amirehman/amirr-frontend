<template>
  <div>
    <ul class="flex items-center justify-center space-x-3">

      <template v-if="menu">
        <li v-for="menu in menu.menuItems.nodes" :key="menu.id">
          <a :href="menu.url" :aria-label="menu.label" :title="menu.label" class="border border-gray-300 flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-yellow-200 hover:border-yellow-200 transition-all rounded-lg">
            <span v-html="menu.menu.menuIcon"></span>
          </a>
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
      this.$gqlQueries.getMenuByName('Footer Social'),
    ])
    this.menu = responses[0]
  },
}
</script>
