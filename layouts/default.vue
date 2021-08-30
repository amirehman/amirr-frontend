<template>
  <div>
    <div class="container mx-auto">

      <nav class="navbar flex items-center w-full justify-between text-gray-700 mt-5 px-5 md:px-12">

        <ul class="flex lg:hidden lg:items-center font-normal text-gray-800">
          <li class="pr-5">
            <h1 class="capitalize text-2xl tracking-wide font-semibold select-none">
              <nuxt-link to="/" class="not-active">Aamir R.</nuxt-link>
            </h1>
          </li>
        </ul>

        <MenusMainMenu />

        <MenusTopRightMenu />

        <ul class="flex lg:hidden items-center font-normal text-gray-800">
            <li class="cursor-pointer" @click="isActive(!isMenuActive)">
                <svg class="fill-current w-8 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385"><path d="M12 84h361a12 12 0 000-24H12a12 12 0 000 24zM373 180H12a12 12 0 000 25h361a12 12 0 000-25zM373 301H12a12 12 0 000 24h361a12 12 0 000-24z"/></svg>
            </li>
        </ul>
      </nav>

      <section class="px-5 md:px-12">
        <nuxt/>
      </section>


      <WidgetsNewsletterFullWidth />

      <footer class="bg-green-50 p-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 flex">

          <div class="flex items-center justify-center lg:justify-start text-center lg:text-left">
            <div>
              <span class="block font-semibold text-2xl text-gray-800">Aamir R.</span>
              <p class="block text-sm text-gray-700">
                <span class="block italic">Copyright © <a href="/" class="hover:text-yellow-500">Amirr.Net</a> </span>
                <span class="block">All themes, templates, Clones and snippets created, design and maintained by Amir Rehman. licensed MIT</span>
              </p>
            </div>
          </div>
          <!-- column -->

          <div class="social flex items-center justify-center order-2 lg:order-1">
            <div>

              <MenusFooterSocial />

              <div class="mt-8 lg:mt-4 flex items-center justify-center text-gray-800">
                <nuxt-link to="/" class="not-active text-lg lg:text-sm flex items-center space-x-2">
                  <span class="block mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6" viewBox="0 0 512 512"><path d="M395 203H96c-18 0-32 14-32 32v21c0 76 42 145 110 180a11 11 0 009-19c-60-31-98-93-98-161v-21c0-6 5-11 11-11h299c6 0 10 5 10 11v21c0 68-37 130-98 161a11 11 0 0010 19c68-35 110-104 110-180v-21c0-18-15-32-32-32z"/><path d="M490 423c-2-4-6-7-10-7H11a11 11 0 00-8 18l24 24c14 14 33 22 53 22h331c20 0 39-8 53-22l24-24c3-3 4-7 2-11zm-41 20a53 53 0 01-38 16H80c-14 0-28-6-38-16l-6-6h418l-5 6zM491 253c-28-18-74 2-79 4a11 11 0 008 19c11-4 44-15 60-5 7 5 11 14 11 28 0 42-86 68-120 75l-7 1a11 11 0 104 21l7-2c6-1 137-26 137-95 0-22-7-37-21-46zM328 113c18-21 18-55 0-77-3-5-10-5-15-2-4 4-5 11-1 15 11 14 11 37 0 51a64 64 0 000 77 11 11 0 0015 2c4-4 5-10 1-15a43 43 0 010-51zM264 113c18-21 18-55 0-77a11 11 0 10-16 13c11 14 11 37 0 51a64 64 0 000 77 11 11 0 0015 2c4-4 5-10 1-15a43 43 0 010-51zM200 113c18-21 18-55 0-77-3-5-10-5-15-2-4 4-5 11-1 15 11 14 11 37 0 51a64 64 0 000 77 11 11 0 0015 2c4-4 5-10 1-15a43 43 0 010-51z"/></svg>
                  </span>
                  <span class="block">Buy Me a Coffee</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- column -->

          <div class="links flex items-center justify-center text-center lg:text-left lg:justify-end order-1 lg:order-2 my-6 lg:my-12 lg:my-0">
            <div>
              <div class="mb-2 text-xl lg:text-lg font-medium">Resources</div>
              <MenusFooterMenu />
            </div>
          </div>
          <!-- column -->


        </div>
      </footer>

    </div>

  </div>
</template>

<script>

import Cookies from 'js-cookie'

export default {
  computed: {
    isMenuActive () {
      return this.$store.state.isMenuActive
    }
  },
  mounted() {
    this.setupFirebase()
  },
  methods: {

    setupFirebase() {
      this.$fire.auth.onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          this.$fire
            .auth
            .currentUser.getIdToken(true)
            .then(token => Cookies.set('access_token', token))
          this.loggedIn = true
        } else {
          Cookies.remove('access_token')
          // if (Cookies.set('access_token', 'blah')) {
          // }
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },

    isActive (status) {
      this.$store.commit('isMenuActive', status)
    }
  },
}
</script>
