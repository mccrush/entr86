<template>
  <button
    class="btn btn-sm btn-block rounded-0 m-0"
    :class="selectDocAlias === doc.alias ? 'btn-warning' : 'btn-light'"
    @click="$emit('select-doc', doc.alias)"
  >{{doc.title}}</button>
</template>

<script>
export default {
  props: ['doc', 'selectDocAlias']
}
</script>