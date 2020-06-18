<template>
  <div class="row">
    <vueHeadful title="ENTR - Прайс-лист" description="Стоимость услуг" />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Прайс-лист</h2>
      <Plenka />
      <Shiroko />
      <Svet />
      <NeSvet />
      <NakatPlen />
    </div>
  </div>
</template>

<script>
import Plenka from '@/components/price/Plenka'
import Shiroko from '@/components/price/Shiroko'
import Svet from '@/components/price/Svet'
import NeSvet from '@/components/price/NeSvet'
import NakatPlen from '@/components/price/NakatPlen'
import vueHeadful from 'vue-headful'

export default {
  components: {
    Plenka,
    Shiroko,
    Svet,
    NeSvet,
    NakatPlen,
    vueHeadful
  }
}
</script>

<style>
table.table {
  border-collapse: separate;
  border-spacing: 4px 4px !important;
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