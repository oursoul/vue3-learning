<template>
  <div>vmodal</div>  
  <input type="text" v-model="msg">
  <!-- <Myinput :modelValue="msg" @update:modal-value="msg = $event"></Myinput> -->
  <Myinput v-model="msg"></Myinput>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import Myinput from './Myinput.vue'
export default defineComponent({
  components:{
  Myinput
},
  setup() {
    const msg = ref("test")
    return{
      msg
    }
  },
})
</script>
