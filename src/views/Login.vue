<template>
  <div class="row justify-content-center">
    <vue-headful title="Авторизация" description="Авторизация" />
    <div class="col-12 col-sm-6 col-md-4 col-xl-4 text-left">
      <form @submit.prevent="login" class="mt-5 mb-3 p-3 shadow-sm ml-auto mr-auto max-width">
        <h4 class="text-center mt-2 mb-4">Авторизация</h4>
        <label for="email">Почта</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="email"
          placeholder="example@mail.ru"
        />
        <br />
        <label for="password">Пароль</label>
        <div class="input-group">
          <input
            :type="passType ? 'password' : 'text'"
            class="form-control"
            id="password"
            required
            v-model="password"
            ref="pass"
            maxlength="20"
          />

          <div class="input-group-append">
            <button
              class="btn btn-light p-0 pl-2 pr-2 border"
              type="button"
              @click="passType = !passType"
            >
              <img
                v-if="passType"
                src="@/assets/icons/eye-slash.svg"
                width="24"
                height="24"
                alt="Показать пароль"
                class="opacity-06"
              />
              <img
                v-else
                src="@/assets/icons/eye.svg"
                width="24"
                height="24"
                alt="Скрыть пароль"
                class="opacity-06"
              />
            </button>
          </div>
        </div>
        <br />
        <button class="btn btn-success btn-block" type="submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from '@/main.js'
import vueHeadful from 'vue-headful'

export default {
  components: {
    vueHeadful
  },
  data() {
    return {
      email: '',
      password: '',
      passType: true
    }
  },
  beforeMount() {
    if (auth.currentUser) {
      this.$router.push('/admin')
    }
  },
  methods: {
    async login() {
      const formData = {
        email: this.email,
        password: this.password
      }

      if (this.email && this.password) {
        try {
          await this.$store.dispatch('logIn', formData)

          this.$router.push('/')
        } catch (err) {
          if (err.code === 'auth/invalid-email') {
            this.$store.commit('addMessage', {
              text: 'Некорректный адрес почты!',
              type: 'bg-danger'
            })
          } else if (err.code === 'auth/invalid-password') {
            this.$store.commit('addMessage', {
              text: 'Некорректный пароль!',
              type: 'bg-danger'
            })
          } else if (err.code === 'auth/wrong-password') {
            this.$store.commit('addMessage', {
              text: 'Неверный пароль!',
              type: 'bg-danger'
            })
          } else if (err.code === 'auth/user-not-found') {
            this.$store.commit('addMessage', {
              text: 'Пользователь с такой почтой не найден',
              type: 'bg-danger'
            })
          } else {
            this.$store.commit('addMessage', {
              text: 'Ошибка: ' + err.code,
              type: 'bg-danger'
            })
          }
        }
      } else {
        this.$store.commit('addMessage', {
          text: 'Ошибка: поля не заполнены' + err.code,
          type: 'bg-danger'
        })
      }
    }
  }
}
</script>

<style scoped>
.max-width {
  max-width: 300px;
}

.opacity-06 {
  opacity: 0.6;
}
</style>