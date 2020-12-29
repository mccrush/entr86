<template>
  <div id="app">
    <Loader v-if="loading" />

    <div v-else-if="$route.name != 'login' && $route.name != 'admin'">
      <Navbar :menus="menus" />

      <div class="container pt-4 pb-4">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>

      <Footer :clients="clients" />
    </div>

    <div v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Loader from '@/components/Loader'
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  //import Dev from '@/views/Dev' заглушка при режиме разработки

  export default {
    components: {
      Loader,
      Navbar,
      Footer,
      //Dev заглушка при режиме разработки
    },
    data() {
      return {
        navbar: false,
        footer: false,
        loading: true,
      }
    },
    computed: {
      menus() {
        return this.$store.getters.menus.filter((item) => item.active)
      },
      clients() {
        return this.$store.getters.clients
      },
    },
    async beforeMount() {
      try {
        await this.$store.dispatch('getData', 'menus')
        await this.$store.dispatch('getData', 'clients')
        if (this.$route.path === '/') {
          await this.$store.dispatch('getData', 'sliders')
          await this.$store.dispatch('getData', 'zadachi')
          await this.$store.dispatch('getData', 'napravs')
          this.loading = false
          await this.$store.dispatch('getData', 'prices')
          await this.$store.dispatch('getData', 'portfolios')
          await this.$store.dispatch('getData', 'contacts')
        } else if (this.$route.path === '/price') {
          await this.$store.dispatch('getData', 'prices')
          this.loading = false
          await this.$store.dispatch('getData', 'sliders')
          await this.$store.dispatch('getData', 'zadachi')
          await this.$store.dispatch('getData', 'napravs')
          await this.$store.dispatch('getData', 'portfolios')
          await this.$store.dispatch('getData', 'contacts')
        } else if (this.$route.path === '/portfolio') {
          await this.$store.dispatch('getData', 'portfolios')
          this.loading = false
          await this.$store.dispatch('getData', 'sliders')
          await this.$store.dispatch('getData', 'zadachi')
          await this.$store.dispatch('getData', 'napravs')
          await this.$store.dispatch('getData', 'prices')
          await this.$store.dispatch('getData', 'contacts')
        } else if (this.$route.path === '/contacts') {
          await this.$store.dispatch('getData', 'contacts')
          this.loading = false
          await this.$store.dispatch('getData', 'sliders')
          await this.$store.dispatch('getData', 'zadachi')
          await this.$store.dispatch('getData', 'napravs')
          await this.$store.dispatch('getData', 'prices')
          await this.$store.dispatch('getData', 'portfolios')
        } else {
          this.loading = false
          await this.$store.dispatch('getData', 'sliders')
          await this.$store.dispatch('getData', 'zadachi')
          await this.$store.dispatch('getData', 'napravs')
          await this.$store.dispatch('getData', 'prices')
          await this.$store.dispatch('getData', 'portfolios')
          await this.$store.dispatch('getData', 'contacts')
        }
      } catch (err) {
        console.log('Ошибка при получении данных в App:', err.message)
      } finally {
        //this.loading = false
      }
    },
    mounted() {
      setTimeout(() => {
        this.navbar = true
      }, 0)
      setTimeout(() => {
        this.footer = true
      }, 100)

      // alert(
      //   'Сайт работает в демонстрационном режиме. Напоминаем, что необходимо оплатить работу за второй этап разработки'
      // )
    },
  }
</script>

<style>
  @font-face {
    font-family: 'Cera Pro Regular';
    src: url('/fonts/CeraPro-Regular.eot');
    src: url('/fonts/CeraPro-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/CeraPro-Regular.woff') format('woff'),
      url('/fonts/CeraPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cera Round Pro Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Cera Round Pro Regular'),
      url('/fonts/TypeMates-CeraRoundProRegular.woff') format('woff');
  }

  #app {
    font-family: 'Cera Pro Regular';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #app .container {
    max-width: 720px;
  }

  #app h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Cera Round Pro Regular';
    font-weight: bold;
  }

  .space {
    height: 50px;
  }

  .bold {
    font-weight: bold;
  }

  .color-ping {
    color: #e4097d;
  }

  .bg-ping {
    background: #e4097d;
  }

  .color-blue {
    color: #00aaee;
  }

  .bg-blue {
    background: #00aaee;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>