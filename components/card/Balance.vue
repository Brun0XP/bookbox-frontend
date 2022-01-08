<template>
  <div class="card shadow compact side bg-base-100">
    <div class="flex-row items-center space-x-4 card-body">
      <div class="flex-1">
        <h1 class="text-base-content text-opacity-40">Saldo total:</h1>
        <h2 class="card-title text-primary">{{balance}}</h2>
      </div>
      <div class="flex space-x-2 flex-0">
        <button class="btn btn-sm btn-square text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              d="M247.3 124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6 61.3 162.9 48 128 48S61.4 61.3 36.3 86.3C17.5 105.2 9 124 8.7 124.8a7.9 7.9 0 0 0 0 6.4c.3.8 8.8 19.6 27.6 38.5c25.1 25 56.8 38.3 91.7 38.3s66.6-13.3 91.7-38.3c18.8-18.9 27.3-37.7 27.6-38.5a7.9 7.9 0 0 0 0-6.4zM128 192c-30.8 0-57.7-11.2-79.9-33.3A130.3 130.3 0 0 1 25 128a130.3 130.3 0 0 1 23.1-30.8C70.3 75.2 97.2 64 128 64s57.7 11.2 79.9 33.2A130.3 130.3 0 0 1 231 128c-7.2 13.5-38.6 64-103 64zm0-112a48 48 0 1 0 48 48a48 48 0 0 0-48-48zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    balance: {
      type: Number,
      default: 0
    }
  },
}
</script>