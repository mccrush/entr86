<template>
  <form @submit.prevent="saveDoc">
    <div class="row">
      <div class="col-6">
        <input
          type="text"
          v-model="title"
          class="form-control form-control-sm"
          placeholder="Заголовок"
          required
        />
      </div>
      <div class="col-6">
        <input
          type="text"
          v-model="alias"
          class="form-control form-control-sm"
          placeholder="Алиас"
          required
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <div class="form-group row">
          <label for="position" class="col-4 pt-1">Позиция</label>
          <div class="col-4">
            <input
              type="number"
              id="position"
              min="0"
              max="20"
              step="1"
              v-model="position"
              class="form-control form-control-sm"
            />
          </div>
          <div class="col-4 pt-1">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="active" id="active" />
              <label class="form-check-label" for="active">Активна</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 text-left"></div>
    </div>
    <div class="row">
      <div class="col-6 text-left">
        <form>
          <div class="form-group">
            <label for="img">Изображение</label>
            <input type="file" class="form-control-file" id="img" />
          </div>
        </form>
      </div>
      <div class="col-6">
        <img src="@/assets/icons/image.svg" alt="Изображение" class height="80" />
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
  props: ['doc', 'collection', 'length'],
  data() {
    return {
      title: this.doc.title || '',
      alias: this.doc.alias || '',
      position: +this.doc.position || this.length + 1,
      active: this.doc.active || true,
      img: this.doc.img || ''
    }
  },
  methods: {
    async saveDoc() {
      let doc = {}
      if (this.title.trim() && this.alias.trim()) {
        doc = {
          id: this.doc.id || Date.now().toString(),
          title: this.title.trim(),
          alias: this.alias.trim(),
          position: +this.position,
          active: this.active,
          img: this.img || ''
        }
        if (this.doc.id) {
          try {
            await this.$store.dispatch('updateDoc', {
              doc,
              collection: this.collection
            })
          } catch (err) {
            console.log('Ошибка при обновлении документа:', err)
          } finally {
            this.$emit('update-doc', this.collection)
            console.log('Документ успешно обновлен')
          }
        } else {
          try {
            await this.$store.dispatch('addDoc', {
              doc,
              collection: this.collection
            })
          } catch (err) {
            console.log('Ошибка при создании документа:', err)
          } finally {
            this.title = ''
            this.alias = ''
            this.position = +this.position + 1
            this.active = true
            this.img = ''
            console.log('Документ успешно создан')
          }
        }
      } else {
        // Выделить поле красной рамкой
        console.log('Заполните все поля:', doc)
      }
    },
    removeDoc() {}
  },
  watch: {
    doc() {
      this.title = this.doc.title
      this.alias = this.doc.alias
      this.position = +this.doc.position || this.length + 1
      this.active = this.doc.active || true
      this.img = this.doc.img
    }
  }
}
</script>