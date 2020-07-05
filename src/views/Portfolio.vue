<template>
  <div class="row">
    <vueHeadful
      title="ENTR - Портфолио"
      description="Наружная реклама – играет значительную роль в бизнесе. Для печати рекламных изображений используется большое количество разнообразных материалов, включая ткани, бумагу и самоклеящуюся пленку."
    />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Портфолио</h2>
      <div v-for="portfolio in portfolios" :key="'pt'+portfolio.id" class="row">
        <div class="col-12 mt-3">
          <h3 class="text-uppercase text-left mt-2 bold">{{portfolio.title}}</h3>
          <img :src="'img/portfolio/portfolios/'+portfolio.icon" alt width="100%" min-height="306" />
          <p class="text-left mt-2">{{portfolio.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolios } from '@/data/portfolios'
import vueHeadful from 'vue-headful'

export default {
  components: {
    vueHeadful
  },
  data() {
    return {
      portfolios: []
    }
  },
  mounted() {
    this.portfolios = portfolios
  }
}
</script>

<style scoped>
</style>