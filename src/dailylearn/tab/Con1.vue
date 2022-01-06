<template>
  <div>content1,{{name}}</div>
  
  <div class="btn btn-secondary" @click="count++">add</div>
  {{count}}
</template>

<script lang="ts">
import { defineComponent, onActivated, reactive,ref } from 'vue'
// 动态组件
export default defineComponent({
  name:'con1',
  props:{
    name:{
      type:String
    }
  },
  setup() {
   const count = ref(0)
  //  缓存组件的生命周期
   onActivated(()=>{
     console.log('缓存组件的生命周期');
   })
   return{
     count
   }
  },
})
</script>
