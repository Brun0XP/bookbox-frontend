<template>
  <div>
    <LoadingOverlay :enable="enableLoading"/>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    enableLoading () {
      return this.$store.state.loading.overlay
    }
  },
}
</script>