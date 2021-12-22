<template>
  <nav class="d-flex justify-content-between px-4 bg-primary mb-5">
    <a href="#" class="navbar-brand"><img src="https://images.wondershare.com/democreator/images2021/education-students/nav-icon1.svg" alt=""></a>
    <div v-if="!user.isLogin">
      <a href="#" class="btn btn-outline-light my-2 mx-4" @click="handleLogin">login</a>
      <a href="#" class="btn btn-outline-light my-2">register</a>
    </div>
    <div v-else>
      <!-- <a href="#" class="btn btn-outline-light my-2 ">user</a> -->
      <drop-down :title="`你好，${user.name}`"></drop-down>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue, { defineComponent ,PropType} from 'vue'
import DropDown from './DropDown.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import { useRouter } from 'vue-router'
export interface UserProps{
  name?:string;
  isLogin:boolean;
  id?:number;
}
export default defineComponent({
  name:'GlobalHeader',
  props:{
    user:{
      type:Object as PropType<UserProps>,
      required:true
    }
  },
  components:{
    DropDown
  },
  setup(){
    const router = useRouter()
    const store = useStore<GlobalDataProps>()
    const handleLogin = ()=>{
      // store.commit('login')
      router.push({name:'login',path:'/login'})
    }
    return{
      handleLogin
    }
  }
  
})
</script>