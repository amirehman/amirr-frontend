<template>
  <div>
    <form v-if="!isSubmitted" action="https://manage.amirr.net/wp-json/contact-form-7/v1/contact-forms/123/feedback" method="post" @submit.prevent="formSubmit">
      <div class="form-element relative w-full md:w-3/4 mx-auto flex justify-center relative bg-theme-green-light border border-yellow-200 rounded-xl">
        <input type="email" v-model="email" name="your-email" required placeholder="email@yahoo.com" class="w-full border bg-transparent p-4 rounded-xl focus:outline-none active:outline-none">

          <button v-if="isLoading" type="button" class="transition-all duration-100 focus:outline-none active:outline-none group absolute right-0 top-0 flex items-center h-full" disabled>
            <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded-xl block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
            <div class="rounded-full animate-spin ease duration-300 w-5 h-5 border-2 border-l-0 border-gray-700 relative">
              <div class="absolute rounded-full w-full h-full border-3 inset-0"></div>
            </div>
          </span>
        </button>

        <span type="submit" v-if="captcha && !captcha.status" class="select-none transition-all duration-100 focus:outline-none active:outline-none group absolute right-0 top-0 flex items-center h-full">
          <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded-xl block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
            <span class="block">
              {{captcha.num1}}
              {{captcha.opreator}}
              {{captcha.num2}}
            </span>
            <span>
              =
            </span>
            <span>
              <input type="text" v-model="input" @input="checkCaptcha" class="w-10 rounded-full bg-yellow-50 text-center focus:outline-none" placeholder="?">
            </span>
          </span>
        </span>


        <button v-else type="submit" class="transition-all duration-100 focus:outline-none active:outline-none group absolute right-0 top-0 flex items-center h-full">
          <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded-xl block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
            <span class="block">Subscribe</span>
            <span class="block">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-5" viewBox="0 0 512 512"><path d="M405 245v-32c0-67-45-124-106-143v-6a43 43 0 00-86 0v6c-61 19-106 76-106 143v32c0 71-17 96-29 115-7 10-14 20-14 35 0 34 72 47 131 51a64 64 0 00122 0c59-4 131-17 131-51 0-15-7-25-14-35-12-19-29-44-29-115zM235 64a21 21 0 0142 0v2a149 149 0 00-42 0v-2zm21 405c-16 0-30-8-37-22a903 903 0 0074 0c-7 14-21 22-37 22zm0-42c-98 0-171-17-171-32 0-8 4-13 10-24 13-19 33-48 33-126v-32a128 128 0 01256 0v32c0 78 20 107 33 126 6 11 10 16 10 24 0 15-73 32-171 32zM499 178a11 11 0 10-20 7 223 223 0 010 142 11 11 0 0020 7 244 244 0 000-156zM445 185c-5 2-8 8-6 14a181 181 0 010 114 11 11 0 0020 7 202 202 0 000-128c-2-6-8-9-14-7zM21 256c0-24 4-48 12-71a11 11 0 00-20-7 245 245 0 000 156 11 11 0 0020-7c-8-23-12-47-12-71zM73 313a181 181 0 010-114 11 11 0 00-20-7 202 202 0 000 128 11 11 0 0020-7z"/></svg>
            </span>
          </span>
        </button>
        <div v-if="captcha" class="absolute -bottom-6 select-none right-0 text-sm"
        :class="[
          captcha.success ? 'text-green-500' : 'text-gray-600',
          captcha.error ? 'text-red-500' : 'text-gray-600'
        ]">{{captcha.message}}</div>
      </div>
    </form>
    <div v-else class="flex items-center justify-center w-full h-full text-gray-700 relative">
      <span class="absolute top-1 right-1 rotate-10 block cursor-pointer hover:text-black" @click="isSubmitted = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      <p class="inline-block bg-green-50 border border-green-100 rounded px-3 py-1">{{message}}</p>
    </div>
  </div>
</template>

<script>

  import _ from 'lodash'

  export default {
    data() {
      return {
        email: null,
        message: "You have been added to our mailing list and will now be among the first to hear about new uploads.",
        errors: [],
        isLoading: false,
        isSubmitted: false,
        input: null
      }
    },
    computed: {
      captcha() {
        return _.cloneDeep(this.$store.state.captcha.captcha)
      }
    },
    mounted() {
      this.$store.commit('captcha/generateCaptcha')
    },
    methods: {
      checkCaptcha () {
        this.$store.dispatch('captcha/checkCaptcha', this.input)
      },

      formSubmit (event) {
        this.isLoading = true

        const formElement = event.target,
        { action, method } = formElement,
        body = new FormData(formElement);

        fetch(action, {
          method,
          body
        })
          .then((response) => response.json())
          .then((response) => {
              this.isLoading = false
              this.isSubmitted = true
              this.email = null
              this.message = response.message
          })
          .catch((error) => {
            this.isLoading = false
          });

      }
    },
  }
</script>
