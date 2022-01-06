import { createApp } from 'vue'
import App from './App.vue'
// import {createStore} from 'vuex'
import store from './store'
import router from './router'
import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'animate.css'
axios.defaults.baseURL = "https://api-hmugo-web.itheima.net/" 
axios.interceptors.request.use(config=>{
  store.commit('setLoading',true)
  return config
})

axios.interceptors.response.use(config=>{
  store.commit('setLoading',false)
  return config
})
// axios.post('https://api-hmugo-web.itheima.net/api/public/v1/users/wxlogin',{'encryptedData':'test',rawData:'test','iv':'test','signature':'test',code:'4562510'}).then(res=>{console.log(res);
// })
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
app.use(ElementPlus)
app.mount('#app')
