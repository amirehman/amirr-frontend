<template>
  <div>
    <section class="news-letter mt-24 bg-yellow-50 h-auto py-24 lg:py-0 lg:h-96 px-5 md:px-12 flex items-center rounded-t-2xl relative">
      <div class="w-full">
        <div class="hidden icon mb-10 lg:mb-5">
          <svg class="fill-current w-16 mx-auto lg:ml-0" viewBox="0 0 483.3 483.3" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M475 195v265c0 6-2 13-7 17l-1 1c-4 3-10 5-15 5H31a23 23 0 01-15-6c-5-4-8-11-8-17V195c0-6 2-11 6-16a22 22 0 0117-7h421c6 0 13 2 17 7s6 10 6 16z" fill="#f6b863"/><path d="M469 179L242 361 14 179 229 5c7-7 18-7 26 0z" fill="#eaa14e"/><path d="M421 57v161L242 361 62 218V57z" fill="#eeefee"/><path d="M468 477l-1 1-202-135 18-15zM219 343L16 478v-1l184-149z" fill="#eaa14e"/><g fill="#dbd8dd"><path d="M102 100h279v12H102zM102 146h279v12H102zM102 193h279v12H102zM149 240h185v12H149z"/></g></svg>
        </div>

        <div class="absolute inset-0 flex justify-center items-center ">
            <img src="../../assets/images/envelope.svg" alt="envelope" class="h-full opacity-25">
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full relative z-1">

          <div class="w-full text-center lg:text-left">
            <div class="text-2xl xl:text-3xl font-bold w-full text-gray-700">
              <span class="inline lg:block">Subscribe to our newsletter to receive</span>
              <span class="inline lg:block"> weekly design freebies!</span>
            </div>
            <p class="text-sm text-gray-500 mt-5">
              We want your email to send the free themes, templates, and beautiful UI components every week. you will be the first to hear about new uploads <strong>NO SPAM</strong>.
            </p>
          </div>

          <div  class="w-full">
            <FormsNewsletter />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>
