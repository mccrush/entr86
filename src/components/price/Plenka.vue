<template>
  <div class="overflow-auto">
    <table class="table table-sm table-borderless mt-3" id="plenka">
      <tr>
        <td colspan="12" class="text-left">
          <div class="d-flex justify-content-between align-items-end">
            <div class>
              <h5 class="text-nowrap m-0 color-blue">Печать на пленке</h5>
            </div>
            <div class="p-2 flex-fill">
              <div class="bg-blue line">&nbsp;</div>
            </div>
            <div class>
              <img src="img/price/icons/p1.png" alt width="96" height="96" class />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="6" class="text-left bg-blue rounded-lg text-light pl-2" width="45%">Материал</td>
        <td class="bg-dark rounded-lg text-light pl-3 pr-3">DPI</td>
        <td class="bg-blue rounded-lg text-light fs-08">Цена за м2</td>
        <td class="bg-dark rounded-lg text-light pl-3 pr-3">DPI</td>
        <td class="bg-blue rounded-lg text-light fs-08">Цена за м2</td>
        <td class="bg-dark rounded-lg text-light pl-3 pr-3">DPI</td>
        <td class="bg-blue rounded-lg text-light fs-08">Цена за м2</td>
      </tr>
      <tr>
        <td colspan="6" class="text-left">Печать на пленке (матовая, глянцевая, прозрачная)</td>
        <td>720</td>
        <td class="text-nowrap">450 &#x20bd;</td>
        <td>1080</td>
        <td class="text-nowrap">550 &#x20bd;</td>
        <td>1440</td>
        <td class="text-nowrap">620 &#x20bd;</td>
      </tr>
      <tr>
        <td colspan="6" class="text-left">Печать на перфорированной пленке</td>
        <td></td>
        <td class="text-nowrap"></td>
        <td></td>
        <td class="text-nowrap"></td>
        <td>1440</td>
        <td class="text-nowrap">460 &#x20bd;</td>
      </tr>
    </table>

    <table class="table table-sm table-borderless">
      <tr>
        <td colspan="4" class="text-left">
          <div class="d-flex justify-content-between align-items-end">
            <div class>
              <h5 class="text-nowrap m-0 color-blue">Дополнительные услуги</h5>
            </div>
            <div class="p-2 flex-fill">
              <div class="bg-blue line">&nbsp;</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-left">Печать обоев</td>
        <td class="bg-blue rounded-lg text-light">Цена за 1 м2 1000 &#x20bd;</td>
        <td class="text-left pl-3">Ламинация пленкой</td>
        <td class="bg-blue rounded-lg text-light">Цена за 1 м2 600 &#x20bd;</td>
      </tr>
      <tr>
        <td class="text-left">Флажная ткань</td>
        <td class="bg-blue rounded-lg text-light">Цена за 1 м2 1100 &#x20bd;</td>
        <td class="text-left pl-3">
          Плоттерная резка
          <br />Резка по изображению
        </td>
        <td class="bg-blue rounded-lg text-light">Цена за 1 м2 600 &#x20bd;</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table.table {
    min-width: 560px;
  }
</style>