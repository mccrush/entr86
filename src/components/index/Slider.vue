<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol v-if="sliders.length" class="carousel-indicators">
      <li
        v-for="(slider, index) in sliders"
        :key="'slde'+index"
        data-target="#carouselExampleIndicators"
        :data-slide-to="index"
        :class="{'active': index === 0}"
      ></li>
      <!-- <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>-->
    </ol>
    <transition name="fade" mode="out-in">
      <div v-if="sliders.length" class="carousel-inner">
        <div
          v-for="(slider, index) in sliders"
          :key="'sld'+index"
          class="carousel-item"
          :class="{'active': index === 0}"
        >
          <img :src="slider.img.url" class="d-block w-100" alt="..." />
        </div>
        <!-- <div class="carousel-item">
        <img src="/img/slider/s1.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="/img/slider/s2.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="/img/slider/s3.png" class="d-block w-100" alt="..." />
        </div>-->
      </div>
    </transition>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  props: ['sliders'],
  // computed: {
  //   sliders() {
  //     return this.$store.getters.sliders
  //   }
  // },
  // async mounted() {
  //   try {
  //     await this.$store.dispatch('getData', 'sliders')
  //   } catch (err) {
  //     console.log('Ошибка при получении Прайсов:', err.message)
  //   } finally {
  //     this.loading = false
  //   }
  //   // Прокрутка до нужного раздела
  //   $('.carousel').carousel({
  //     interval: 5000
  //   })
  // }
  mounted() {
    $('.carousel').carousel({
      interval: 5000
    })
  }
}
</script>

<style scoped>
</style>