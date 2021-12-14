<template>
  <div>
    <h4>create a article</h4>
    <input type="text" v-model="title">
    <input type="textarea" v-model="content">
    <a class="btn btn-outline-primary" @click="handleSubmit()">submit</a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { GlobalDataProps ,ArticleProps} from '../store'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router' 
export default defineComponent({
  setup() {
    const title = ref("")
    const content = ref("")
    const store = useStore<GlobalDataProps>()
    const router = useRouter()
    const handleSubmit = ()=>{
      console.log(title.value)
      const columnId = store.state.user.columnId 
      if(columnId){        
        const newPost:ArticleProps = { 
          id:new Date().getTime(),
          title:title.value,
          content:content.value,
          columnId,
          createAt:new Date().toLocaleDateString()
        } 
        store.commit('createArticle',newPost)
        router.push({name:'detail',params:{id:columnId}})
      }
    }
    return{
      title,content,handleSubmit
    }
  },
})
</script>


