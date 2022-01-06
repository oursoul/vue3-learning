<template>
  <div>content2,{{name}},不缓存</div>
  <div class="btn btn-secondary" @click="count++">add</div>
  {{count}}
</template>

<script lang="ts">
import { defineComponent, reactive,ref } from 'vue'
// 动态组件
export default defineComponent({
  name:'con2',
  props:{
    name:{
      type:String
    }
  },
  setup() {
   const count = ref(0)
   return{
     count
   }
  },
})
</script>
