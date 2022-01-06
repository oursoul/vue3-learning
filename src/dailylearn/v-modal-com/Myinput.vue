<template>
  
  <!-- <div class="btn btn-primary" @click="btnClick">
    btn
  </div>
  {{modelValue}} -->
  <h2>v-modal组件</h2>
  <br>
  <!-- <input :value="modelValue" @input="btnClick($event)"> -->
  <!-- 更优雅的书写 -->
  <input type="text" v-model="val">
  
</template>

<script lang="ts">
import { computed, defineComponent,Ref } from 'vue'

export default defineComponent({
  props:{
    modelValue:String
  },
  emits:['update:modelValue']
  ,
  setup(props,{emit}) {
    const btnClick = (e)=>{
      // emit('update:modelValue','v-model-component')
      emit('update:modelValue',e.target.value)
    }
    const val = computed({
      get(){
        return props.modelValue
      },
      set(val){
        emit('update:modelValue',val)
      }
    })
    return{
      btnClick,val
    }
  },
})
</script>
