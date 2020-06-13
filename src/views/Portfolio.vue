<template>
  <div class="row">
    <vueHeadful
      title="ENTR - Портфолио"
      description="Наружная реклама – играет значительную роль в бизнесе. Для печати рекламных изображений используется большое количество разнообразных материалов, включая ткани, бумагу и самоклеящуюся пленку."
    />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Портфолио</h2>
      <div v-for="portfolio in portfolios" :key="'pt'+portfolio.id" class="row">
        <div class="col-12 col-sm-6 mt-3">
          <img :src="'img/portfolio/portfolios/'+portfolio.icon" alt width="100%" />
        </div>
        <div class="col-12 col-sm-6 mt-3">
          <p class="text-left">{{portfolio.title}}</p>
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