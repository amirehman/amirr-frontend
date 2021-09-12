<template>
  <div>
    <button class="my-10 p-3 border" @click="logout">  Logout </button>
    <pre>
          {{ $nuxt.$fire.auth.currentUser }}
    </pre>

  </div>
</template>

<script>

import { getUserFromCookie } from '@/utils/auth'

export default {

  asyncData({ req, redirect, app }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      if (!user) {
        redirect('/auth/signin')
      }
    } else {
      var user = app.$fire.auth.currentUser
      if (!user) {
        redirect('/auth/signin')
      }
    }
  },

  methods: {
    logout () {
      this.$fire.auth.signOut()
    }
  },

  }
</script>
