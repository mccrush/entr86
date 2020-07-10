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
            required
            accept="image/png, image/jpeg"
            @change="uploadImage"
          />
        </div>
      </div>
      <div class="col-6">
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
import { storage } from '@/main.js'

export default {
  props: ['doc', 'collection', 'length'],
  // data() {
  //   return {
  //     id: this.doc.id || Date.now().toString(),
  //     status: this.doc.id ? 'update' : 'create',
  //     title: this.doc.title || '',
  //     alias: this.doc.alias || '',
  //     position: +this.doc.position || this.length + 1,
  //     active: this.doc.active ? true : false,
  //     img: {
  //       url: this.doc.img.url || '/img/admin/image.svg',
  //       name: this.doc.img.name || ''
  //     }
  //   }
  // },
  methods: {
    // selectImage(e) {
    //   const file = e.target.files[0]
    //   let reader = new FileReader()
    //   reader.onload = e => {
    //     this.img.url = e.target.result
    //   }
    //   reader.readAsDataURL(file)
    // },
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
        this.doc.img.url = '/img/admin/loading-image.gif'
        this.doc.img.name = file.name
        let storageRef = storage.ref()
        let imagesRef = storageRef.child(
          this.collection + '/' + this.doc.id + '/' + file.name
        )
        const snapshot = await imagesRef.put(file)
        this.doc.img.url = await snapshot.ref.getDownloadURL()
      }
    },
    async saveDoc() {
      let newDoc = {}
      if (this.doc.title.trim() && this.doc.alias.trim()) {
        newDoc = {
          id: this.doc.id,
          title: this.doc.title.trim(),
          alias: this.doc.alias.trim(),
          position: +this.doc.position,
          active: this.doc.active,
          img: this.doc.img || { url: '', name: '' }
        }
        if (!this.doc.id) {
          try {
            await this.$store.dispatch('addDoc', {
              doc: newDoc,
              collection: this.collection
            })
          } catch (err) {
          } finally {
            this.doc = null
            // this.title = ''
            // this.alias = ''
            // this.position = +this.position + 1
            // this.active = true
            // this.img.url = '/img/admin/image.svg'
          }
        } else {
          try {
            await this.$store.dispatch('updateDoc', {
              doc: newDoc,
              collection: this.collection
            })
          } catch (err) {
          } finally {
            this.$emit('update-doc', this.collection)
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
  }
  // watch: {
  //   doc() {
  //     this.doc = this.doc.id || Date.now().toString()
  //     this.title = this.doc.title
  //     this.alias = this.doc.alias
  //     this.position = +this.doc.position || this.length + 1
  //     this.active = this.doc.active ? true : false
  //     this.img.url = this.doc.img.url || '/img/admin/image.svg'
  //     this.img.name = this.doc.img.name || ''
  //     console.log('this.img.name:', this.img.name)
  //     console.log('this.img.url:', this.img.url)
  //   }
  // }
}
</script>

<style scoped>
.img-bg {
  background: url(/img/admin/image.svg) no-repeat center center;
  background-size: contain;
}

.img-thum {
  height: 76px;
}
</style>