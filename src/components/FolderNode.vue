<template>
  <li>
    {{ node.title }}
    <ul v-if="node.children && node.children.length > 0">
      <folder-node v-for="child in node.children" :key="child.value" :node="child" />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'FolderNode',
  props: {
    node: {
      type: Object as PropType<{
        value: string;
        title: string;
        children?: Array<{ value: string; title: string; children?: any }>;
      }>,
      required: true
    }
  },
});
</script>

<style scoped>
li {
  cursor: pointer;
}

li ul {
  padding-left: 1em;
}
</style>
