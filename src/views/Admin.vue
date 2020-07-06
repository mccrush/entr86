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
          <h6 class="border-bottom pt-2 pb-2 m-0">Коллекции</h6>
          <transition name="fade" mode="out-in">
            <img v-if="loading" src="/img/admin/loading.gif" alt="Loading..." />
            <div v-else>
              <Collections
                v-for="(collection, index) in collections"
                :key="'cole'+ index"
                :collection="collection"
                :selectCollectionAlias="selectCollectionAlias"
                @select-collection="selectCollection"
              />
            </div>
          </transition>
        </div>
        <div class="col-2 border-right p-0">
          <h6 class="border-bottom pt-2 pb-2 m-0">Документы</h6>
          <transition name="fade" mode="out-in">
            <img v-if="loading" src="/img/admin/loading.gif" alt="Loading..." />
            <div v-else>
              <Docs
                v-for="(doc, index) in docs"
                :key="'doc'+ index"
                :doc="doc"
                :selectDocAlias="selectDocAlias"
                @select-doc="selectDoc"
              />
            </div>
          </transition>
        </div>
        <div class="col-8">
          <transition name="fade" mode="out-in">
            <component v-if="selectCollectionAlias && selectDocAlias" :is="selectCollectionAlias" />
            <h5 v-else-if="!selectCollectionAlias">Выберите Коллекцию</h5>
            <h5 v-else>Выберите Документ</h5>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Collections from '@/components/admin/Collections'
import Docs from '@/components/admin/Docs'
import Sliders from '@/components/admin/forms/Sliders'
import Zadachi from '@/components/admin/forms/Zadachi'

export default {
  components: {
    Collections,
    Docs,
    Sliders,
    Zadachi
  },
  data() {
    return {
      loading: true,
      selectCollectionAlias: '',
      selectDocAlias: '',
      docs: []
    }
  },
  computed: {
    collections() {
      return this.$store.getters.collections
    },
    sliders() {
      return this.$store.getters.sliders
    },
    zadachi() {
      return this.$store.getters.zadachi
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('getData', 'collections')
      await this.$store.dispatch('getData', 'sliders')
      await this.$store.dispatch('getData', 'zadachi')
    } catch (err) {
      console.log('Ошибка при получении данных в Админ:', err.message)
    } finally {
      this.loading = false
    }
  },
  methods: {
    selectCollection(alias) {
      this.selectDocAlias = ''
      this.selectCollectionAlias = alias
      switch (alias) {
        case 'sliders':
          this.docs = this.sliders
          break
        case 'zadachi':
          this.docs = this.zadachi
          break
      }
    },
    selectDoc(alias) {
      this.selectDocAlias = alias
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>