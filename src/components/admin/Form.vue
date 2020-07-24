<template>
  <form @submit.prevent="saveDoc">
    <div class="row">
      <div class="col-6">
        <input
          type="text"
          v-model.trim="doc.title"
          class="form-control form-control-sm"
          placeholder="Заголовок"
          maxlength="70"
          required
        />
      </div>
      <div class="col-6">
        <input
          v-if="collection === 'menus' || collection === 'napravs' || collection === 'prices'"
          type="text"
          v-model.trim="doc.alias"
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
              max="42"
              step="1"
              v-model.number="doc.position"
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

    <div
      v-if="collection === 'portfolios' || (collection === 'prices' && doc.id) ||collection === 'contacts'"
      class="row"
    >
      <div class="col-12">
        <editor
          api-key="hanxollva4phpflvvnv1lje4y82fvprrkqrmpqeclw066js2"
          type="text"
          v-model="doc.desc"
          class="form-control form-control-sm"
          placeholder="Описание"
          :init="{
            language: 'ru',
         height: 300,
         menubar: true,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
        ></editor>
      </div>
    </div>

    <div v-if="collection != 'menus' || collection != 'contacts'" class="row mt-3">
      <div class="col-6 text-left">
        <div class="form-group">
          <label for="img" class="small">Изображение (max 5 Мб)</label>
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
          class="btn btn-sm btn-light position-relative load-image"
          type="button"
          @click="removeImage"
        >Удалить</button>
      </div>
    </div>

    <div v-if="collection === 'prices' && doc.id" class="row">
      <div class="col-12">
        <div class="form-group text-left">
          <label for="imgSrc" class="small">Сылка на изображение</label>
          <div class="input-group input-group-sm mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Здесь появится ссылка"
              id="imgSrc"
              v-model="doc.img.url"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="copyToBuffer"
              >Копировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12 col-sm-6 col-md-4">
        <transition name="fade" mode="out-in">
          <button
            @click="removeDoc"
            type="button"
            class="btn btn-sm btn-block btn-outline-danger"
            :disabled="doc.id ? false : true"
          >Удалить</button>
        </transition>
      </div>
      <div class="d-none d-md-block col-4">
        <!-- Очистить -->
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <button type="submit" class="btn btn-sm btn-block btn-outline-success">Сохранить</button>
      </div>
    </div>
  </form>
</template>

<script>
import { storage } from '@/main.js'
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    editor: Editor,
  },
  props: ['doc', 'collection', 'length'],
  methods: {
    copyToBuffer(e) {
      const elem = e.target.parentNode.parentNode.childNodes[0]
      elem.select()
      document.execCommand('copy')
    },
    async removeImage() {
      let storageRef = storage.ref()
      let imagesRef = storageRef.child(
        this.collection + '/' + this.doc.id + '/' + this.doc.img.name
      )
      try {
        await imagesRef.delete()
        this.doc.img.url = ''
        this.doc.img.name = ''
        await this.$store.dispatch('updateImageFill', {
          collection: this.collection,
          id: this.doc.id,
          img: this.doc.img,
        })
      } catch (err) {
      } finally {
        console.log('Изображение успешно удалено')
      }
    },
    async uploadImage(e) {
      const file = e.target.files[0]
      if (file) {
        if (file.size / 1024 / 1024 > 5) {
          alert('Изображение весит более 5 Мб!')
          return false
        }
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
            img: this.doc.img,
          })
        } catch (err) {
        } finally {
          console.log('Изображение успешно загружено')
        }
      }
    },
    async saveDoc() {
      let doc = {}
      if (this.doc.title) {
        doc = {
          id: this.doc.id || Date.now().toString(),
          title: this.doc.title.trim(),
          alias: this.doc.alias || '',
          position: +this.doc.position,
          active: this.doc.active,
          desc: this.doc.desc || '',
          img: this.doc.img || { url: '', name: '' },
        }
        try {
          if (!this.doc.id) {
            await this.$store.dispatch('addDoc', {
              collection: this.collection,
              doc,
            })
          } else {
            await this.$store.dispatch('updateDoc', {
              collection: this.collection,
              doc,
            })
          }
        } catch (err) {
        } finally {
          this.$emit('update-doc', this.collection)
        }
      } else {
        // Выделить поле красной рамкой?
        //console.log('Заполните все поля:', this.doc)
      }
    },
    async removeDoc() {
      if (confirm('Точно удалить?')) {
        try {
          await this.removeImage() // Сначала удаляем изображение
          await this.$store.dispatch('removeDoc', {
            collection: this.collection,
            id: this.doc.id,
          })
        } catch (err) {
        } finally {
          this.$emit('update-doc', this.collection)
        }
      }
    },
  },
}
</script>

<style scoped>
.load-image {
  margin-top: -48px;
}
</style>