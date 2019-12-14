<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from '@/utils/messages'
export default {
  name: 'empty-layout',
  mounted() {
    console.log('empty')
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
