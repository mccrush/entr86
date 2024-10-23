<template>
  <button
    class="btn btn-sm rounded-0 text-start w-100 m-0"
    :class="selectDocId === doc.id ? 'btn-warning' : 'btn-light'"
    @click="$emit('select-doc', doc.id)"
    v-html="doc.title"
  ></button>
</template>

<script>
export default {
  props: ['doc', 'selectDocId']
}
</script>