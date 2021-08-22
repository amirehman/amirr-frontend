<template>
  <div>
    <div class="rounded-xl overflow-hidden border">
      <iframe
        v-if="project.projectExtra.projectVideoLink"
        class="w-full h-52 md:h-[380px] xl:h-[665px] 2xl:h-[810px]"
        :src="`https://www.youtube-nocookie.com/embed/${project.projectExtra.projectVideoLink}`"
        :title="project.title"
        frameborder="0"
        allowfullscreen>
      </iframe>
      <img
        v-else
        :srcset="project.featuredImage.node.srcSet"
        alt="image">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['project'],
    computed: {
      images () {
        const arr = this.project.featuredImage.node.srcSet.split(',');
        return arr;
        return arr.map(ar => {
          const sar = ar.split(" ")
          return {
            'index': sar[1],
          };
        })

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
