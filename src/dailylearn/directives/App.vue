<template>
  <div>
    <h2>自定义指令</h2>
    <input type="tex" v-focus.add="'harry'">

    <div v-format-time>{{timestamp}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

import registerDirectives  from './directive'
export default defineComponent({
  setup() {
    const timestamp = ref(1624452193)
    return{
      timestamp
    }
  },
})
</script>
