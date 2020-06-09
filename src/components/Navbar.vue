<template>
  <!-- <div class="navbar">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>-->

  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <router-link to="/" tag="a" class="navbar-brand">
      <img src="/logo.png" class="logo" height="52" alt="logo" loading="lazy" />
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
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </router-link>
        <router-link tag="li" to="/price" class="nav-item">
          <a class="nav-link" href="#">Price</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-item a.router-link-exact-active {
  color: #42b983;
}

.logo {
  margin: -18px 0 -16px 0;
}
</style>