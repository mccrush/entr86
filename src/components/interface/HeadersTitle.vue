<template></template>
<script>
export default {
  props: {
    title: String,
    description: String
  },
  mounted() {
    document.title = this.title ? this.title + ' - ENTR' : 'ENTR'

    document.description = this.description ? this.description : 'ENTR'
  },
  watch: {
    title() {
      document.title = this.title ? this.title + ' - ENTR' : 'ENTR'
    },
    description() {
      document.description = this.description ? this.description : 'ENTR'
    }
  }
}
</script>