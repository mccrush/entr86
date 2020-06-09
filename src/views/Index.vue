<template>
  <div>
    <Slider />
    <!-- Решения -->
    <div class="row justify-content-center m-auto" style="max-width: 640px">
      <div class="col-12 mt-5 mb-4">
        <h1 class="blue">Мы реализуем любые</h1>
        <h3>рекламно-производственные задачи</h3>
      </div>

      <div
        v-for="reshen in reshens"
        :key="'rs'+reshen.id"
        class="col-12 d-flex align-items-center mt-3"
        :class="reshen.justify"
        style="overflow-wrap: anywhere;"
      >
        <h3 v-if="reshen.float === 'float-right'" class="text-left ml-3 mr-3" v-html="reshen.title"></h3>
        <img
          :src="'/img/index/icons/'+reshen.icon"
          :class="reshen.float"
          width="80"
          height="80"
          alt
        />
        <h3 v-if="reshen.float === 'float-left'" class="text-left ml-3 mr-3" v-html="reshen.title"></h3>
      </div>
    </div>
    <!-- Конец Решения -->
    <div class="space"></div>
    <!-- Направления -->
    <div class="row justify-content-center m-auto" style="max-width: 720px">
      <div
        v-for="naprav in napravs"
        :key="'np'+naprav.id"
        class="col-12 col-sm-6 col-md-4 d-flex align-items-center justify-content-start mt-4"
      >
        <img
          :src="'/img/index/icons/'+naprav.icon"
          class="float-left mr-3"
          width="80"
          height="80"
          alt
        />
        <h6 class="text-left" v-html="naprav.title"></h6>
      </div>
    </div>
    <!-- Конец Направления -->
    <div class="space"></div>
    <!-- База -->
    <div class="row justify-content-center m-auto" style="max-width: 720px">
      <div class="col-8 mt-4">
        <h3 class="mb-0">Собственная производственная</h3>
        <h1 class="blue">база позволяет нам:</h1>
        <ul class="list-unstyled text-left mt-3">
          <li>1. Контролировать качество на всех этапах</li>
          <li>2. Формировать оптимальные цены</li>
          <li>3. Быть точными в конечном продукте</li>
        </ul>
      </div>

      <div class="col-12 mt-3">
        <h2 class="text-uppercase blue">
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
import Slider from '@/components/index/Slider.vue'
import { napravs } from '@/data/napravs'
import { reshens } from '@/data/reshens'

export default {
  components: {
    Slider
  },
  data() {
    return {
      reshens: [],
      napravs: []
    }
  },
  mounted() {
    this.reshens = reshens
    this.napravs = napravs
  }
}
</script>

<style scoped>
.space {
  height: 50px;
}

.blue {
  color: #00aaee;
}
</style>