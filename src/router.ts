import ColumnList from './views/Home.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import createArticle from './views/createPost.vue'
import {createRouter,createWebHistory}from 'vue-router'
import store from './store'
import Login from './views/Login.vue'
import { GlobalDataProps } from './store'

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

export default router