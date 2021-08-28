export const state = () => ({
  isMenuActive: false
});

export const mutations = {
  isMenuActive: function(state, payload) {
    state.isMenuActive = payload;
  },
};

export const actions = {

  // updateMegaMenuStatusAction: function({ commit }, payload) {
  //   commit("mutateMegaMenuStatus", payload);
  // },

};
