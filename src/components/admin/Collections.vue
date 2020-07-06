<template>
  <button
    class="btn btn-sm btn-block rounded-0 m-0"
    :class="selectCollectionAlias === collection.alias ? 'btn-warning' : 'btn-light'"
    @click="$emit('select-collection', collection.alias)"
  >{{collection.title}}</button>
</template>

<script>
export default {
  props: ['collection', 'selectCollectionAlias']
  // data() {
  //   return {
  //     collection: ''
  //   }
  // }
}
</script>