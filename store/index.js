export const state = () => ({
  isMenuActive: false,
  user: null
});

export const mutations = {
  isMenuActive: function(state, payload) {
    state.isMenuActive = payload;
  },

  SET_USER(state, user) {
    state.user = user
  },

};

const getters = {
  getUser(state) {
    return state.user
  },
}

export const actions = {

  async onAuthStateChangedAction (state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

      //redirect from here
      this.$router.push({
        path: '/auth/signin',
      })
    } else {
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
    }
  },



};
