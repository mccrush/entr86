<template>
  <button
    class="btn btn-sm btn-block rounded-0 text-start m-0"
    :class="
      selectCollectionAlias === collection.alias ? 'btn-warning' : 'btn-light'
    "
    @click="$emit('select-collection', collection.alias)"
    v-html="collection.title"
  ></button>
</template>

<script>
export default {
  props: ['collection', 'selectCollectionAlias']
}
</script>