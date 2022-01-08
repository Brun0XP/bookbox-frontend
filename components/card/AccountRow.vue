<template>
  <div>
    <div class="divider"></div>

    <div class="flex justify-between">
      <div class="flex space-x-4">
        <div class="avatar self-center">
          <div class="rounded-btn w-10 h-10">
            <img
              :src="'https://ui-avatars.com/api/?background=434AA8&color=fff&name=' + account.name + '&size=512&bold=true'"
            />
          </div>
        </div>
        <div>
          <h2 class="text-xl">{{account.name}}</h2>
          <p class="text-base-content text-opacity-40">{{account.type}}</p>
        </div>
      </div>

      <div class="self-end">
        <h2 class="text-lg font-bold text-primary">{{account.balance}}</h2>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
}
</script>