export default function({ store, route, redirect, document }) {

  store.commit("isMenuActive", false);
  store.commit("captcha/resetCaptcha");
  store.commit("captcha/generateCaptcha");

}
