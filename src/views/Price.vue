<template>
  <div class="row">
    <vueHeadful title="ENTR - Прайс-лист" description="Стоимость услуг" />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Прайс-лист</h2>
      <!-- <Design /> -->
      <div class="overflow-auto">
        <table class="table table-sm table-borderless mt-2">
          <tr>
            <td colspan="12" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-ping" id="design">Дизайн</h5>
                </div>
                <div class="p-2 flex-fill">
                  <div class="bg-ping line">&nbsp;</div>
                </div>
                <div class>
                  <img src="img/price/icons/p0.png" alt width="96" height="96" class />
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="6" class="text-left">Разработка и дизайн Бренд-бука</td>
            <td colspan="6" class="text-right text-nowrap">от 10 000 &#x20bd;</td>
          </tr>
          <tr>
            <td
              colspan="6"
              class="text-left"
            >Разработка анимации логотипа (с использованием 2d и 3d графики)</td>
            <td colspan="6" class="text-right text-nowrap">от 5000 &#x20bd;/см</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Дизайн логотипа</td>
            <td colspan="6" class="text-right text-nowrap">от 5000 &#x20bd;/шт</td>
          </tr>
        </table>
      </div>
      <!-- <Plenka /> -->
      <div class="overflow-auto">
        <table class="table table-sm table-borderless mt-3">
          <tr>
            <td colspan="12" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-blue" id="plenka">Печать на пленке</h5>
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
            <td
              colspan="6"
              class="text-left bg-blue rounded-lg text-light pl-2"
              width="45%"
            >Материал</td>
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
      <!-- <Shiroko /> -->
      <div class="overflow-auto">
        <table class="table table-sm table-borderless mt-5">
          <tr>
            <td colspan="12" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-ping" id="shiroko">Широкоформатная печать</h5>
                </div>
                <div class="p-2 flex-fill">
                  <div class="bg-ping line">&nbsp;</div>
                </div>
                <div class>
                  <img src="img/price/icons/p2.png" alt width="96" height="96" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colspan="6"
              class="text-left bg-ping rounded-lg text-light pl-2"
              width="45%"
            >Материал</td>
            <td class="bg-dark rounded-lg text-light pl-3 pr-3">DPI</td>
            <td class="bg-ping rounded-lg text-light fs-08">Цена за м2</td>
            <td class="bg-dark rounded-lg text-light pl-3 pr-3">DPI</td>
            <td class="bg-ping rounded-lg text-light fs-08">Цена за м2</td>
            <td class="bg-dark rounded-lg text-light pl-3 pr-3">DPI</td>
            <td class="bg-ping rounded-lg text-light fs-08">Цена за м2</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Баннер (340 гр.)</td>
            <td>720</td>
            <td class="text-nowrap">150 &#x20bd;</td>
            <td>1080</td>
            <td class="text-nowrap">180 &#x20bd;</td>
            <td>1440</td>
            <td class="text-nowrap">210 &#x20bd;</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Баннер (440 гр.)</td>
            <td>720</td>
            <td class="text-nowrap">180 &#x20bd;</td>
            <td>1080</td>
            <td class="text-nowrap">210 &#x20bd;</td>
            <td>1440</td>
            <td class="text-nowrap">250 &#x20bd;</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Баннер (литой 550 гр.)</td>
            <td>720</td>
            <td class="text-nowrap">220 &#x20bd;</td>
            <td>1080</td>
            <td class="text-nowrap">250 &#x20bd;</td>
            <td>1440</td>
            <td class="text-nowrap">280 &#x20bd;</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Транслюцентный баннер</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1440</td>
            <td class="text-nowrap">800 &#x20bd;</td>
          </tr>
        </table>

        <table class="table table-sm table-borderless">
          <tr>
            <td colspan="4" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-ping">Дополнительные услуги</h5>
                </div>
                <div class="p-2 flex-fill">
                  <div class="bg-ping line">&nbsp;</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-left">Резка по изображению</td>
            <td class="bg-ping rounded-lg text-light">Цена за 1 п.м. 4 &#x20bd;</td>
            <td class="text-left pl-3">Установка люверсов</td>
            <td class="bg-ping rounded-lg text-light">Цена за 1 шт 5 &#x20bd;</td>
          </tr>
        </table>
      </div>
      <!-- <Svet /> -->
      <div class="overflow-auto">
        <table class="table table-sm table-borderless mt-5">
          <tr>
            <td colspan="12" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-blue" id="svet">Световая реклама</h5>
                </div>
                <div class="p-2 flex-fill">
                  <div class="bg-blue line">&nbsp;</div>
                </div>
                <div class>
                  <img src="img/price/icons/p3.png" alt width="96" height="96" class />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colspan="6"
              class="text-left bg-blue rounded-lg text-light pl-2"
              width="45%"
            >Материал</td>
            <td colspan="6"></td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Световой короб с транслюцентным баннером</td>
            <td colspan="6" class="text-right text-nowrap">от 10 000 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Световой короб инкрустация композит (орг. стекло)</td>
            <td colspan="6" class="text-right text-nowrap">от 14 000 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Световые буквы</td>
            <td colspan="6" class="text-right text-nowrap">от 110 &#x20bd;/см</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Консоль кранштейн 2-х сторонняя</td>
            <td colspan="6" class="text-right text-nowrap">от 14 000 &#x20bd;/шт</td>
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
            <td class="text-left" width="30%">Согласование рекламных конструкций</td>
            <td width="20%" class="text-right">от 10 000 &#x20bd;/шт</td>
            <td class="text-left pl-3 border-left" width="30%">Фрезеровка ПВХ</td>
            <td width="20%" class="text-right">30 &#x20bd;/п.м.</td>
          </tr>
          <tr>
            <td class="text-left">Фрезеровка акрил, композит</td>
            <td class="text-right">35 &#x20bd;/п.м.</td>
            <td class="text-left pl-3 border-left">Замена блока питания 100 Вт</td>
            <td class="text-right">4500 &#x20bd;/шт</td>
          </tr>
        </table>
      </div>
      <!-- <NeSvet /> -->
      <div class="overflow-auto">
        <table class="table table-sm table-borderless mt-5">
          <tr>
            <td colspan="12" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-ping" id="nesvet">Несветовая реклама</h5>
                </div>
                <div class="p-2 flex-fill">
                  <div class="bg-ping line">&nbsp;</div>
                </div>
                <div class>
                  <img src="img/price/icons/p4.png" alt width="96" height="96" class />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colspan="6"
              class="text-left bg-ping rounded-lg text-light pl-2"
              width="45%"
            >Материал</td>
            <td colspan="6"></td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Плоские буквы ПВХ 5мм</td>
            <td colspan="6" class="text-right text-nowrap">от 15 &#x20bd;/см</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Плоские буквы ПВХ 10мм</td>
            <td colspan="6" class="text-right text-nowrap">от 18 &#x20bd;/см</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Изготовление пресс-волл+баннер 3*2</td>
            <td colspan="6" class="text-right text-nowrap">от 6500 &#x20bd;/шт</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Ростовая фигура</td>
            <td colspan="6" class="text-right text-nowrap">от 4000 &#x20bd;/шт</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Штендер 2-х сторонний</td>
            <td colspan="6" class="text-right text-nowrap">от 3500 &#x20bd;/шт</td>
          </tr>
          <tr>
            <td colspan="6" class="text-left">Стенд с карманами (композит)</td>
            <td colspan="6" class="text-right text-nowrap">от 2000 &#x20bd;</td>
          </tr>
        </table>
      </div>
      <h3 class="text-uppercase text-left mt-5 bold">ПОСТПЕЧАТНАЯ ОБРАБОТКА, НАКАТКА</h3>
      <!-- <NakatPlen /> -->
      <div class="overflow-auto">
        <table class="table table-sm table-borderless mt-2">
          <tr>
            <td colspan="12" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-blue" name="nakatplen">Накатка пленки</h5>
                </div>
                <div class="p-2 flex-fill">
                  <div class="bg-blue line">&nbsp;</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colspan="6"
              class="text-left bg-blue rounded-lg text-light pl-2"
              width="45%"
            >Материал</td>
            <td colspan="6"></td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">Ламинация пленкой 85 мкм (мат)</td>
            <td colspan="4" class="text-right text-nowrap">600 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">Накатка на ПВХ (пленка с печатью)</td>
            <td colspan="4" class="text-right text-nowrap">450 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">Накатка на оргстекло (пленка с печатью)</td>
            <td colspan="4" class="text-right text-nowrap">550 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">Накатка на композит (пленка с печатью)</td>
            <td colspan="4" class="text-right text-nowrap">550 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">Накатка на витрины-стекло (пленка с печатью)</td>
            <td colspan="4" class="text-right text-nowrap">600 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">Накатка на борта автотранспорта (пленка с печатью)</td>
            <td colspan="4" class="text-right text-nowrap">650 &#x20bd;/м2</td>
          </tr>
        </table>
      </div>
      <h3 class="text-uppercase text-left mt-5 bold">ВЫВЕСКИ НЕСВЕТОВЫЕ, ТАБЛИЧКИ</h3>
      <!-- <NakatPlen2 /> -->
      <div class="overflow-auto">
        <table class="table table-sm table-borderless mt-2">
          <tr>
            <td colspan="12" class="text-left">
              <div class="d-flex justify-content-between align-items-end">
                <div class>
                  <h5 class="text-nowrap m-0 color-ping" id="nakatplen2">Накатка пленки</h5>
                </div>
                <div class="p-2 flex-fill">
                  <div class="bg-ping line">&nbsp;</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colspan="6"
              class="text-left bg-ping rounded-lg text-light pl-2"
              width="45%"
            >Материал</td>
            <td colspan="6"></td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">ПВХ 3мм с интерьерной печатью</td>
            <td colspan="2" class="text-right text-nowrap">720 DPI</td>
            <td colspan="2" class="text-right text-nowrap">1800 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">ПВХ 6мм с интерьерной печатью</td>
            <td colspan="2" class="text-right text-nowrap">720 DPI</td>
            <td colspan="2" class="text-right text-nowrap">2200 &#x20bd;/м2</td>
          </tr>
          <tr>
            <td colspan="8" class="text-left">Панель композитная</td>
            <td colspan="2" class="text-right text-nowrap">720 DPI</td>
            <td colspan="2" class="text-right text-nowrap">2500 &#x20bd;/м2</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import Design from '@/components/price/Design'
// import Plenka from '@/components/price/Plenka'
// import Shiroko from '@/components/price/Shiroko'
// import Svet from '@/components/price/Svet'
// import NeSvet from '@/components/price/NeSvet'
// import NakatPlen from '@/components/price/NakatPlen'
// import NakatPlen2 from '@/components/price/NakatPlen2'
import vueHeadful from 'vue-headful'

export default {
  // components: {
  //   Design,
  //   Plenka,
  //   Shiroko,
  //   Svet,
  //   NeSvet,
  //   NakatPlen,
  //   NakatPlen2,
  //   vueHeadful
  // }
  components: {
    vueHeadful
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