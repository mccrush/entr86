<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12 d-flex justify-content-between border-bottom">
          <h5>Панель администратора</h5>
          <button class="btn btn-sm btn-light">Выйти</button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 border">
          <Collections />
        </div>
        <div class="col-3 border">
          <Docs />
        </div>
        <div class="col-6 border">
          <component :is="component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Collections from '@/components/admin/Collections'
import Docs from '@/components/admin/Docs'
import Slider from '@/components/admin/forms/Slider'

export default {
  components: {
    Collections,
    Docs,
    Slider
  },
  computed: {
    component() {
      return this.$route.hash.split('#')[1] || 'slider'
    }
  }
}
</script>