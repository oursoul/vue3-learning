

<template>
  <div class="container">
    <global-header :user="user"/>
    <router-view></router-view>
    
    <div class="custom-control my-3">
      <input type="checkbox" id="check1" class="custom-control-input"/>
      <label class="custom-control-label" for="check1">
        I accept these rules.
      </label>
    </div>
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
.custom-control-input:checked ~ .custom-control-label::before {
      background-repeat: no-repeat;background-image: url('https://famisafe.wondershare.com/images/images-2021/network-security-q1/check-icon.png');background-size: 100% 100%;
     border:none;
        transition: background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;

   }
    .custom-control {
    cursor:pointer;
    position: relative;
    z-index: 1;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
}
.custom-control-input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.25rem;
    opacity: 0;
}
.custom-control-label{
  cursor: pointer;
  position: relative;
    margin-bottom: 0;
    vertical-align: top;
-moz-user-select: none; 
-o-user-select:none; 
-khtml-user-select:none; 
-webkit-user-select:none; 
-ms-user-select:none; 
user-select:none;
}
.custom-control-label::before{
   left: -39px;
       position: absolute;
       display: block;
           pointer-events: none;
    content: "";
    background-color: #fff;
    border: #adb5bd solid 0.125rem;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    width: 30px;
    height: 30px;
        border-radius: 0.25rem;
        transition: background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;

}
.custom-control-label::after{
    content: "";
    background: no-repeat 50% / 50% 50%;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    left: -30px;
    top: 0.5rem;
}
.custom-control-input:checked ~ .custom-control-label::after {background-image: url('');}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
