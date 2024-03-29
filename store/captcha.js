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
    message: 'Answer to the quesiton to submit',
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
          `Are you a robot or a toaster? I'm having trouble telling the difference.`,
          'This is no place for robots!',
          'Now I have a doubt',
          'Sorry, this captcha is for humans only!',
          `If you're having trouble with the captcha, just remember: robots can't cry.`,
          `Are you a robot, or just really bad at typing?`,
          `Oops, wrong universe! Try again, extraterrestrial.`
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
  },

  resetCaptcha: function(state, payload) {
    state.captcha.status = false
    state.captcha.success = false
    state.captcha.error = false
    state.captcha.message = "Answer to the quesiton to submit"
    state.captcha.input = null
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
