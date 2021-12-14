<template>
  <ul class="row">
    <li v-for="column in columnList" class="col-4 mb-3" style="list-style: none;" :key="column.id">
      <div class="card shadow-sm h-100">
        <div class="card-body text-center">
        <img :src="column.avatar" class="w-25 rounded-circle border border-light my-3" :alt="column.title">
          <h5>{{column.title}}</h5>
          <p class="card-text">{{column.description}}</p>
          <router-link :to="{name:'detail',params:{id:column.id}}" class="btn btn-outline-primary">view detals</router-link>
        </div>  
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent,PropType, computed } from "vue";
export interface ColumnProps{
  id:number;
  title:string;
  avatar?:string;
  description:string;
}
export default defineComponent({
  name:'ColumnList',
  props:{
    list:{
      // 构造函数断言成类型，需用PropType包裹
      type:Array as PropType<ColumnProps[]>,
      required:true
    }
  },
  setup(props){
    const columnList = computed(()=>{
      return props.list.map(item=>{
        if(!item.avatar){
          item.avatar = 'https://images.wondershare.com/democreator/images2021/education-students/getting-start-icon3.svg'
        }
        return item
      })
    })
    return{
      columnList
    }
  }
})
</script>
