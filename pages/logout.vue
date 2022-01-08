<template>
  <div></div>
</template>

<script>
export default {
  name: 'LogoutPage',
  mounted() {
    this.$auth.logout()
    this.$router.push('/login')
  }
}
</script>