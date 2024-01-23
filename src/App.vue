<template>
  <div id="container">
    <div id="main-content">
      <main id="content">
        <h1>这是Tauri Demo 展示很多元素：</h1>
        <a-grid :cols="24" :col-gap="16" :row-gap="16">
          <a-grid-item :span="24">
            <main-content />
          </a-grid-item>
        </a-grid>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationMenu from './components/NavigationMenu.vue';
import FolderTree from './components/FolderTree.vue';
import MainContent from './components/MainContent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    NavigationMenu,
    FolderTree,
    MainContent,
  },
  data() {
    return {};
  },
});
</script>

<!-- 添加样式 -->
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#main-content {
  display: flex;
  flex: 1;
}
</style>
