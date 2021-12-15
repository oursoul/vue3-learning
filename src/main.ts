import { createApp } from 'vue'
import App from './App.vue'
// import {createStore} from 'vuex'
import store from './store'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = "https://api-hmugo-web.itheima.net/"
// axios.interceptors.request.use(config=>{
//   config.params = {...config.params,cat_id:'9'}
//   return config
// })

// axios.get('/api/public/v1/goods/search').then(res=>{
//   console.log(res)
// })

// async function hello(){
//   const test = await Promise.resolve('hello')
//   return test
// }
// hello().then(res=>{console.log(res)})

// router.afterEach()

// const store = createStore({
//   state:{
//     count:0
//   },
//   mutations:{
//     add(state){
//       state.count++
//     }
//   }
// })
// console.log(store.state)
// store.commit('add')
// console.log(store.state)

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
