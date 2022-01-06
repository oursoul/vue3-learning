<template>
  <!-- 01 tab切换,父子组件传值的应用 -->
  <tab :list="list" @tab-switch="tabSwitch"></tab>
  <div class="d-flex pt-4 justify-content-center">
    {{content[currentIndex]}}
  </div>
  <!-- 02非父子组件之间共享数据,provide和inject;父组件使用provide提供数据;子组件inject选项使用这些数据 -->
  <div @click="addItem" class="btn btn-primary">add</div>

  <!-- 03事件的传递mitt -->
  <div @click="mittClick">mittClick(console.log)</div>

  <!-- 04动态组件 -->
  <Tab2></Tab2>
 
</template>

<script lang="ts">
import { defineComponent,reactive,ref,provide } from 'vue'
import Tab from './Tab.vue'
import emitter from './eventbus'
import Tab2 from './Tab2.vue'


export default defineComponent({
  // 父子组件之间的传值
  components:{Tab,Tab2},
  provide(){
    return{
      name:'harry'
    }
  },
  setup() {
    const list = reactive(['tab1','tab2','tab3'])
    const content = reactive(['content1','content2','content3'])
    const currentIndex = ref(0)
    const tabSwitch = function(val:number){
      // console.log('dfa',val)
      currentIndex.value = val
    }
    const arr:number[] = reactive([1,2,3])
    provide('arr',arr)
    const addItem = ()=>{
      arr.push(1)
    }
    const mittClick = ()=>{
      console.log('mittClick');
      emitter.emit('trigger','mittClick to other')
    }
    return{
      list,content,currentIndex,tabSwitch,addItem,mittClick
    }
  },
})
</script>
