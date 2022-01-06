<template>
  <router-link to="/daily/tab"  class="btn btn-success px-4 mx-4">tab</router-link>
  <router-link to="/daily/slot"  class="btn btn-success px-4 mx-4">slot</router-link>
  <router-link to="/daily/async"  class="btn btn-success px-4 mx-4">async</router-link>
  <router-link to="/daily/modal"  class="btn btn-success px-4 mx-4">modal-component</router-link>
  <router-link to="/daily/transition"  class="btn btn-success px-4 mx-4">transition</router-link>
  <router-link to="/daily/composition"  class="btn btn-success px-4 mx-4">composition api</router-link>
  
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  setup() {
   
  },
})
</script>
