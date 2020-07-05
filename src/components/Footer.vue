<template>
  <div class="bg-dark">
    <div class="container">
      <div class="row text-light text-left">
        <div class="col-12 col-sm-6 pt-3 pb-3">
          <h5>Контакты</h5>
          <p class="mb-2">
            ООО ЭНТР 628415,
            <br />Тюменская область
            <br />ХМАО-Югра г.&nbsp;Сургут,
            <br />ул. Инженерная 1/4
            <br />+7 3462 630 475
            <br />entr86@mail.ru
          </p>
          <a href="https://www.instagram.com/entr86/" target="_blank">
            <img
              src="img/footer/icons/inst3.png"
              class="mr-2"
              alt="Instagram"
              width="40"
              height="40"
            />
          </a>
          <a href="https://vk.com/entrrpk" target="_blank">
            <img src="img/footer/icons/vk.png" alt="Vk" width="40" height="40" />
          </a>
        </div>
        <!-- <div class="d-none d-md-block col-md-2"></div> -->
        <div class="col-12 col-sm-6 pt-3 pb-3 pr-4">
          <h5>Клиенты</h5>
          <div
            class="errow errowLeft position-absolute rounded-circle text-center shadow pt-1"
            @mousedown="scrolLeftStart"
            @mouseup="scrolLeftStop"
            @mouseover="scrolLeftStop"
            @touchstart="scrolLeftStart"
            @touchend="scrolLeftStop"
          >&laquo;</div>
          <div
            class="errow errowRight position-absolute rounded-circle text-center shadow pt-1"
            @mousedown="scrolRightStart"
            @mouseup="scrolRightStop"
            @mouseover="scrolRightStop"
            @touchstart="scrolRightStart"
            @touchend="scrolRightStop"
          >&raquo;</div>
          <div class="overflow-hidden ower" ref="clients">
            <div class="row">
              <div class="col-12 d-flex">
                <img
                  v-for="i in 11"
                  :key="'ci'+i"
                  :src="'img/footer/clients/'+i+'.png'"
                  class="pr-2 pb-2 no-select"
                  :alt="'Client '+i"
                  width="90"
                  height="90"
                  draggable="false"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex">
                <img
                  v-for="i in 11"
                  :key="'ci'+i"
                  :src="'img/footer/clients2/'+i+'.png'"
                  class="pr-2 pb-2 no-select"
                  :alt="'Client '+i"
                  width="90"
                  height="90"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-light text-left mb-3">© 2020 entr86.ru</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: null,
      timeRight: null
    }
  },
  methods: {
    scrolLeftStart() {
      this.timeLeft = setInterval(() => {
        if (this.$refs.clients.scrollLeft > 0) {
          this.$refs.clients.scrollLeft = this.$refs.clients.scrollLeft - 3
        } else {
          clearInterval(this.timeLeft)
        }
      }, 20)
    },
    scrolLeftStop() {
      clearInterval(this.timeLeft)
    },
    scrolRightStart() {
      this.timeRight = setInterval(() => {
        if (this.$refs.clients.scrollLeft < 704) {
          this.$refs.clients.scrollLeft = this.$refs.clients.scrollLeft + 3
        } else {
          clearInterval(this.timeRight)
        }
      }, 20)
    },
    scrolRightStop() {
      clearInterval(this.timeRight)
    }
  },
  mounted() {
    const slider = document.querySelector('.ower')
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mousedown', e => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })
    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('mousemove', e => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = x - startX
      slider.scrollLeft = scrollLeft - walk
    })
    //
    slider.addEventListener('touchstart', e => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })
    slider.addEventListener('touchcancel', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('touchend', () => {
      isDown = false
      slider.classList.remove('active')
    })
    slider.addEventListener('touchmove', e => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = x - startX
      slider.scrollLeft = scrollLeft - walk
    })
  }
}
</script>

<style scoped>
h5 {
  font-family: 'Cera Pro Regular';
}

.errow {
  width: 40px;
  height: 40px;
  background: #ffffff;
  /* color: #ffcc00; */
  color: #343a40;
  z-index: 99;
  top: 115px;
  opacity: 0.9;
  cursor: pointer;
  user-select: none;
  transition: 0.5s;
  font-size: 1.4rem;
}

.errowLeft {
  left: 10px;
}

.errowRight {
  right: 20px;
}

.no-select {
  user-select: none;
}
</style>