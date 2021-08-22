<template>
  <div>

    <h4 class="text-2xl font-base text-gray-800 mb-5">{{title}}</h4>
    <div class="xxl:text-xl space-y-3 text-gray-700 font-normal detail-content" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    props: ['content', 'title'],
  }
</script>
