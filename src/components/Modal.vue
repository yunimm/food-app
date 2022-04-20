<script setup>
defineEmits(['onHandle'])
</script>

<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
  >
    <div class="max-w-lg rounded-md bg-white p-6 shadow-xl">
      <div class="relative">
        <h3 class="text-center text-xl">新建收藏清單</h3>
        <svg
          @click="$emit('onHandle')"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute right-0 top-0 h-8 w-8 cursor-pointer text-red-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="mt-4">
        <p class="mb-4 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          qui nihil laborum quaerat blanditiis nemo explicabo voluptatum ea
          architecto corporis quo vitae, velit temporibus eaque quisquam in quis
          provident necessitatibus.
        </p>
        <!-- <button
          @click="$emit('onHandle')"
          class="rounded border border-blue-600 px-6 py-2 text-blue-800"
        >
          Cancel
        </button> -->
        <button class="w-full bg-gray-800 px-6 py-2 text-white">完成</button>
      </div>
    </div>
  </div>
</template>
