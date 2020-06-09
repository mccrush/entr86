<template>
  <div class="shadow-sm">
    <div class="container p-0">
      <nav class="navbar navbar-expand-sm navbar-light bg-white">
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
            <li class="nav-item">
              <router-link tag="a" to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" to="/price" class="nav-link">Price</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" to="/portfolio" class="nav-link">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" to="/contacts" class="nav-link">Contacts</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.nav-item a {
  font-weight: bold;
}

.nav-item a.router-link-exact-active.router-link-active {
  color: #ffcc00;
}

.logo {
  margin: -16px 0 -16px 0;
}
</style>