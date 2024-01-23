<template>
  <a-card class="general-card" title="内容展示">
    <template #extra>
      <a-button size="small" @click="loadMore">查看更多</a-button>
    </template>
    <a-row :gutter="16">
      <a-col v-for="(project, index) in combinedArray" :key="index" :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="8"
        class="my-project-item">
        <a-card>
          <a-space direction="vertical">
            <a-typography-text bold>{{ project.name }}</a-typography-text>
            <a-typography-text type="secondary">
              {{ project.description }}
            </a-typography-text>
            <a-space>
              <a-avatar-group :size="24">
                {{ project.contributors }}
                <a-avatar v-for="(contributor, idx) in project.contributors" :key="idx" :size="32">
                  <img alt="avatar" :src="contributor.avatar" />
                </a-avatar>
              </a-avatar-group>
              <a-typography-text type="secondary">
                等{{ project.peopleNumber }}人
              </a-typography-text>
            </a-space>
          </a-space>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface Contributor {
  name: string;
  email: string;
  avatar: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  peopleNumber: number;
  contributors: Contributor[];
}

export default defineComponent({
  name: 'MainContent',
  data() {
    return {
      combinedArray: [] as Project[], // 初始化为空数组
      currentCount: 100, // 初始加载100条数据
    };
  },

  computed: {
    // 计算属性，负责根据 `currentCount` 显示对应数量的数据
    displayedArray() {
      return this.combinedArray.slice(0, this.currentCount);
    },
  },
  methods: {
    randomNumber(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    loadMore() {
      const newProjects = this.generateProjects(100);
      this.combinedArray.push(...newProjects);
      this.currentCount += newProjects.length;
    },
    generateProjects(amount: number): Project[] {
      const contributors = [
        {
          name: '秦臻宇',
          email: 'qingzhenyu@arco.design',
          avatar: 'https://img0.baidu.com/it/u=350764705,4057527930&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313'
        },
        {
          name: '于涛',
          email: 'yuebao@arco.design',
          avatar:
            'https://img1.baidu.com/it/u=2193633664,3815302820&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
        },
        {
          name: '宁波',
          email: 'ningbo@arco.design',
          avatar:
            'https://img1.baidu.com/it/u=3653192501,1808036596&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        },
        {
          name: '郑曦月',
          email: 'zhengxiyue@arco.design',
          avatar:
            'https://www.4kbizhi.com/d/file/2020/02/04/small181543Ow29Y1580811343.jpg',
        },
        {
          name: '宁波',
          email: 'ningbo@arco.design',
          avatar:
            'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0620%2F833a6efcj00quz7bw000xc000hs00a0c.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
        },
      ];
      const units = [
        {
          name: 'IC协同智能平台',
          description: 'Arco Design System',
        },
        {
          name: 'flowBuilder流程引擎',
          description: 'The Volcano Engine',
        },
        {
          name: 'OCR文本识别',
          description: 'OCR text recognition',
        },
        {
          name: '内容资源管理',
          description: 'Content resource management ',
        },
        {
          name: '今日头条内容管理',
          description: 'Toutiao content management',
        },
        {
          name: '智能机器人',
          description: 'Intelligent Robot Project',
        },
      ];
      // return new Array(6).fill(null).map((_, index) => ({
      //   id: index,
      //   name: units[index].name,
      //   description: units[index].description,
      //   peopleNumber: this.randomNumber(10, 1000),
      //   contributors,
      // }));
      const newProjects: Project[] = [];

      for (let i = 0; i < amount; i++) {
        const index = i % units.length; // 循环遍历 units
        const newProject: Project = {
          id: this.combinedArray.length + i,
          name: units[index].name,
          description: units[index].description,
          peopleNumber: this.randomNumber(10, 1000),
          contributors: contributors,
        };
        newProjects.push(newProject);
      }
      return newProjects;
    },
  },
  created() {
    // 组件创建时生成初始数据
    this.combinedArray = this.generateProjects(10);
  },
});
</script>

<style scoped lang="less">
:deep(.arco-card-body) {
  min-height: 128px;
  padding-bottom: 0;
}

.my-project {
  &-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &-title {
    margin-top: 0 !important;
    margin-bottom: 18px !important;
  }

  &-list {
    display: flex;
    justify-content: space-between;
  }

  &-item {
    // padding-right: 16px;
    margin-bottom: 16px;

    &:last-child {
      padding-right: 0;
    }
  }
}
</style>
