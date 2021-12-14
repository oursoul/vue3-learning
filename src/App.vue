

<template>
  <div class="container">
    <global-header :user="user"/>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light ">
      <ul class="list-inline mb-0" style="list-style:none">
        <li class="list-inline-item mx-3">@ws</li>
        <li class="list-inline-item mx-3">contact us</li>
        <li class="list-inline-item mx-3">document</li>
        <li class="list-inline-item mx-3" :data-go="`ces${test}`">more</li>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts">

import GlobalHeader ,{UserProps} from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

// export const currentUser:UserProps = {
//   isLogin:true,
//   name:'harry',
//   id:123456,
// } 
export default defineComponent({
  name:'App',
  components:{
    GlobalHeader
  },
  setup(){
    const store = useStore()
    const user = computed(()=> store.state.user)
    return{
      user:user,
      test:'123'
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
