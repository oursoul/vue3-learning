<template>
   <!-- <pre>{{route}}</pre> -->
   <div class="w-75 mx-auto">
     <div class="row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column?.avatar" :alt="column?.title" class="rounded-circle img-fluid">
      </div>
      <div class="col-9 ">
        <h4 class="text-left">{{column?.title}}</h4>
        <p class="text-muted text-left">{{column?.description}}</p>
      </div>
     </div>
     <div>
       <article v-for="item in list" :key="item.id" class="card mb-3 shadow">
         <div class="card-body pl-5">
           <h4>{{item.title}}</h4>
           <div class="row my-3 align-items-center">
             <div class="col-3" v-if="item.image">
               <img class="rounded-lg img-fluid" :src="item.image" :alt="item.title">
             </div>
             <p :class="{'col-9':item.image}">{{item.content}}</p>
           </div>
           <span class="text-muted">{{item.createAt}}</span>
         </div>

       </article>
     </div>
  
   </div>

</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {useRoute} from 'vue-router';
import { testData } from "./Home.vue";
import { useStore } from "vuex";
import {GlobalDataProps} from '../store'
export default defineComponent({
  name:'detail',
  setup(){
    const route = useRoute()
    const store = useStore<GlobalDataProps>()
    const currentId = +route.params.id
    const column =computed(()=>store.getters.getColumnById(currentId)) 
    // const list = computed(()=>store.getters.getArticleById(currentId))
    const list = computed(()=>{
     return store.state.articleData.filter(item=>item.columnId===currentId)
    // return store.state.articleData
    }
    )
   
    return{
      // route,
      column,
      list
    }
  }
})
</script>

<style lang="stylus" scoped>
.text-left,h4,p,.card-body{
  text-align left
}
</style>