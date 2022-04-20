<script setup>
import { reactive, onMounted } from 'vue'

// fetch('./dummy.json').then((res) => res.json())

const dummyData = reactive([
  {
    id: 1,
    img: '',
    name: '好好好咖啡',
    type: '咖啡廳',
    rank: '3.6',
    distance: '600公尺',
  },
  {
    id: 2,
    img: '',
    name: '真好咖啡',
    type: '咖啡廳',
    rank: '3.9',
    distance: '900公尺',
  },
  {
    id: 3,
    img: '',
    name: 'Koemon.official',
    type: '咖啡廳',
    rank: '3.9',
    distance: '1.5公里',
  },
  {
    id: 4,
    img: '',
    name: '711咖啡',
    type: '咖啡廳',
    rank: '3.9',
    distance: '3.3公里',
  },
])
</script>
<template>
  <h1 class="mb-4 text-2xl">商家資訊</h1>
  <div class="mb-4" v-for="item in dummyData" :key="item.id">
    <header class="align-center mb-2 flex gap-2">
      <a class="inline-block h-16 w-16 rounded-full bg-red-200" href="#">
        <!-- <img src="" alt="location img on screen" /> -->
      </a>
      <div class="flex flex-col text-sm">
        <h1 class="text-lg">{{ item.name }}</h1>
        <div>
          <span>{{ item.rank }}</span>
          <span>☆☆☆☆</span>
        </div>
        <div class="flex gap-2">
          <span>{{ item.type }}</span>
          <span>{{ item.distance }}</span>
        </div>
      </div>
    </header>
    <ul class="flex">
      <li class="h-36 w-1/3 rounded-l-md bg-red-300">相片牆</li>
      <li class="w-1/3 bg-red-400">相片牆</li>
      <li class="w-1/3 rounded-r-md bg-red-500">相片牆</li>
    </ul>
  </div>
</template>
