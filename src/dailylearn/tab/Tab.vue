<template>
<div class="tab">
  <h2>tab switch</h2>
  <div class="d-flex align-items-center justify-content-center">
    <div v-for="(item,index) in list" :key="index" class="px-4  tab__item" :class="{'tab__item--active':currentIndex == +index}" @click="handleSwitch(+index)">{{item}}</div>
  </div>
  <div>inject,provide:{{name}},array length:{{arr.length}}</div>
</div>

</template>

<script lang="ts">
import { defineComponent,ref,inject, onBeforeUnmount } from 'vue'
import emitter from './eventbus'
export default defineComponent({
  props:{
    list:{
      type:Array
    }
  },
  emits:['tabSwitch'],
  inject:["name"],
  setup(props,ctx) {
    const currentIndex = ref(0)
    const handleSwitch = function(index:number){
      currentIndex.value = index
      ctx.emit('tabSwitch',currentIndex.value)
    }
    const arr= inject('arr')

    // create时候监听
    const emitterFun = (val:any)=>{
      console.log(val);
    }
    emitter.on('trigger',emitterFun)

    onBeforeUnmount(()=>{
      // 取消监听
      // emitter.off('trigger',emitterFun)
      emitter.all.clear()
    })

    return{
      currentIndex,handleSwitch,arr
    }
},
})
</script>

<style lang="stylus" scoped>
  .tab{
   &__item{
     cursor pointer
   }
   &__item--active{
       color red
       border-bottom 1px solid red
     }
  }
  
</style>
