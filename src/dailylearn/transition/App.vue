<template>
  <el-button
    type="primary"
    style="display: block; margin: 20px auto"
    @click="isShow = !isShow"
  >
    显示隐藏、放大
  </el-button>
  <!-- 01给单元素或者组件实现过渡动画，加transition标签 -->
  <!-- 原理：当插入或者删除包含在transition组件的元素，vue会做以下处理 -->
  <!-- 1.1目标元素是否应用了css过渡或者动画，如果有，在恰当的时机添加或者删除类名 -->
  <!-- 1.2 -->
  <transition name="hide">
    <div v-if="isShow">content</div>
  </transition>

  <!-- 02使用动画 -->
  <transition name="scale">
    <div v-if="isShow">放大缩小</div>
  </transition>

  <!-- 03animation以及transiton并存，且结束时间不一致，可在transition加入type=""，以时间较长的为准，不建议使用 -->

  <!-- 04多组件的问题，设置mode，前一个组件离开后后一个组件才进入 -->
  <transition name="hide" mode="out-in">
    <div v-if="isShow">content1</div>
    <div v-else>content2</div>
  </transition>

  <!-- 05动态组件 -->
  <transition name="hide" mode="out-in">
    <component :is="isShow ? 'Con1' : 'Con2'"></component>
  </transition>

  <!-- 06animate -->
  <!-- 首先npm i animate.css之后import引入 -->
  <transition name="animate">
    <div v-if="isShow">animate.css动画</div>
  </transition>

  <!-- 07gsap js动画库 -->
  <!-- https://greensock.com/get-started/ -->
  <!-- 添加:css使得不检测class，性能较高 -->
  <transition @enter="enter" @leave="leave" :css="false">
    <div v-if="isShow">gsap js动画库</div>
  </transition>
  <!-- 7.1应用，数字变化的效果 -->
  <h2>数字变化效果</h2>
  <input type="number" step="100" v-model="num" />
  <div>{{ showNum }}</div>

  <!-- 7.2添加数组 -->
  <el-button type="success" @click="addItem">add</el-button>
  <el-button type="warning" @click="deleteItem">delete</el-button>
  <transition-group name="arr" tag="p">
    <span
      v-for="(item, index) in list"
      :key="item"
      style="display: inline-block"
      class="mt-4 px-3"
    >
      {{ item }}
    </span>
  </transition-group>

  <!-- 7.3列表交替动画 -->
  <h2>搜索动态效果</h2>
  <el-input
    v-model="search"
    class="w-50 m-2"
    size="large"
    placeholder="Please Input"
  ></el-input>
  <transition-group name="list" tag="ul" @enter="listEnter" @leave="listLeave" @beforeEnter="listBeforeEnter">
     <li v-for="(item,index) in showList" :data-index="index" :key="item" >{{item}}</li>
  </transition-group>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import Con1 from "./Con1.vue";
import Con2 from "./Con2.vue";
import gsap from "gsap";
export default defineComponent({
  components: {
    Con1,
    Con2,
  },
  setup() {
    const isShow = ref(true);
    const enter = (el, done) => {
      console.log("enter");
      gsap.from(el, {
        scale: 0,
        x: 200,
        duration: 1,
        // 需要执行done回调
        onComplete: done,
      });
    };
    const leave = (el, done) => {
      console.log("leave");
      gsap.to(el, {
        scale: 0,
        x: 200,
        duration: 1,
        // 需要执行done回调
        onComplete: done,
      });
    };
    const num = ref(0);
    const temp = reactive({
      n: 0,
    });
    watch(num, (newVal) => {
      gsap.to(temp, { duration: 1, n: newVal });
    });
    const showNum = computed(() => temp.n.toFixed());

    const list = reactive([1, 2, 3, 4, 5, 6, 7, 8]);
    const deleteItem = () => {
      list.splice(getRandom(), 1);
    };
    const addItem = () => {
      list.splice(getRandom(), 0, getRandom());
    };

    const getRandom = () => Math.floor(Math.random() * list.length);

    const search = ref("");
    const searchList = reactive(["abc", "adfa", "ddc", "eafopl", "dclggde"]);
    const showList = computed(() =>
      searchList.filter(item => item.indexOf(search.value) != -1)
    );

    const listBeforeEnter = (el)=>{
      el.style.opacity =0
      el.style.height =0
    }

    const listEnter = (el,done)=>{
      console.log(el.dataset.index)
      gsap.to(el,{
        opacity:1,
        height:'1.5em',
        delay:el.dataset.index*0.1,
        onComplete:done
      })
    }

    const listLeave = (el,done)=>{
       gsap.to(el,{
        opacity:0,
        height:'0',
        delay:el.dataset.index*0.1,
        onComplete:done
      })
    }

    return {
      isShow,
      enter,
      leave,
      showNum,
      num,
      list,
      deleteItem,
      addItem,
      search,
      showList,
      listBeforeEnter,
      listEnter,
      listLeave
    };
  },
});
</script>

<style lang="stylus" scoped>
.hide-enter-from, .hide-leave-to {
  opacity: 0;
}

.hide-enter-to, .hide-leave-from {
  opacity: 1;
}

.hide-enter-active, .hide-leave-active {
  transition: opacity 2s ease;
}

.scale-enter-active {
  animation: bounce 1s ease;
}

.scale-leave-active {
  animation: bounce 1s ease reverse;
}

.animate-enter-active {
  animation: fadeInDown 1s ease;
}

.animate-leave-active {
  animation: fadeInDown 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.arr-enter-from, .arr-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.arr-enter-active, .arr-leave-active {
  transition: all 0.5s;
}

.arr-leave-active {
  position: absolute;
  z-index: 1;
  transform: scale(1.2);
}

// 需要移动的其他节点是没有动画的，
// vue内置v-move，会在元素变化过程中应用
.arr-move {
  transition: transform 0.5s ease;
}
// css实现较为生硬
// .list-enter-from,.list-leave-to{opacity:0}
// .list-enter-active,.list-leave-active{transition:opacity .5s}
</style>
