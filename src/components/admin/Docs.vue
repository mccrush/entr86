<template>
  <button
    class="btn btn-sm btn-block rounded-0 m-0"
    :class="selectDocId === doc.id ? 'btn-warning' : 'btn-light'"
    @click="$emit('select-doc', doc.id)"
  >{{doc.title}}</button>
</template>

<script>
export default {
  props: ['doc', 'selectDocId']
}
</script>