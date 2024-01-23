<template>
  <div class="menu-demo">
    <a-menu :style="{ width: '200px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_1']"
      show-collapse-button>
      <a-menu-item key="0_0_0" data-obj="1">文件夹 1</a-menu-item>
      <a-sub-menu key="0">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>文件夹 2</template>
        <a-menu-item key="0_0">文件夹2-1</a-menu-item>
        <a-menu-item key="0_1">文件夹2-2</a-menu-item>
        <a-menu-item key="0_2" disabled>文件夹2-3</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="1">
        <template #icon><icon-bug></icon-bug></template>
        <template #title>文件夹3</template>
        <a-menu-item key="1_0">文件夹3-1</a-menu-item>
        <a-menu-item key="1_1">文件夹3-2</a-menu-item>
        <a-menu-item key="1_2">文件夹3-3</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="2">
        <template #icon><icon-bulb></icon-bulb></template>
        <template #title>文件夹4</template>
        <a-menu-item-group title="Menu Group 1">
          <a-menu-item key="2_0">文件夹4-1</a-menu-item>
          <a-menu-item key="2_1">文件夹4-2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Menu Group 2">
          <a-menu-item key="2_2">文件夹4-3</a-menu-item>
          <a-menu-item key="2_3">文件夹4-4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import {
  IconMenuFold,
  IconMenuUnfold,
  IconApps,
  IconBug,
  IconBulb,
} from '@arco-design/web-vue/es/icon';

export default defineComponent({
  name: 'MenuLeft',
  components: {
    IconMenuFold,
    IconMenuUnfold,
    IconApps,
    IconBug,
    IconBulb,
  },
},
);
</script>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>