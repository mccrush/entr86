import { auth } from "@/main.js";

export default {
  actions: {
    async logIn({ commit, dispatch }, { email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password)
      } catch (err) {
        throw err
      } finally {
        console.log('Авторизация прошла успешно');
      }
    },
    async logOut() {
      await auth.signOut()
    }
  }
}