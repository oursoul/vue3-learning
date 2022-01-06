<template>
  <h2 class="mt-3">动态组件</h2>
  <div
    v-for="(item, index) in list"
    :key="index"
    class="btn btn-primary"
    @click="switchTab(item)"
  >
    {{ item }}
  </div>
  <!-- 动态组件传值 -->
  <!-- 组件切换会销毁不会保存原本的状态,使用keep-alive即可保留状态 -->
  <!-- include="a,b" :include="/a|b/" :include="['a','b']" ;exclude(不缓存);max(最多缓存多少组件实例,移除未被访问的实例)-->
  <keep-alive include="con1">
      <component :is="currentTab" name="harry"></component>
  </keep-alive>
  <div class="block">
      <div class="demonstration mt-5 mb-4">elementplus use</div>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      >
      </el-date-picker>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
// 动态组件
import Con1 from "./Con1.vue";
import Con2 from "./Con2.vue";
export default defineComponent({
  components: {
    Con1,
    Con2,
  },
  setup() {
    const list = reactive(["tab1", "tab2"]);
    const currentTab = ref("Con1");
    const switchTab = (item: string) => {
      currentTab.value = "Con" + item.slice(item.length - 1);
    };
    const value1 = ref(null);
    const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
    return {
      list,
      switchTab,
      currentTab,
      value1,
      colors,
    };
  },
});
</script>

<style lang="stylus" scoped>

.ani-enter-from,.ani-leave-to{opacity:0}
.ani-enter-to,.ani-leave-from{opacity:1}

.ani-enter-active,.ani-leave-active{transition:opacity 2s ease;}
</style>
