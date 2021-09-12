<template>
  <div>
    <table class="table-auto w-full">
      <tbody>

        <tr v-if="project.projectExtra.projectLink">
          <td class="border-b px-4 py-5 text-center" colspan="2">
            <nuxt-link :to="project.projectExtra.projectLink" class="hover:bg-green-100 font-medium text-gray-700 border rounded-full p-3 mb-2 block">Download This Component</nuxt-link>
          </td>
        </tr>

        <tr>
          <td class="border-b px-4 py-2">
            <span class="font-medium text-gray-700">Features</span>
            </td>
            <td class="border-b px-4 py-2">
            <span class="text-gray-800">
              <template v-for="(feature,i) in project.features.nodes">
                <nuxt-link :to="`${feature.slug}`" :key="i" class="hover:text-yellow-500">
                  {{feature.name}}
                  <template v-if="project.features.nodes.length != i+1">, </template>
                </nuxt-link>
              </template>
            </span>
          </td>
        </tr>
        <tr v-if="project.projectTypes.nodes.length != 0">
          <td class="border-b px-4 py-2">
            <span class="font-medium text-gray-700">Type</span>
            </td>
            <td class="border-b px-4 py-2">
            <span class="text-gray-800">{{project.projectTypes.nodes[0].name}}</span>
          </td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">
            <span class="font-medium text-gray-700">Date Created</span>
            </td>
            <td class="border-b px-4 py-2">
            <span class="text-gray-800">{{ shortDate(project.date) }}</span>
          </td>
        </tr>
        <tr>
          <td class="border-b px-4 py-2">
            <span class="font-medium text-gray-700">Last Updated</span>
            </td>
            <td class="border-b px-4 py-2">
            <span class="text-gray-800">11, Feb 2021</span>
          </td>
        </tr>
        <tr>
          <td class="px-4 py-2">
            <span class="font-medium text-gray-700">Licence</span>
            </td>
            <td class="px-4 py-2">
            <span class="text-gray-800">{{project.projectExtra.projectLicence}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import shortDate from '~/utils/shortDate'

  export default {
    props: ['repo', 'project'],
    methods:{
      shortDate,
    },
  }
</script>

<style lang="scss" scoped>

</style>
