<template>
  <form @submit.prevent="saveDoc">
    <div class="row">
      <div class="col-6">
        <input
          type="text"
          v-model="title"
          class="form-control form-control-sm"
          placeholder="Заголовок"
        />
      </div>
      <div class="col-6">
        <input type="text" v-model="alias" class="form-control form-control-sm" placeholder="Алиас" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4">
        <button
          @click="removeDoc"
          type="button"
          class="btn btn-sm btn-block btn-outline-danger"
        >Удалить</button>
      </div>
      <div class="col-4">
        <button type="reset" class="btn btn-sm btn-block btn-light">Очистить</button>
      </div>
      <div class="col-4">
        <button type="submit" class="btn btn-sm btn-block btn-success">Сохранить</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      alias: ''
    }
  },
  methods: {
    saveDoc() {},
    removeDoc() {}
  }
}
</script>