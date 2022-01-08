<template>
  <div class="card shadow compact side bg-base-100 mb-6">
    <div class="flex-row items-center space-x-4 card-body">
      <div class="avatar">
        <div
          class="
            rounded-full
            w-14
            h-14
            ring ring-primary ring-offset-base-100 ring-offset-2
          "
        >
          <img :src="'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + $auth.user.name + '&size=512'" />
        </div>
      </div>
      <div>
        <p class="text-base-content text-opacity-40">{{ greeting }}</p>
        <h2 class="card-title">{{ $auth.user.name}} </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    greeting: '',
  }),
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  created() {
    const hour = new Date().getHours();
    this.greeting = hour > 6 && hour < 12 ? 'Bom dia!' : hour < 18 ? 'Boa tarde!' : 'Boa noite!';
  }
}
</script>