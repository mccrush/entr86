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
        width="80"
        height="80"
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