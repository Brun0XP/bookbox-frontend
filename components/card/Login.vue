<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex justify-center min-h-screen bg-gray-100 items-center sm:pt-0"
  >
    <div class="w-full max-w-xs">
      <img src="@/assets/logo-text.png" alt="logo" class="mb-6">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
        
        <div class="mb-4 form-control">
          <label class="label font-bold" for="email">
            <span class="label-text">Email</span>
          </label> 
          <input v-model="user.email" type="text" placeholder="Email" class="input input-bordered" :class="{'input-error': errors.email }" id="email">
          <label v-if="errors.email" class="label">
            <span class="label-text-alt text-red-600">{{errors.email[0]}}</span>
          </label> 
        </div>
        <div class="mb-4 form-control">
          <label class="label font-bold" for="password">
            <span class="label-text">Password</span>
            <span class="label-text">
              <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </span>
          </label> 
          <input v-model="user.password" type="password" placeholder="Password" class="input input-bordered" :class="{'input-error': errors.password }" id="password"> 
          <label v-if="errors.password" class="label">
            <span class="label-text-alt text-red-600">{{errors.password[0]}}</span>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <button class="btn btn-primary" role="button" aria-pressed="true" type="submit">Sign In</button> 
          <NuxtLink class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="register">Sign-up instead</NuxtLink>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2022 BookBox. All rights reserved.
      </p>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    errors: {},
    user: {
      email: '',
      password: '',
    }
  }),
  methods: {
    async login() {
      this.enable();
      await this.$auth.loginWith('local', { data: this.user }).then(() => {
        this.$router.push('/');
      }).catch(error => {
        this.errors = error.response.data.errors
      })
      this.disable();
    },
    ...mapMutations({
      disable: 'loading/disable',
      enable: 'loading/enable'
    })
  }
}
</script>
