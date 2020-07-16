<template>
  <div class="row">
    <div class="col-12 col-lg-10 col-xl-8 m-auto shadow-sm">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-content-center border-bottom p-3">
          <h5 class="m-0 mt-1">Панель администратора</h5>
          <div>
            <!-- <img
              src="@/assets/icons/person-circle.svg"
              alt="Юзерпик"
              class="opacity-06 mr-2"
              height="20"
            />-->
            <span class="text-muted small mr-3">{{'@'+ user.email.split('@')[0]}}</span>
            <button @click="logOut" class="btn btn-sm btn-light">Выйти</button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-2 border-right p-0 min-height-450">
          <h6 class="border-bottom pt-2 pb-2 m-0">
            Коллекции
            <!-- <button
              @click="selectCollection('collections')"
              class="btn btn-sm btn-outline-primary p-0 pl-2 pr-2 ml-1"
            >~</button>-->
          </h6>
          <transition name="fade" mode="out-in">
            <img v-if="loadingCol" src="/img/admin/loading.gif" alt="Loading..." />
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
          <h6 class="border-bottom pt-2 pb-2 m-0">
            Документы
            <button
              @click="createDoc = true; selectDocId=''; doc = {active: true, position: docs.length + 1}"
              class="btn btn-sm btn-outline-primary p-0 pl-2 pr-2 ml-1"
              :disabled="!selectCollectionAlias ? true: false"
              title="Создать документ"
            >+</button>
          </h6>
          <Docs
            v-for="(doc, index) in docs"
            :key="'doc'+ index"
            :doc="doc"
            :selectDocId="selectDocId"
            @select-doc="selectDoc"
          />
        </div>

        <div class="col-8 pt-3 pb-3">
          <transition name="fade" mode="out-in">
            <Form
              v-if="selectCollectionAlias && (selectDocId || createDoc)"
              :doc="doc"
              :collection="selectCollectionAlias"
              :length="docs.length"
              @update-doc="selectCollection"
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
import { mapGetters } from 'vuex'
import { auth } from '@/main.js'
import CollectionsList from '@/components/admin/Collections'
import Docs from '@/components/admin/Docs'
import Form from '@/components/admin/Form'

export default {
  components: {
    CollectionsList,
    Docs,
    Form
  },
  data() {
    return {
      user: auth.currentUser,
      loadingCol: true,
      selectCollectionAlias: '',
      selectDocId: '',
      createDoc: false,
      docs: [],
      doc: {}
    }
  },
  computed: {
    collections() {
      return this.$store.getters.collections
    },
    ...mapGetters([
      'clients',
      'menus',
      'napravs',
      'portfolios',
      'prices',
      'sliders',
      'zadachi'
    ])
  },
  async mounted() {
    try {
      await this.$store.dispatch('getData', 'collections')
      this.loadingCol = false
    } catch (err) {
      console.log('Ошибка при получении коллекций в Админ:', err.message)
    } finally {
    }
  },
  methods: {
    selectCollection(alias) {
      this.createDoc = false
      this.selectDocId = ''
      this.selectCollectionAlias = alias
      this.docs = this[alias]
    },
    selectDoc(id) {
      this.createDoc = false
      this.selectDocId = id
      this.doc = this.docs.find(doc => doc.id === id)
    },
    async logOut() {
      await this.$store.dispatch('logOut')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.btn-outline-primary {
  height: 16px;
  line-height: 1;
}

.opacity-06 {
  opacity: 0.6;
}

.min-height-450 {
  min-height: 450px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>