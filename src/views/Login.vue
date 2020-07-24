<template>
  <div class="p-1 p-lg-5 bg-dark vh-100 bg-image">
    <div class="bg-white shadow-sm rounded-lg admin-block">
      <div class="container-fluid p-3">
        <div class="row">
          <div class="col-12 text-left">
            <form @submit.prevent="login" class>
              <h4 class="text-center mt-2 mb-3">Authorization</h4>
              <label for="email">Email</label>
              <br />
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                required
                v-model="email"
                placeholder="example@mail.ru"
              />
              <br />
              <label for="password">Password</label>
              <div class="input-group">
                <input
                  :type="passType ? 'password' : 'text'"
                  class="form-control form-control-sm"
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
              <button class="btn btn-sm btn-success btn-block" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <Message v-if="error" />
    </transition>
  </div>
</template>

<script>
import { auth } from '@/main.js'
import vueHeadful from 'vue-headful'
import Message from '@/components/Message'

export default {
  components: {
    vueHeadful,
    Message,
  },
  data() {
    return {
      email: '',
      password: '',
      passType: true,
      error: false,
    }
  },
  beforeMount() {
    if (auth.currentUser) {
      this.$router.push('/admin')
    }
  },
  mounted() {
    const jvs = document.querySelector('#jvlabelWrap')
    jvs.classList.add('d-none')
  },
  methods: {
    showError() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 4000)
    },
    async login() {
      const formData = {
        email: this.email,
        password: this.password,
      }

      if (this.email && this.password) {
        try {
          await this.$store.dispatch('logIn', formData)
          this.$router.push('/admin')
        } catch (err) {
          this.showError()
          if (err.code === 'auth/invalid-email') {
            this.$store.commit('addMessage', {
              text: 'Некорректный адрес почты!',
              type: 'bg-danger',
            })
          } else if (err.code === 'auth/invalid-password') {
            this.$store.commit('addMessage', {
              text: 'Некорректный пароль!',
              type: 'bg-danger',
            })
          } else if (err.code === 'auth/wrong-password') {
            this.$store.commit('addMessage', {
              text: 'Неверный пароль!',
              type: 'bg-danger',
            })
          } else if (err.code === 'auth/user-not-found') {
            this.$store.commit('addMessage', {
              text: 'Пользователь с такой почтой не найден',
              type: 'bg-danger',
            })
          } else {
            this.$store.commit('addMessage', {
              text: 'Ошибка: ' + err.code,
              type: 'bg-danger',
            })
          }
        } finally {
        }
      } else {
        this.$store.commit('addMessage', {
          text: 'Ошибка: поля не заполнены',
          type: 'bg-danger',
        })
      }
    },
  },
}
</script>

<style scoped>
.bg-image {
  background-image: url(../assets/img/insert-backdrop.webp);
  background-position: center center;
  background-repeat: no-repeat;
}

.admin-block {
  width: 240px;
  position: absolute;
  top: calc(50% - 170px);
  left: calc(50% - 120px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* *** */
.max-width {
  max-width: 300px;
}

.opacity-06 {
  opacity: 0.6;
}
</style>