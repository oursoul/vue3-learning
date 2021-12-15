<template>
  <div>
   <h2>Part2 <span class="lead">learn vuex actions</span></h2> 
   <div class="row row-cols-4">
     <div class="col" v-for="item in list" :key="item.name">
       <div>
        <img :src="item.image_src" alt=""><br>
        {{item.name}}
       </div>
     </div>
   </div>
   <div class="input-group w-25 m-auto my-5 mb-3">
    <input type="text" v-model="product_name" class="form-control" placeholder="search a product" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button @click="handleSearch" class="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
  </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import {useStore} from 'vuex'
import {GlobalDataProps} from '../store'
export default defineComponent({
  setup() {
    const store = useStore<GlobalDataProps>()
    onMounted(()=>{
      // 使用dispatch方法（异步
      store.dispatch("fetchHomeData")
    })
    const list = computed(()=>store.state.shopData)
    const product_name = ref("")
    const handleSearch = ()=>{
     store.dispatch('fetchProduct',product_name.value)
    }
    return{
      list,product_name,handleSearch
    }
  },
})
</script>
