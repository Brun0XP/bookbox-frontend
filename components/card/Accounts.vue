<template>
    <div class="card shadow compact side bg-base-100">
      <div class="card-body">
        <div class="flex justify-between">
          <h1 class="card-title">Minhas contas</h1>
          <div>
            <button class="btn btn-sm btn-square text-xl">
              <span class="mdi mdi-plus"/>
            </button>
            <button class="btn btn-sm btn-square text-xl">
              <span class="mdi mdi-cog-outline"/>
            </button>
          </div>
        </div>

        <CardAccountRow v-for="account in $auth.user.accounts" :key="account.key" :account="account" />

      </div>
    </div>
</template>

<script>
export default {
    name: 'CardAccounts',
}
</script>