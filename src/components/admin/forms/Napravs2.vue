<template>
  <form @submit.prevent="saveDoc">
    <div class="row">
      <div class="col-6">
        <input
          type="text"
          v-model="doc.title"
          class="form-control form-control-sm"
          placeholder="Заголовок"
          required
        />
      </div>
      <div class="col-6">
        <input
          type="text"
          v-model="doc.alias"
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
              v-model="doc.position"
              required
              class="form-control form-control-sm"
            />
          </div>
          <div class="col-4 pt-1">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="doc.active" id="active" />
              <label class="form-check-label" for="active">Активна</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 text-left"></div>
    </div>
    <div class="row">
      <div class="col-6 text-left">
        <div class="form-group">
          <label for="img">Изображение</label>
          <input
            type="file"
            class="form-control-file"
            id="img"
            accept="image/png, image/jpeg"
            :disabled="doc.id ? false : true"
            @change="uploadImage"
          />
        </div>
      </div>
      <div v-if="doc.id" class="col-6">
        <img v-if="doc.img.name" :src="doc.img.url" alt="Изображение" class height="76" />

        <button
          v-if="doc.img.name"
          class="btn btn-sm btn-light position-absolute"
          type="button"
          @click="removeImage"
        >Удалить</button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4">
        <transition name="fade" mode="out-in">
          <button
            @click="removeDoc"
            type="button"
            class="btn btn-sm btn-block btn-outline-danger"
            :disabled="doc.id ? false : true"
          >Удалить</button>
        </transition>
      </div>
      <div class="col-4">
        <!-- <button
          type="reset"
          class="btn btn-sm btn-block btn-light"
        >Очистить</button>-->
      </div>
      <div class="col-4">
        <button type="submit" class="btn btn-sm btn-block btn-success">Сохранить</button>
      </div>
    </div>
  </form>
</template>

<script>
import { storage } from '@/main.js'

export default {
  props: ['doc', 'collection', 'length'],
  data() {
    return {
      change: false
    }
  },
  mounted() {
    if (this.change) {
      window.onbeforeunload = function() {
        return 'Прежде чем покинуть страницу, удалите изображение!'
      }
    }
  },
  methods: {
    async removeImage() {
      let storageRef = storage.ref()
      let imagesRef = storageRef.child(
        this.collection + '/' + this.doc.id + '/' + this.doc.img.name
      )
      await imagesRef.delete()
      this.doc.img.url = ''
      this.doc.img.name = ''
    },
    async uploadImage(e) {
      const file = e.target.files[0]
      if (file) {
        this.change = true
        this.doc.img.url = '/img/admin/loading-image.gif'
        this.doc.img.name = file.name
        let storageRef = storage.ref()
        let imagesRef = storageRef.child(
          this.collection + '/' + this.doc.id + '/' + file.name
        )
        try {
          const snapshot = await imagesRef.put(file)
          this.doc.img.url = await snapshot.ref.getDownloadURL()
          await this.$store.dispatch('updateImageFill', {
            collection: this.collection,
            id: this.doc.id,
            img: this.doc.img
          })
        } catch (err) {
        } finally {
          console.log('Изображение успешно загружено')
        }
      }
    },
    async saveDoc() {
      let doc = {}
      if (this.doc.title.trim() && this.doc.alias.trim()) {
        doc = {
          id: this.doc.id || Date.now().toString(),
          title: this.doc.title.trim(),
          alias: this.doc.alias.trim(),
          position: +this.doc.position,
          active: this.doc.active,
          img: this.doc.img || { url: '', name: '' }
        }
        try {
          if (!this.doc.id) {
            await this.$store.dispatch('addDoc', {
              doc,
              collection: this.collection
            })
          } else {
            await this.$store.dispatch('updateDoc', {
              doc,
              collection: this.collection
            })
          }
        } catch (err) {
        } finally {
          this.$emit('update-doc', this.collection)
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
  }
}
</script>