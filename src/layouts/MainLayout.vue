<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'main-layout',
  mounted() {
    console.log('main')
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(ServerError) {
      this.$error(messages[ServerError] || 'Something went wrong.')
    }
  }
}
</script>
