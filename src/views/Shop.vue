<template>
  <div>
   <h2 ref="title">Part2 <span class="lead">learn vuex actions</span></h2> 
   <div class="row row-cols-4">
     <div class="col" v-for="item in banner" :key="item.name">
       <div>
        <img :src="item.image_src" alt=""><br>
        {{item.name}}
       </div>
     </div>
   </div>
   <div class="input-group w-50 m-auto my-5 mb-3">
    <input type="text" v-model="product_name" class="form-control" placeholder="search a product" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button @click="handleSearch" class="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
    <div style="line-height:2.2;margin-left:4rem;" class="ml-5">for example:tv</div>
  </div>
  <div class="list-group w-75 m-auto">
    <a href="#" v-for="item in list" :key="item.goods_id" class="list-group-item list-group-item-action text-left">{{item.goods_name}}</a>
  </div>

  <hr>
  <div>
   <h2 ref="title">Part3 <span class="lead">learn reactive、ref、toRefs</span></h2> 
    {{data.count}}-{{data.increate()}}-{{data.double}}<br>
    {{count}} -- {{increate()}} - {{double}}
  </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref,toRefs } from 'vue'
import {useStore} from 'vuex'
import {GlobalDataProps} from '../store'
import {searchData} from '../store'
interface DataProps{
  count:number;
  increate:()=>void;
  double:number;
}
export default defineComponent({
  setup() {
    const store = useStore<GlobalDataProps>()
    onBeforeMount(()=>{})
    onMounted(()=>{
      // 使用dispatch方法（异步
      store.dispatch("fetchHomeData")
      // console.log(title)
    })
    onBeforeUpdate(()=>{})
    onUpdated(()=>{})
    onBeforeUnmount(()=>{})
    onUnmounted(()=>{})

    const list= computed(()=>store.state.searchData && store.state.searchData.slice(0,8))
    const banner = computed(()=>store.state.shopData)
    const product_name = ref("")
    const handleSearch = ()=>{
     store.dispatch('fetchProduct',product_name.value)
    }
    // 通过ref获取dom接点
    const title = ref<null|HTMLElement>(null)
    // 测试使用reactive,使用toRefs在return 可使用...展开运算符
    const data:DataProps = reactive({
      count:1,
      increate:()=>data.count+1,
      double:computed(()=>data.count*2)
    })
    const data1 = toRefs(data)
    // 模块化
    
    return{
      list,product_name,handleSearch,banner,title,data,...data1
    }
  },
})
</script>

<style lang="stylus" scoped>
.text-left{
  text-align left
}
</style>