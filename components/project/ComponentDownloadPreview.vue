<template>
  <div class="flex flex-col lg:flex-row justify-between items-center">

    <div class="w-full mb-6 lg:mb-0">
      <h1 class="text-2xl md:text-4xl font-medium capitalize text-gray-800">{{project.title}}</h1>
      <div class="text-gray-700 mt-2" v-if="project.excerpt" v-html="project.excerpt"></div>
    </div>

    <div class="download-info flex items-center justify-between w-full lg:w-4/5 xl:w-2/3 space-x-5">

      <a v-if="project.projectExtra.projectLiveLink" target="_blank" :href="project.projectExtra.projectLiveLink" class="theme-focus text-gray-700 font-medium block border w-full py-4 text-center text-medium hover:bg-yellow-200 duration-300 transition-all hover:border-yellow-200 rounded-full">Live Preview</a>

      <a v-if="repo" :href="`https://github.com/amirehman/${project.projectExtra.projectGithubRepoName}`" target="_blank" class="flex items-center justify-center theme-focus block border w-full py-2 text-center text-medium hover:bg-green-200 duration-300 transition-all hover:border-green-200 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-10 h-10" viewBox="0 0 512 512"><path d="M256 5a257 257 0 00-81 501c13 3 18-5 18-12l-1-44c-71 16-86-34-86-34-12-30-28-38-28-38-24-16 1-16 1-16 26 2 39 27 39 27 23 39 60 28 75 21 2-16 9-28 16-34-57-7-116-29-116-127 0-28 10-51 26-69-3-7-11-33 3-68 0 0 21-7 70 26a244 244 0 01128 0c49-33 70-26 70-26 14 35 6 61 3 68 16 18 26 41 26 69 0 99-60 120-117 127 10 8 18 23 18 47v71c0 7 4 15 17 12A257 257 0 00256 5z"/></svg>
      </a>

      <a v-if="repo.assets" :href="repo.assets[0].browser_download_url" class="cursor-pointer theme-focus block border w-full px-4 py-4 text-center text-medium -ml-6 hover:bg-green-200 duration-300 transition-all hover:border-green-200 rounded-full">Download</a>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['project', 'repo']
  }
</script>

<style lang="scss" scoped>

</style>
