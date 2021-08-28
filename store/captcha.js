export const state = () => ({
  captcha: {
    num1: null,
    num2: null,
    input: null,
    status: false,
    result: null,
    opreator: null,
    success: false,
    error: false,
    message: 'Answer to the quesiton to subscribe.',
    attempts: 0
  }
});

export const mutations = {

  generateCaptcha: function(state) {
    const methods = ["+","*"];
    var method = methods[Math.floor(Math.random() * methods.length)];

    state.captcha.num1 = Math.floor(Math.random() * 5);
    state.captcha.num2 = Math.floor(Math.random() * 5);
    state.captcha.opreator = method == '*' ? 'x' : method;
    state.captcha.result = eval(`${state.captcha.num2}${method}${state.captcha.num1}`)
  },

  checkCaptcha: function(state, payload) {
    if(payload) {
      if(payload == state.captcha.result) {

        state.captcha.status = true
        state.captcha.error = false
        state.captcha.success = true
        state.captcha.message = "Good! you are a human."

      } else {
        const messages = [
          'Comman man its an easy question!',
          'This is no place for robots!',
          'Now I have a doubt',
          'Come on bro!',
          'Are you robot?'
        ]
        const message = messages[Math.floor(Math.random() * messages.length)];
        state.captcha.status = false
        state.captcha.success = false
        state.captcha.error = true
        state.captcha.message = message
        state.captcha.attempts = state.captcha.attempts+1

      }
    }
  },

  resetAttempts: function(state, payload) {
    state.captcha.attempts = 0
  }
}

export const actions = {

  checkCaptcha ({ commit, state }, payload) {
    if (state.captcha.attempts < 4) {
      commit("checkCaptcha", payload);
    }else{
      commit('generateCaptcha')
      commit('resetAttempts')
    }

  },

};
