<template>
  <mySlot>
    <div class="alert alert-primary">slot content</div>
  </mySlot>
  <mySlot :name="name">
    
      <div class="alert alert-primary">
        slot content default
      </div>
    
    <template #slot1>
      <div class="alert alert-primary">
        slot content1
      </div>
    </template>
    <template v-slot:[name]>
      <div>
        动态插槽
      </div>
    </template>
    <!-- 作用域插槽 -->
    <template v-slot:childProps="data">
      <div>
        {{data.childProps}}
       </div>
    </template>
  </mySlot>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue'
import mySlot from './Slot.vue'
export default defineComponent({
  components:{mySlot},
  setup() {
    const name = ref('dynamic')
   return{
    name
   }
  },
})
</script>
