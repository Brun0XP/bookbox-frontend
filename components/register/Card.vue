<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex justify-center min-h-screen bg-gray-100 items-center sm:pt-0"
  >
    
    <div class="w-full max-w-xs">
      <img src="@/assets/logo-text.png" alt="logo" class="mb-6">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">
        <div class="mb-4 form-control">
          <label class="label font-bold" for="fullname">
            <span class="label-text">Full name</span>
          </label> 
          <input v-model="user.name" type="text" placeholder="Full name" class="input input-bordered" :class="{'input-error': errors.name }" id="fullname">
          <label v-if="errors.name" class="label">
            <span class="label-text-alt text-red-600">{{errors.name[0]}}</span>
          </label>  
        </div>
          
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
          </label> 
          <input v-model="user.password" type="password" placeholder="Password" class="input input-bordered" :class="{'input-error': errors.password }" id="password"> 
          <label v-if="errors.password" class="label">
            <span class="label-text-alt text-red-600">{{errors.password[0]}}</span>
          </label> 
        </div>
        <div class="mb-4 form-control">
          <label class="label font-bold" for="rpassword">
            <span class="label-text">Repeat Password</span>
          </label> 
          <input v-model="user.rpassword" type="password" placeholder="Repeat Password" class="input input-bordered" :class="{'input-error': errors.rpassword }" id="rpassword"> 
          <label v-if="errors.rpassword" class="label">
            <span class="label-text-alt text-red-600">{{errors.rpassword[0]}}</span>
          </label> 
        </div>

        <div class="flex items-center justify-between">
          <button class="btn btn-primary btn-active" role="button" aria-pressed="true" type="submit">Sign Up</button> 

          <NuxtLink class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">
            Sign-in instead
          </NuxtLink>
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
      fullName: '',
      email: '',
      password: '',
      rpassword: ''
    }
  }),
  methods: {
    async register(e) {
      this.enable();
      await this.$axios.post('/auth/register', this.user)
        .then(async () => {
          await this.login()
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
      this.disable();
    },
    async login() {
      await this.$auth.loginWith('local', { data: { email: this.user.email, password: this.user.password } }).then(() => {
        this.$router.push('/');
      })
    },
    ...mapMutations({
      disable: 'loading/disable',
      enable: 'loading/enable'
    })
  }
}
</script>
