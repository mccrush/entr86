<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Прайс-лист</h2>
      <Plenka />
      <Shiroko />
      <Svet />
    </div>
  </div>
</template>

<script>
import Plenka from '@/components/price/Plenka'
import Shiroko from '@/components/price/Shiroko'
import Svet from '@/components/price/Svet'

export default {
  components: {
    Plenka,
    Shiroko,
    Svet
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