<template>
  <div>
    <table class="table-auto w-full">
      <tbody>
          <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Version</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">{{repoName}}</span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Framework</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">
              <template v-for="(framework,i) in project.categories.nodes">
                <nuxt-link :to="`${framework.slug}`" :key="i" class="hover:text-yellow-500">
                  {{framework.name}}
                  <template v-if="project.categories.nodes.length != i+1">, </template>
                </nuxt-link>
              </template>
            </span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Framework Version</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">{{project.projectExtra.projectFrameworkVersion}}</span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Downloads</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">2333</span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Cateogry</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">
              <template v-for="(category,i) in project.tags.nodes">
                <nuxt-link :to="`${category.slug}`" :key="i" class="hover:text-yellow-500">
                  {{category.name}}
                  <template v-if="project.tags.nodes.length != i+1">, </template>
                </nuxt-link>
              </template>
            </span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Features</span>
            </td>
            <td class="border px-4 py-2">
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
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Type</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">{{project.projectTypes.nodes[0].name}}</span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Pages</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">{{project.projectExtra.projectPages}}</span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Date Created</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">{{ shortDate(project.date) }}</span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Last Updated</span>
            </td>
            <td class="border px-4 py-2">
            <span class="text-gray-800">11, Feb 2021</span>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <span class="font-medium text-gray-700">Licence</span>
            </td>
            <td class="border px-4 py-2">
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
    props: ['repoName', 'project'],
    methods:{
      shortDate,
    },
  }
</script>

<style lang="scss" scoped>

</style>
