<template>
  <div v-if="technologies">
    <h3 class="font-medium text-lg mb-4 text-gray-800">Technologies</h3>
    <ul class="flex flex-wrap gap-3">

      <li v-for="(tech, i) in technologies" :key="i">
        <a :title="tech.name" href="#" :aria-label="tech.name" class="theme-focus block border p-3 w-16 h-16 rounded-xl hover:bg-yellow-100 hover:border-yellow-100 flex items-center group">
          <svg :style="`color: ${tech.customFields.technologyColorCode}`" v-html="tech.customFields.technologyIcon"></svg>
        </a>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    props: ['technologies']
  }
</script>

<style lang="scss" scoped>

</style>
