<template>
  <div>

    <div class="flex flex-wrap relative h-screen">
      <div class="absolute inset-0 flex justify-center lg:justify-end select-none">
        <img src="../../assets/images/fingerprints.svg" class="select-none w-3/4 object-cover lg:object-contain opacity-20" alt="mention">
      </div>
      <div class="relative z-1 w-full lg:w-1/2">
        <div class="pt-16">
        <h1 class="text-2xl md:tracking-wide md:leading-10 font-normal capitalize text-gray-700">
          <span class="lg:block ">Login</span>
        </h1>
      </div>

      <div class="my-5 text-gray-700 space-y-3">
        <FormsLogin />
      </div>

      <div class="my-10 flex items-center text-gray-800 space-x-5">
        <button class="border px-4 py-2 border rounded border-gray-300 hover:bg-yellow-200 hover:border-yellow-300" @click="signinWithGithub"> SignIn with Github </button>
        <button class="border px-4 py-2 border rounded border-gray-300 hover:bg-yellow-200 hover:border-yellow-300" @click="signinWithGoogle"> SignIn with Google </button>
      </div>


      </div>
    </div>

  </div>
</template>


<script>

import { getUserFromCookie } from '@/utils/auth'

  export default {
    data() {
      return {
        error: {},
      }
    },
    methods: {
      async signinWithGithub () {
          let that = this
          const provider = new $nuxt.$fireModule.auth.GithubAuthProvider()
          await this.$fire.auth.signInWithPopup(provider)

          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            that.error = {}
            $nuxt.$router.push('/')
          })
          .catch((error) => {
            that.error = error;
          });
      },

      async signinWithGoogle () {
          let that = this
          const provider = new $nuxt.$fireModule.auth.GoogleAuthProvider()
          await this.$fire.auth.signInWithPopup(provider)

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

    asyncData({ req, redirect, app }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      if (user) {
        redirect('/profile')
      }
    } else {
      var user = app.$fire.auth.currentUser
      if (user) {
        redirect('/profile')
      }
    }
  },

  }
</script>

<style lang="scss" scoped>

</style>
