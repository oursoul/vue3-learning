<template>
<div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="userName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model="psw" class="form-control" id="exampleInputPassword1">
  </div>
  <button @click="handleLogin" class="btn btn-primary">Submit</button>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
export default defineComponent({
  name:'login',
  setup() {
    const store = useStore<GlobalDataProps>()
    const psw = ref("")
    const userName = ref("")
    const handleLogin = ()=>{
      const data = {psw,userName}
      store.dispatch('handleLogin',data)
      
    }
    return{
      handleLogin,psw,userName
    }
  },
})
</script>
