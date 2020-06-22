<template>
  <div id="app">
    <!-- <Navbar />
    <div class="container pt-4 pb-4">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />-->
    <Dev />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Dev from '@/views/Dev.vue'

export default {
  components: {
    Navbar,
    Footer,
    Dev
  }
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
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
