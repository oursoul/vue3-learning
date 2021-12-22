<template>
<teleport to="#main">
  <div class="d-flex justify-content-center align-items-center h-100 loader-container" :style="{backgroundColor:bgColor||''}">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p v-if="text" class="text-primary small">{{text}}</p>
  </div>
</teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    text:{
      type:String
    },
    bgColor:{
      type:String
    }
  },
  setup(){
    const node = document.createElement('div')
    node.id="main"
    document.body.appendChild(node)
  }
})
</script>

<style lang="stylus">
  .loader-container{
    background-color rgba(255,255,255,.5)
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    right 0
    bottom 0
    text-align center
    z-index 2
  }
</style>
