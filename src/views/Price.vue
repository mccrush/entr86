<template>
  <div class="row">
    <vueHeadful title="ENTR - Прайс-лист" description="Стоимость услуг" />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Прайс-лист</h2>
      <!-- <h3 class="text-uppercase text-left mt-5 bold">ПОСТПЕЧАТНАЯ ОБРАБОТКА, НАКАТКА</h3> -->
      <div v-if="prices.length" class="overflow-auto">
        <div
          v-for="(price, index) in prices"
          :key="'prc'+ index"
          v-html="price.desc"
          class="mt-3"
          :id="price.alias"
        ></div>
      </div>
      <img v-else-if="loading" src="/img/admin/loading.gif" alt="Loading..." />
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'

export default {
  components: {
    vueHeadful
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    prices() {
      return this.$store.getters.prices
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('getData', 'prices')
    } catch (err) {
      console.log('Ошибка при получении Прайсов:', err.message)
    } finally {
      this.loading = false
    }
    // Прокрутка до нужного раздела
    if (this.$route.hash) {
      let elem = document.querySelector(this.$route.hash)
      elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style>
table.table {
  border-collapse: separate;
  border-spacing: 4px 4px !important;
}

table.table {
  min-width: 560px;
}

table.table td {
  vertical-align: middle;
}

div.line {
  height: 4px;
}

.fs-08 {
  font-size: 0.8rem;
}
</style>