<script setup>
import { ref } from 'vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

watch(route, () => {})
</script>
<template>
  <ul class="nav nav-tabs flex list-none flex-wrap justify-between">
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'photo-grid' }"
        class="nav-link active my-2 block w-full border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 leading-tight hover:border-transparent hover:bg-gray-900 focus:border-transparent"
      >
        <svg
          v-show="route.name !== 'photo-grid'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <svg
          v-show="route.name == 'photo-grid'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </router-link>
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'store-info' }"
        class="nav-link my-2 block w-full border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 leading-tight hover:border-transparent hover:bg-gray-900 focus:border-transparent"
      >
        <svg
          v-show="route.name !== 'store-info'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
        <svg
          v-show="route.name == 'store-info'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </router-link>
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'map' }"
        class="nav-link my-2 block inline-block w-full border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 leading-tight hover:border-transparent hover:bg-gray-900 focus:border-transparent"
      >
        <svg
          v-show="route.name !== 'map'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <svg
          v-show="route.name == 'map'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          />
        </svg>
      </router-link>
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'collection' }"
        class="nav-link my-2 block w-full border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 leading-tight hover:border-transparent hover:bg-gray-900 focus:border-transparent"
      >
        <svg
          v-show="route.name !== 'collection'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        <svg
          v-show="route.name == 'collection'"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      </router-link>
    </li>
  </ul>
</template>
