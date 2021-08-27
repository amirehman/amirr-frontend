<template>
  <div>

    <div class="flex flex-wrap relative lg:h-screen">
      <div class="absolute inset-0 flex justify-center lg:justify-end select-none">
        <img src="../assets/images/support.svg" class="select-none w-3/4 object-cover lg:object-contain opacity-20" alt="mention">
      </div>

      <div class="relative z-1 w-full lg:w-1/2">
        <div class="pt-16">
        <h1 class="text-2xl lg:text-3xl md:tracking-wide md:leading-10 font-normal capitalize text-gray-700">
          <span class="lg:block ">{{page.title}}</span>
        </h1>
      </div>

      <div class="my-10 text-gray-700 space-y-3 content" v-html="page.content"></div>

      <div class="support-buttons space-y-3">

        <div class="buymeacoffee">
          <a target="_blank" href="https://www.buymeacoffee.com/amirehman" aria-label="Buy me a coffee" class="px-4 py-2 not-active border border-yellow-200 rounded inline-block bg-yellow-100 text-gray-700 hover:bg-yellow-200">
          Buy me a Coffee</a>
        </div>

        <div class="paypal">
          <a target="_blank" href="https://www.paypal.me/iamirrehman" aria-label="Buy me a coffee" class="px-4 py-2 not-active border border-green-200 rounded inline-block bg-green-100 text-gray-700 hover:bg-green-200">
          Paypal</a>
        </div>

      </div>


      </div>
    </div>

  </div>
</template>
<script>

export default {
  async asyncData({ $gqlQueries, redirect }) {

    const responses = await Promise.all([
      $gqlQueries.getPageByURL('buy-me-a-coffee'),
    ])

    if(!responses[0]){ redirect('/')}

    return {
      page: responses[0],
    }
  }
}
</script>
