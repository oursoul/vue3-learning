<template>
<div class="my-5">
  <div>slot开始</div>
  <slot><i>若无插入,默认显示的内容</i></slot>
  <slot name="slot1"></slot>
  <div>slot开始</div>
  <slot :name="name"></slot>
  <slot name="childProps" :childProps="childProps"></slot>
<hr>
</div>

</template>

// <script lang="ts">
// import { defineComponent,ref} from 'vue'

// export default defineComponent({
//   props:{
//     name:{
//       type:String
//     }
//   },
//   setup() {
//    const childProps = ref('作用域插槽:childProps test')
//    return{
//      childProps
//    }
//   },
// })
// </script>

<script setup>
  

</script>
