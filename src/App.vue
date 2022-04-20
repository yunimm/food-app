<script setup>
import SearchBar from '@/components/SearchBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="my-4 mx-6 mx-auto min-h-screen w-4/5">
    <!-- 搜尋框 -->
    <header>
      <SearchBar />
    </header>
    <!-- 路由對應畫面 -->
    <main class="h-4/5">
      <router-view />
    </main>
    <!-- 導覽列 -->
    <nav>
      <NavBar />
    </nav>
  </div>
</template>
<style lang="scss">
body {
  background-color: black;
}
</style>
