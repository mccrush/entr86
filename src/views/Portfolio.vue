<template>
  <div class="row">
    <vueHeadful title="ENTR - Портфолио"
      description="Наружная реклама – играет значительную роль в бизнесе. Для печати рекламных изображений используется большое количество разнообразных материалов, включая ткани, бумагу и самоклеящуюся пленку." />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Портфолио</h2>
      <div v-if="portfolios.length">
        <div v-for="(portfolio, index) in portfolios" :key="'ptr'+index" class="row">
          <div class="col-12 mt-3">
            <h3 class="text-uppercase text-left mt-2 bold">{{portfolio.title}}</h3>
            <img :src="portfolio.img.url" :alt="portfolio.title" width="100%" min-height="305" />
            <div class="text-left mt-2" v-html="portfolio.desc"></div>
          </div>
        </div>
      </div>
      <img v-else-if="loading" src="/img/admin/loading.gif" alt="Loading..." />
    </div>
  </div>
</template>

<script>
  import vueHeadful from 'vue-headful'

  export default {
    components: {
      vueHeadful,
    },
    data() {
      return {
        loading: true,
      }
    },
    computed: {
      portfolios() {
        return this.$store.getters.portfolios
      },
    },
  }
</script>

<style scoped>
</style>