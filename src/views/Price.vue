<template>
  <div class="row">
    <vueHeadful title="ENTR - Прайс-лист" description="Стоимость услуг" />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Прайс-лист</h2>
      <Design />
      <Plenka />
      <Shiroko />
      <Svet />
      <NeSvet />
      <h3 class="text-uppercase text-left mt-5 bold">ПОСТПЕЧАТНАЯ ОБРАБОТКА, НАКАТКА</h3>
      <NakatPlen />
      <h3 class="text-uppercase text-left mt-5 bold">ВЫВЕСКИ НЕСВЕТОВЫЕ, ТАБЛИЧКИ</h3>
      <NakatPlen2 />
    </div>
  </div>
</template>

<script>
import Design from '@/components/price/Design'
import Plenka from '@/components/price/Plenka'
import Shiroko from '@/components/price/Shiroko'
import Svet from '@/components/price/Svet'
import NeSvet from '@/components/price/NeSvet'
import NakatPlen from '@/components/price/NakatPlen'
import NakatPlen2 from '@/components/price/NakatPlen2'
import vueHeadful from 'vue-headful'

export default {
  components: {
    Design,
    Plenka,
    Shiroko,
    Svet,
    NeSvet,
    NakatPlen,
    NakatPlen2,
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