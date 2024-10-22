<template>
  <div class="row">
    <HeadersTitle title="ENTR - Ошибка 404" description="Страница не найдена" />
    <div class="col-12">
      <h2 class="text-uppercase mt-2 bold">Ошибка 404</h2>
      <h4>Страница не найдена</h4>
      <p>
        <router-link to="/" tag="a">Перейти на главную</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import HeadersTitle from './../components/interface/HeadersTitle.vue'

export default {
  components: {
    HeadersTitle
  }
}
</script>