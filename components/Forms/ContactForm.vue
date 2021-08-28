<template>
  <div>

    <form v-if="!isSubmitted" action="https://manage.amirr.net/wp-json/contact-form-7/v1/contact-forms/104/feedback" method="post" @submit.prevent="formSubmit" class="space-y-6">

      <div class="form-element">
        <input type="text" v-model="form.name" name="your-name" required placeholder="What’s your name?" class="p-3 w-full bg-transparent border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4">
      </div>
      <!-- form element -->

      <div class="form-element">
        <input type="email" v-model="form.email" name="your-email" required placeholder="What’s your email address?" class="p-3 w-full bg-transparent border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4">
      </div>
      <!-- form element -->

      <div class="form-element">
        <select name="your-subject" v-model="form.subject" id="yourReason" class="p-3 form-select bg-transparent border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-auto">
          <option value="submit website/component">Submit Website/Component</option>
          <option value="hire">Hire</option>
          <option value="Suggestion">Suggestion</option>
          <option value="other">Other</option>
        </select>
      </div>
      <!-- form element -->

      <div class="form-element">
        <textarea v-model="form.message" name="your-message" rows="10" required placeholder="Feel free to type as much or as little as you like." class="p-3 w-full bg-transparent border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4"></textarea>
      </div>
      <!-- form element -->



      <div class="form-element">

        <div v-if="captcha && !captcha.status">
        <span type="submit" class="select-none transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full">
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

        </div>

        <div v-else>
        <button v-if="isLoading" type="button" class="transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full" disabled>
          <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
            <div class="rounded-full animate-spin ease duration-300 w-5 h-5 border-2 border-l-0 border-gray-700 relative">
              <div class="absolute rounded-full w-full h-full border-3 inset-0"></div>
            </div>
          </span>
        </button>

        <button v-else type="submit" class="transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full">
          <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
            <span class="block">Submit</span>
          </span>
        </button>
        </div>

        <div v-if="captcha" class="select-none my-3"
        :class="[
          captcha.success ? 'text-green-500' : 'text-gray-600',
          captcha.error ? 'text-red-500' : 'text-gray-600'
        ]">{{captcha.message}}</div>


      </div>
      <!-- form-element -->


    </form>

    <div v-else class="flex items-center justify-center w-full h-full text-gray-700 relative">
      <span class="absolute top-1 right-1 rotate-10 block cursor-pointer hover:text-black" @click="isSubmitted = !isSubmitted">
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
        input: null,
        form: {
          name: null,
          email: null,
          subject: 'submit website/component',
          message: null,
        },
        message: "Thank you for your message. It has been sent.",
        errors: [],
        isLoading: false,
        isSubmitted: false
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
              this.form = []
              this.message = response.message
          })
          .catch((error) => {
            this.isLoading = false
          });

      }
    },
  }
</script>
