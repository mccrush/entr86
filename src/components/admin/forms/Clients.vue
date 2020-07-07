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
      <div class="col-4">
        <transition name="fade" mode="out-in">
          <button
            v-if="doc.id"
            @click="removeDoc"
            type="button"
            class="btn btn-sm btn-block btn-outline-danger"
          >Удалить</button>
        </transition>
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
      alias: this.doc.alias || ''
    }
  },
  methods: {
    async saveDoc() {
      let doc = {}
      if (this.title.trim() && this.alias.trim()) {
        doc = {
          id: this.doc.id || Date.now().toString(),
          title: this.title.trim(),
          alias: this.alias.trim()
        }
        if (this.doc.id) {
          try {
            await this.$store.dispatch('updateDoc', {
              doc,
              collection: this.collection
            })
          } catch (err) {
          } finally {
            this.$emit('update-doc', this.collection)
          }
        } else {
          try {
            await this.$store.dispatch('addDoc', {
              doc,
              collection: this.collection
            })
          } catch (err) {
          } finally {
            this.title = ''
            this.alias = ''
            this.position = +this.position + 1
            this.active = true
            this.img = ''
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
    }
  }
}
</script>