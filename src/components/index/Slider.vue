<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol v-if="sliders.length" class="carousel-indicators">
      <li v-for="(slider, index) in sliders" :key="'slde'+index" data-target="#carouselExampleIndicators"
        :data-slide-to="index" :class="{'active': index === 0}"></li>
    </ol>

    <div class="carousel-inner">
      <div v-for="(slider, index) in sliders" :key="'sld'+index" class="carousel-item" :class="{'active': index === 0}">
        <img :src="slider.img.url" class="d-block w-100" rel="preload" alt="..." />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  import $ from 'jquery'
  import carousel from 'bootstrap'

  export default {
    props: ['sliders'],
    mounted() {
      $('.carousel').carousel({
        interval: 5000
      })
    }
  }
</script>

<style scoped>
</style>