<template>
  <div class="mt-5">异步组件,提高性能,做代码分包</div>
  <AsyncCom></AsyncCom>
  <!-- suspense -->
  <suspense>
    <template #default>
      <asyncCom></asyncCom>
    </template>
    <template #fellback>
      <Load></Load>
    </template>
  </suspense>
  <div class="mt-4 alert alert-primary" ref="testRef" name="harry">
   ref获取dom
  </div>
</template>

<script lang="ts">
// 使用defineAsyncComponent,但是不常用,一般在路由部分定义异步组件,用路由分包,增加首屏的渲染速度(懒加载之一)
import { defineAsyncComponent, defineComponent,onMounted,ref,Ref } from 'vue'
import Load from './Load.vue'
// import AsyncCom from './AsyncCom.vue'
// import load from './Load.vue'
const AsyncCom = defineAsyncComponent({
  // 异步组件
  loader:()=>import('./AsyncCom.vue'),
  // 占位组件
  // loadingComponent:load
  // 可以使用delay,多少秒无反应后才使用占位组件
})
 
export default defineComponent({
  components:{
    AsyncCom,
    Load
  },
  setup() {
    const testRef:Ref<null|HTMLElement> = ref(null)
    onMounted(()=>{
      console.log(testRef.value?.innerHTML);
    })
    return{
      testRef
    }
  },
})
</script>
