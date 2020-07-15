<template>
  <div class="nav-border">
    <div class="container p-0">
      <nav class="navbar navbar-expand-sm navbar-light bg-white pb-2">
        <router-link to="/" tag="a" class="navbar-brand">
          <img src="/logo.gif" class="logo" height="64" alt="logo" loading="lazy" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <transition name="fade" appear>
            <ul v-if="menus.length" class="navbar-nav mr-auto text-uppercase">
              <li v-for="(menu, index) in menus" :key="'nmu'+index" class="nav-item">
                <router-link tag="a" :to="'/'+menu.alias" class="nav-link">{{menu.title}}</router-link>
              </li>

              <!-- <li class="nav-item">
              <router-link tag="a" to="/price" class="nav-link">Прайс-лист</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" to="/portfolio" class="nav-link">Портфолио</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" to="/contacts" class="nav-link">Контакты</router-link>
              </li>-->
            </ul>
          </transition>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menus']
}
</script>

<style scoped>
.nav-border {
  border-bottom: 4px solid #000;
  box-shadow: 0 0 0 8px #ffcc00;
}
.nav-item a {
  font-weight: bold;
  font-size: 0.9rem;
}

.nav-item a.router-link-exact-active.router-link-active {
  color: #ffcc00;
}

.logo {
  margin: -30px 0 -16px 0;
}
</style>