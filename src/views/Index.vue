<template>
  <div>
    <vueHeadful
      title="ENTR - Рекламное агенство"
      description="Мы реализуем любые рекламно-производственные задачи"
    />
    <Slider />

    <!-- Задачи -->
    <Zadachi />
    <div class="space"></div>

    <!-- Направления -->
    <Napravs />
    <div class="space"></div>

    <!-- База -->
    <div class="row justify-content-center m-auto" style="max-width: 640px">
      <div class="col-12 mt-4">
        <h4 class="mb-0 bold fs-24">Собственная производ&shy;ственная</h4>
        <h1 class="blue fs-38">база позволяет нам:</h1>
        <ul class="list-unstyled text-left mt-3">
          <li>
            <h5>1. Контролировать качество на всех этапах</h5>
          </li>
          <li>
            <h5>2. Формировать оптимальные цены</h5>
          </li>
          <li>
            <h5>3. Быть точными в конечном продукте</h5>
          </li>
        </ul>
      </div>

      <div class="col-12 mt-3">
        <h2 class="text-uppercase color-blue bold fs-31">
          Мы будем рады видеть
          <br />вас в числе
          <br />наших клиентов!
        </h2>
      </div>
    </div>
    <!-- Конец База -->
  </div>
</template>

<script>
import Slider from '@/components/index/Slider'
import Zadachi from '@/components/index/Zadachi'
import Napravs from '@/components/index/Napravs'
import vueHeadful from 'vue-headful'

export default {
  components: {
    Slider,
    Zadachi,
    Napravs,
    vueHeadful
  }
}
</script>

<style>
.space {
  height: 50px;
}

.fs-35 {
  font-size: 3.5rem;
}

.fs-38 {
  font-size: 3.8rem;
}

.fs-31 {
  font-size: 3.1rem;
}

.fs-21 {
  font-size: 2.1rem;
}

.fs-24 {
  font-size: 2.4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>