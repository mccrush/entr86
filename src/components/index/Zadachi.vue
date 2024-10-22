<template>
  <div class="row justify-content-center m-auto" style="max-width: 640px">
    <div class="col-12 mt-5 mb-4">
      <h1 class="color-blue mb-0 fs-35">Мы реализуем любые</h1>
      <h4 class="bold fs-21">рекламно-производственные задачи</h4>
    </div>

    <div
      v-for="zadacha in zadachi"
      :key="'rs' + zadacha.id"
      class="col-12 d-flex align-items-center mt-3"
      style="overflow-wrap: anywhere"
    >
      <img :src="zadacha['img.url']" width="76" height="76" alt="zadacha" />
      <h4 class="d-md-none text-start ms-3 me-3 bold">{{ zadacha.title }}</h4>
      <h3 class="d-none d-md-block text-start ms-3 me-3 bold">
        {{ zadacha.title }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: { zadachi: Array }
}
</script>