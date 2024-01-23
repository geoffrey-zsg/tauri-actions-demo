<template>
  <div class="menu">
    <ul>
      <li>菜单</li>
      <li>设置</li>
      <li>帮助</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationMenu'
});
</script>

<style scoped>
.menu ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.menu li:hover {
  background-color: #f0f0f0;
}
</style>
