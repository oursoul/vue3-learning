<template>
  <li class="dropdown-item" :class="{'is-disabled':disabled}">
   <slot name="slot1" :data="testData"></slot>
   <hr>
   <slot name="slot2"></slot>
   <slot ></slot>
  </li>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  },
  setup(){
    return{
      testData:'test scope slot'
    }
  }
})
</script>

<style lang="stylus">
.dropdown-item.is-disabled *{
  pointer-events none 
  color #6c757d
  background-color transparent
}
</style>