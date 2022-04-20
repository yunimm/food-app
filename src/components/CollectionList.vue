<script setup>
import Modal from '@/components/Modal.vue'
import { reactive, ref } from 'vue'
const dummyData = reactive([
  {
    id: 1,
    img: '',
    title: '全部',
    num: 99,
  },
  {
    id: 2,
    img: '',
    title: '早午餐類型',
    num: 11,
  },
  {
    id: 3,
    img: '',
    title: '適合聚餐',
    num: 33,
  },
  {
    id: 4,
    img: '',
    title: '兩人限定',
    num: 11,
  },
  {
    id: 5,
    img: '',
    title: '超級排隊',
    num: 6,
  },
  {
    id: 6,
    img: '',
    title: '優先去',
    num: 3,
  },
  {
    id: 7,
    img: '',
    title: '不限制時間',
    num: 19,
  },
  {
    id: 8,
    img: '',
    title: '其他',
    num: 19,
  },
])
const isModalVisible = ref(false)
function showModal() {
  isModalVisible.value = true
}
function closeModal() {
  isModalVisible.value = false
}
</script>

<template>
  <div class="relative h-screen overflow-auto p-2 text-white">
    <h1 class="mb-4 text-2xl">收藏清單</h1>
    <ul>
      <li
        v-for="item in dummyData"
        :key="item.id"
        class="my-8 flex items-center gap-3"
      >
        <a class="inline-block h-16 w-16 bg-red-200">照片</a>
        <h2>
          {{ item.title }}<span>({{ item.num }})</span>
        </h2>
      </li>
    </ul>
    <button
      class="sticky left-0 bottom-0 h-16 w-full bg-gray-800 text-center text-xl leading-[4rem] text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg"
      @click="showModal"
    >
      新建收藏清單
    </button>
  </div>
  <Modal v-show="isModalVisible" @onHandle="closeModal">
    <template v-slot:header> This is a new modal header123. </template>

    <template v-slot:body> This is a new modal body. </template>

    <template v-slot:footer> This is a new modal footer. </template>
  </Modal>
</template>
