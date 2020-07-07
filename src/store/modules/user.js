import { auth } from "@/main.js";
import { db } from "@/main.js";

export default {
  actions: {
    async logIn({ commit, dispatch }, { email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password)
      } catch (err) {
        throw err
      }
    },
    async logOut() {
      await auth.signOut()
    }
  }
}