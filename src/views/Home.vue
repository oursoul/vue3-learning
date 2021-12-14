<template>
  <div>
    <column-list :list="list"/>
  </div>
</template>

<script lang="ts">
import ColumnList,{ColumnProps} from '../components/ColumnList.vue'
import { useStore } from 'vuex';
import {GlobalDataProps} from '../store'
import { computed, defineComponent } from "vue";

export const testData:ColumnProps[] = [{
  id:1,
  title:'title1',
  description:"description1",
  avatar:"https://images.wondershare.com/democreator/images2021/education-students/getting-start-icon1.svg"
},{
  id:2,
  title:'title2',
  description:"description2",
  avatar:"https://images.wondershare.com/democreator/images2021/education-students/learning-flexibility-pic.png"
}]
export default defineComponent({
  name:'detail',
  setup(){
    const store = useStore<GlobalDataProps>()
    // 访问数据
    const list = computed(()=>store.state.columnData)
    
    return{
        list:list,
    }
  },
   components:{
    ColumnList,
  },
})
</script>