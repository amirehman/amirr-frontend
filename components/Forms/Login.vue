<template>
  <div class="space-y-5">
    <div class="form-element">
      <input type="email" v-model="form.email" name="your-email" required placeholder="Email Address" class="bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4">
    </div>
      <!-- form element -->

    <div class="form-element">
      <input type="password" v-model="form.password" name="your-email" required placeholder="Password" class="bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4">
    </div>
    <!-- form element -->

    <div class="form-element">
      <button v-if="isLoading" type="button" class="transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full" disabled>
          <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
            <div class="rounded-full animate-spin ease duration-300 w-5 h-5 border-2 border-l-0 border-gray-700 relative">
              <div class="absolute rounded-full w-full h-full border-3 inset-0"></div>
            </div>
          </span>
        </button>

        <button v-else @click="submitForm" class="transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full">
          <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
            <span class="block">Login</span>
          </span>
        </button>
    </div>

    <client-only>
    <div v-if="$nuxt.$fire.auth.currentUser">
      {{ $store.state.user }}
    </div>
    </client-only>

    <div v-if="error.code" class="mt-12 w-full md:w-3/4 border border-red-200 text-sm p-2 bg-red-100 rounded">{{error}}</div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: "hi@amirr.net",
          password: "Kainat6@jan"
        },
        error: {},
        isLoading: false,
        isSubmitted: false

      }
    },
    methods: {
      async submitForm () {
          let that = this
          await this.$fire.auth.signInWithEmailAndPassword(this.form.email, this.form.password)

          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            that.error = {}
            $nuxt.$router.push('/')
          })
          .catch((error) => {
            that.error = error;
          });


      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
