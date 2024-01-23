<template>
  <ul class="tree">
    <folder-node v-for="node in treeData" :key="node.value" :node="node" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FolderNode from './FolderNode.vue';

export default defineComponent({
  name: 'FolderTree',
  components: {
    FolderNode
  },
  data() {
    return {
      treeData: [
        {
          value: 'parent 1',
          title: 'parent 1',
          children: [
            {
              value: 'parent 1-0',
              title: 'parent 1-0',
              children: [
                {
                  value: 'leaf1',
                  title: 'leaf1',
                },
                {
                  value: 'leaf2',
                  title: 'leaf2',
                },
              ],
            },
            {
              value: 'parent 1-1',
              title: 'parent 1-1',
              children: [
                {
                  value: 'leaf3',
                  title: 'leaf3',
                },
              ],
            },
          ],
        },
      ],
    };
  },
});
</script>

<!-- CSS styles -->
<style scoped>
.tree {
  list-style-type: none;
  padding-left: 1em;
}

.tree li {
  margin: 0.5em 0;
}
</style>
