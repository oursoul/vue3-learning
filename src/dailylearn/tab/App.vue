<template>
  <tab :list="list" @tab-switch="tabSwitch"></tab>
  <div class="d-flex pt-4 justify-content-center">
    {{content[currentIndex]}}
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,ref } from 'vue'
import Tab from './Tab.vue'

export default defineComponent({
  // 父子组件之间的传值
  components:{Tab},
  setup() {
    const list = reactive(['tab1','tab2','tab3'])
    const content = reactive(['content1','content2','content3'])
    const currentIndex = ref(0)
    const tabSwitch = function(val:number){
      // console.log('dfa',val)
      currentIndex.value = val
    }
    return{
      list,content,currentIndex,tabSwitch
    }
  },
})
</script>
