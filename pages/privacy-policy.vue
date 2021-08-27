<template>
  <div>

    <div class="flex flex-wrap relative">
      <div class="absolute inset-0 flex items-end justify-center lg:justify-end select-none">
        <img src="../assets/images/term.svg" class="select-none w-full object-cover opacity-20" alt="mention">
      </div>
      <div class="relative z-1 w-full lg:w-1/2">
        <div class="pt-16">
        <h1 class="text-2xl lg:text-3xl md:tracking-wide md:leading-10 font-normal capitalize text-gray-700">
          <span class="lg:block ">{{page.title}}</span>
        </h1>
      </div>

      <div class="my-10 text-gray-700 space-y-3 content" v-html="page.content"></div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $gqlQueries, redirect }) {

    const responses = await Promise.all([
      $gqlQueries.getPageByURL('privacy-policy-2'),
    ])

    if(!responses[0]){ redirect('/')}

    return {
      page: responses[0],
    }
  }
}
</script>
