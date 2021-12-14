<template>
  <div class="dropdown" ref="dropDownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
      <!-- <li class="dropdown-item">
        <a href="#" style="text-decoration: none;">编辑资料</a>
      </li> -->
       
      <drop-down-item :disabled="true"> 
        <a href="#" style="text-decoration: none;">编辑资料</a>
      </drop-down-item>
      <drop-down-item> 
        <router-link :to='{name:"create"}' style="text-decoration: none;">新建文章</router-link>
      </drop-down-item>
       <drop-down-item> 
        <a href="#" style="text-decoration: none;">退出</a>
      </drop-down-item>
    </ul> 

  </div>
</template>

<script lang="ts">
import Vue, { defineComponent,ref,onMounted, onUnmounted,watch } from 'vue'
import DropDownItem from './DropDownItem.vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name:'DropDown',
 props:{
   title:{
     type:String,
     required:true,
   }
 },
 components:{
  DropDownItem
 },
 setup(){
   const isOpen = ref(false)
   const toggleOpen  = ()=>{
     isOpen.value = !isOpen.value
   }
  // //  获取dom节点，联合类型
   const dropDownRef = ref<null|HTMLElement>(null) 
  // //  点击其他区域隐藏下拉框
  //  const handler = (e:MouseEvent)=>{
  //    if(dropDownRef.value){
  //     //  console.log(dropDownRef.value)
  //     //  contains 一个dom包含另一个dom
  //      if(!dropDownRef.value.contains(e.target as HTMLElement)){
  //        isOpen.value = false
  //      }
  //    }
  //  }
 
   const isClickOutside = useClickOutside(dropDownRef)

  watch(isClickOutside,()=>{
   if(isOpen.value && isClickOutside.value){
     isOpen.value = false
   }
  })
   return{
     isOpen,
     toggleOpen,
     dropDownRef
   }
 }
})
</script>