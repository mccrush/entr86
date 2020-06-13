<template>
  <div class="row">
    <vueHeadful
      title="ENTR - Контакты"
      description="г.Сургут, ул. Инженерная 1/4,  тел.: +7 (3462) 630 475, email: entr86@mail.ru"
    />
    <div class="col-12">
      <h2 class="text-uppercase text-left mt-2 bold">Контакты</h2>
      <p class="text-left mb-2">
        ООО ЭНТР 628415,
        <br />Тюменская область
        ХМАО-Югра г.&nbsp;Сургут,
        ул. Инженерная 1/4
        <br />+7 (3462) 630 475
        <br />entr86@mail.ru
      </p>
    </div>
    <div class="col-12 mt-3">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A89e306c63e36ad25612fe85a9ceaac280e7fc91a1acb233fe8de9ab0786d8c9d&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
        class="bg-light"
      ></iframe>
    </div>

    <div class="col-12 mt-4">
      <div class="row">
        <div class="col-12 col-sm-6 mt-4">
          <img src="img/contacts/qr/q1.png" alt="Позвоните нам" width="200" class="mb-4" />
          <div
            class="bg-dark pl-3 pr-3 pt-1 pb-1 mt-3 d-inline-block w-75 rounded justify-content-center m-auto mt-3 position-relative link-block"
          >
            <img src="img/footer/icons/phone_40.png" width="30" heigth="30" class="mr-2 mb-1" />
            <h5 class="text-uppercase text-light mt-2 d-inline-block">
              <a href="tel:+73462630475" target="_blank" class="stretched-link">Позвони нам</a>
            </h5>
          </div>
        </div>
        <div class="col-12 col-sm-6 mt-4">
          <img src="img/contacts/qr/q2.png" alt="Позвоните нам" width="200" class="mb-4" />
          <div
            class="bg-dark pl-3 pr-3 pt-1 pb-1 w-75 rounded justify-content-center m-auto mt-3 position-relative link-block"
          >
            <img src="img/footer/icons/inst3.png" width="30" heigth="30" class="mr-2 mb-1" />
            <h5 class="text-light mt-2 d-inline-block">
              <a
                href="https://www.instagram.com/entr86/"
                target="_blank"
                class="stretched-link"
              >entr86</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'
export default {
  components: {
    vueHeadful
  }
}
</script>

<style scoped>
div.link-block {
  cursor: pointer;
  top: 0;
  transition: 0.3s;
}
div.link-block:hover {
  top: -4px;
}
div.link-block a {
  color: #f8f9fa;
  text-decoration: none;
}
</style>