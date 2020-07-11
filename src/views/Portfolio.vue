<template>
  <div class="row">
    <vueHeadful
      title="ENTR - Портфолио"
      description="Наружная реклама – играет значительную роль в бизнесе. Для печати рекламных изображений используется большое количество разнообразных материалов, включая ткани, бумагу и самоклеящуюся пленку."
    />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Портфолио</h2>
      <div v-if="portfolios.length">
        <div v-for="(portfolio, index) in portfolios" :key="'ptr'+index" class="row">
          <div class="col-12 mt-3">
            <h3 class="text-uppercase text-left mt-2 bold">{{portfolio.title}}</h3>
            <img :src="portfolio.img.url" :alt="portfolio.title" width="100%" min-height="306" />
            <p class="text-left mt-2">{{portfolio.desc}}</p>
          </div>
        </div>
      </div>
      <img v-else-if="loading" src="/img/admin/loading.gif" alt="Loading..." />
    </div>
  </div>
</template>

<script>
//import { portfolios } from '@/data/portfolios'
import vueHeadful from 'vue-headful'

export default {
  components: {
    vueHeadful
  },
  // data() {
  //   return {
  //     portfolios: []
  //   }
  // },
  // mounted() {
  //   this.portfolios = portfolios
  // }
  data() {
    return {
      loading: true
    }
  },
  computed: {
    portfolios() {
      return this.$store.getters.portfolios
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('getData', 'portfolios')
    } catch (err) {
      console.log('Ошибка при получении Портфолио:', err.message)
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
</style>