<template>
  <div class="bg-gray-200 min-h-screen flex items-top justify-center">
    <div class="w-full max-w-xl m-4">
      <DashboardHeader :userName="$auth.user.name" />
      <CardBalance class="mb-6" :balance="$auth.user.totalBalance"/>
      <CardAccounts />
    </div>
  </div>
</template>
