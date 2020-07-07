<template>
  <div class="row">
    <div class="col-12 col-lg-10 col-xl-8 m-auto shadow-sm">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-content-center border-bottom p-3">
          <h5 class="m-0 mt-1">Панель администратора</h5>
          <button class="btn btn-sm btn-light">Выйти</button>
        </div>
      </div>
      <div class="row">
        <div class="col-2 border-right p-0">
          <h6 class="border-bottom pt-2 pb-2 m-0">
            Коллекции
            <button
              @click="selectCollection('collections')"
              class="btn btn-sm btn-outline-primary p-0 pl-2 pr-2 ml-1"
            >~</button>
          </h6>
          <transition name="fade" mode="out-in">
            <img v-if="loading" src="/img/admin/loading.gif" alt="Loading..." />
            <div v-else>
              <CollectionsList
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
          <!-- <div class="d-flex justify-content-between"> -->
          <h6 class="border-bottom pt-2 pb-2 m-0">
            Документы
            <button
              @click="createDoc = true"
              class="btn btn-sm btn-outline-primary p-0 pl-2 pr-2 ml-1"
              :disabled="!selectCollectionAlias ? true: false"
            >+</button>
          </h6>

          <!-- </div> -->
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
        <div class="col-8 pt-3 pb-3">
          <transition name="fade" mode="out-in">
            <component
              v-if="selectCollectionAlias && (selectDocAlias || createDoc)"
              :is="selectCollectionAlias"
            />
            <h5 v-else-if="!selectCollectionAlias">Выберите Коллекцию</h5>
            <h5 v-else>Выберите Документ</h5>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionsList from '@/components/admin/Collections'
import Docs from '@/components/admin/Docs'
import Sliders from '@/components/admin/forms/Sliders'
import Zadachi from '@/components/admin/forms/Zadachi'
import Collections from '@/components/admin/forms/Collections'

export default {
  components: {
    CollectionsList,
    Docs,
    Sliders,
    Zadachi,
    Collections
  },
  data() {
    return {
      loading: true,
      selectCollectionAlias: '',
      selectDocAlias: '',
      createDoc: false,
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
      this.createDoc = false
      this.selectDocAlias = ''
      this.selectCollectionAlias = alias
      switch (alias) {
        case 'collections':
          this.docs = this.collections
          break
        case 'sliders':
          this.docs = this.sliders
          break
        case 'zadachi':
          this.docs = this.zadachi
          break
      }
    },
    selectDoc(alias) {
      this.createDoc = false
      this.selectDocAlias = alias
    }
  }
}
</script>

<style scoped>
.btn-outline-primary {
  height: 16px;
  line-height: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>