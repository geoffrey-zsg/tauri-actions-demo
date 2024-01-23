<template>
  <div id="container">
    <div id="menu">
      <menu-left />
    </div>
    <div id="main-content">
      <main id="content">
        <h1>这是Electron Demo 简单展示很多元素：更新01-23 </h1>
        <a-grid :cols="24" :col-gap="16" :row-gap="16">
          <a-grid-item :span="24">
            <main-content />
          </a-grid-item>
        </a-grid>
      </main>
      <div id="terminal">
        <div id="title">终端展示：</div>
        <a-textarea placeholder="请输入" allow-clear />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContent from './components/MainContent.vue';
import MenuLeft from './components/MenuLeft.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MenuLeft,
    MainContent,
  },
  data() {
    return {
      // host: 'your.vnc.host.address',
      // port: '5900',
      // password: 'your-vnc-password',
      // path: 'websockify', // 根据你的 VNC proxy/server 设置来配置
    };
  },
});
</script>

<!-- 添加样式 -->
<style scoped>
#container {
  display: flex;
  height: 100vh;
}

#menu {
  flex: 0 0 300px;
}

#main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

aside {
  width: 200px;
  background-color: #f4f4f4;
}

nav {
  width: 200px;
  background-color: #ccc;
}

main {
  padding: 20px;
}

#terminal {
  margin-left: 20px;
  width: 100%;
  height: 200px;
  border: 1px solid #ddd;
  padding: 20px;
}
#title{
  text-align: left;
}
</style>
