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
      <div class="col-6"></div>
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
              max="42"
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
      <div class="col-12">
        <textarea
          type="text"
          v-model="desc"
          class="form-control form-control-sm"
          placeholder="Описание"
          rows="9"
        ></textarea>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6 text-left">
        <form>
          <div class="form-group">
            <label for="img">Изображение</label>
            <input type="file" class="form-control-file" id="img" />
          </div>
        </form>
      </div>
      <div class="col-6">
        <img :src="img" alt="Изображение" class height="76" />
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
      desc: this.doc.desc || '',
      position: +this.doc.position || this.length + 1,
      active: this.doc.active ? true : false,
      img: this.doc.img || '/img/admin/image.svg'
    }
  },
  methods: {
    async uploadImage(e) {
      const file = e.target.files[0]
      let storageRef = storage.ref()
      let imagesRef = storageRef.child(
        this.collection + '/' + this.doc.id + '/' + file.name
      )
      const snapshot = await imagesRef.put(file)
      this.img = await snapshot.ref.getDownloadURL()
    },
    async saveDoc() {
      let doc = {}
      if (this.title.trim()) {
        doc = {
          id: this.doc.id || Date.now().toString(),
          title: this.title.trim(),
          desc: this.desc,
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
            this.desc = ''
            this.position = +this.position + 1
            this.active = true
            this.img = '/img/admin/image.svg'
          }
        }
      } else {
        // Выделить поле красной рамкой
        console.log('Заполните все поля:', doc)
      }
    },
    async removeDoc(id, collections) {
      if (confirm('Точно удалить?')) {
        try {
          await this.$store.dispatch('removeDoc', {
            id: this.doc.id,
            collection: this.collection
          })
        } catch (err) {
        } finally {
          this.$emit('update-doc', this.collection)
        }
      }
    }
  },
  watch: {
    doc() {
      this.title = this.doc.title
      this.desc = this.doc.desc
      this.position = +this.doc.position || this.length + 1
      this.active = this.doc.active ? true : false
      this.img = this.doc.img || '/img/admin/image.svg'
    }
  }
}
</script>