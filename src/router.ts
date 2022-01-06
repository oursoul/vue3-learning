import ColumnList from './views/Home.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import createArticle from './views/createPost.vue'
import {createRouter,createWebHistory} from 'vue-router'
import store from './store'
import Login from './views/Login.vue'
import Daily from './dailylearn/App.vue'
import Tab from './dailylearn/tab/App.vue'
import Slot from './dailylearn/slot/App.vue'
import Async from './dailylearn/async/App.vue'
import VmodalCom from './dailylearn/v-modal-com/App.vue'
import Transition from './dailylearn/transition/App.vue'
import Composition from './dailylearn/compositionapi/App.vue'



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
  },{
    path:'/daily',
    name:'daily',
    component:Daily,
    children:[{
      path:'tab',//子路由不需要/
      name:'tab',
      component:Tab
    },{
      path:'slot',//子路由不需要/
      name:'slot',
      component:Slot
    },{
      path:'async',//子路由不需要/
      name:'async',
      component:Async
    },{
      path:'modal',//子路由不需要/
      name:'vmodalcom',
      component:VmodalCom
    },{
      path:'transition',//子路由不需要/
      name:'transition',
      component:Transition
    },{
      path:'composition',//子路由不需要/
      name:'composition',
      component:Composition
    }]
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