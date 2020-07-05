<template>
  <div class="row justify-content-center m-auto" style="max-width: 720px">
    <router-link
      tag="a"
      v-for="naprav in napravs"
      :key="'np'+naprav.id"
      :to="{path: '/price', hash: '#'+naprav.type}"
      class="col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-start mt-4 napravLink"
    >
      <img
        :src="'/img/index/icons/'+naprav.icon"
        class="float-left mr-3"
        width="76"
        height="76"
        alt
      />
      <h5 class="text-left" v-html="naprav.title"></h5>
    </router-link>
  </div>
</template>

<script>
import napravs from '@/data/napravs'
export default {
  data() {
    return {
      napravs
    }
  }
}
</script>

<style scoped>
.napravLink {
  cursor: pointer;
  top: 0;
  transition: 0.3s;
  text-decoration: none;
  color: #2c3e50;
}

.napravLink:hover {
  top: -4px;
}
</style>