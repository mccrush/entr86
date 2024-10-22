<template>
  <div class="row justify-content-center m-auto" style="max-width: 720px">
    <router-link
      v-for="naprav in napravs"
      :key="'np' + naprav.id"
      :to="{ path: '/price', hash: '#' + naprav.alias }"
      class="col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-start mt-4 napravLink"
    >
      <img
        :src="naprav['img.url']"
        class="float-left me-3"
        width="76"
        height="76"
        alt
      />
      <h5 class="d-md-none text-start wraping" v-html="naprav.title"></h5>
      <h6
        class="d-none d-md-block text-start wraping"
        v-html="naprav.title"
      ></h6>
    </router-link>
  </div>
</template>

<script>
export default {
  props: { napravs: Array }
}
</script>

<style scoped>
.napravLink {
  position: relative;
  cursor: pointer;
  top: 0;
  transition: 0.3s;
  text-decoration: none;
  color: #2c3e50;
}

.napravLink:hover {
  top: -4px;
}

.wraping {
  word-break: break-word;
}
</style>