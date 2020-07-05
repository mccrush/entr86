<template>
  <div class="row justify-content-center m-auto" style="max-width: 640px">
    <div class="col-12 mt-5 mb-4">
      <h1 class="color-blue mb-0 fs-35">Мы реализуем любые</h1>
      <h4 class="bold fs-21">рекламно-производственные задачи</h4>
    </div>

    <div
      v-for="reshen in zadachi"
      :key="'rs'+reshen.id"
      class="col-12 d-flex align-items-center mt-3"
      style="overflow-wrap: anywhere;"
    >
      <img :src="'/img/index/icons/'+reshen.icon" width="76" height="76" alt />
      <h3 class="text-left ml-3 mr-3 bold" v-html="reshen.title"></h3>
    </div>
  </div>
</template>

<script>
import zadachi from '@/data/zadachi'

export default {
  data() {
    return {
      zadachi
    }
  }
}
</script>

