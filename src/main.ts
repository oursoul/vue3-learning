import { createApp } from 'vue'
import App from './App.vue'
// import {createStore} from 'vuex'
import store from './store'
import ColumnList from './views/Home.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import createArticle from './views/createPost.vue'
import Login from './views/Login.vue'
import { GlobalDataProps } from './store'
import {createRouter,createWebHistory}from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
  history:routerHistory,
  routes:[{
    path:'/',
    name:'home',
    component:ColumnList
  },{
    path:'/detail/:id',
    name:'detail',
    component:ColumnDetail
  },{
    path:'/create',
    name:'create',
    component:createArticle,
    meta:{requireLogin:true}
  },{
    path:'/login',
    name:'login',
    component:Login,
    meta:{redirectAlreadyLogin:true}
  }]
})

router.beforeEach((to,from,next)=>{
  console.log(to.meta)
  // console.log(to)
  // console.log(from)
  // next()
  if(to.meta.requireLogin && !store.state.user.isLogin){
    next({name:'login',})
  }
  else if(to.meta.redirectAlreadyLogin && store.state.user.isLogin){
    next({name:'home'})
  }
  else{
    next()
  }
})

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
