<template>
  <div class="row">
    <div class="col-12 col-lg-10 col-xl-8 m-auto">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-content-center border-bottom pb-2">
          <h5>Панель администратора</h5>
          <button class="btn btn-sm btn-light">Выйти</button>
        </div>
      </div>
      <div class="row">
        <div class="col-2 border-right p-0">
          <Collections />
        </div>
        <div class="col-2 border-right p-0">
          <Docs />
        </div>
        <div class="col-8">
          <component v-if="component" :is="component" />
          <h5 v-else>Выберите Документ</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Collections from '@/components/admin/Collections'
import Docs from '@/components/admin/Docs'
import Slider from '@/components/admin/forms/Slider'
import Zadachi from '@/components/admin/forms/Zadachi'

export default {
  components: {
    Collections,
    Docs,
    Slider,
    Zadachi
  },
  computed: {
    component() {
      return this.$route.hash.split('#')[1] || ''
    }
  }
}
</script>