import {createStore} from 'vuex'
// import {postData} from './views/ColumnDetail.vue'
// import {testData} from './views/home.vue'
// import {currentUser} from './App.vue'
export interface UserProps{
  name?:string;
  isLogin:boolean;
  id?:number;
  columnId?:number
}
export const user:UserProps = {
  isLogin:false,
  name:'harry',
  id:12345655,
  columnId:2
} 

export interface ArticleProps{
  id:number;
  title:string;
  content:string;
  image?:string;
  createAt:string;
  columnId:number;
}
export const articleData:ArticleProps[] = [{
  id:1,
  title:'test1-column',
  content:'this s test1 column,a instresting description',
  createAt:'2021/12/13',
  columnId:1,
  image:'https://images.wondershare.com/democreator/images2021/education-students/tips-swiper-pic2.png'
},{
  id:2,
  title:'test2-column',
  content:'this s test2 column,a instresting description',
  createAt:'2021/12/13',
  columnId:2,
  image:'https://images.wondershare.com/democreator/images2021/education-students/tips-swiper-pic2.png'
},{
  id:2,
  title:'test3-column',
  content:'this s test22 column,a instresting description',
  createAt:'2021/12/13',
  columnId:2,
  image:'https://images.wondershare.com/democreator/images2021/education-students/tips-swiper-pic2.png'
}]

export interface ColumnProps{
  id:number;
  title:string;
  avatar?:string;
  description:string;
}

export const columnData:ColumnProps[] = [{
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

export interface GlobalDataProps{
  articleData:ArticleProps[];
  columnData:ColumnProps[];
  user:UserProps
}

 const store = createStore<GlobalDataProps>({
   state:{
     articleData:articleData,
     columnData:columnData,
     user:user
   },
   mutations:{
     login(state){
       state.user = {...state.user,isLogin:true,name:'harry tao',columnId:2}
     },
     createArticle(state,val){
       console.log(val)
       state.articleData.push(val)
       console.log(state.articleData)
     }
   },
   getters:{
     getColumnById:(state)=>{return (id:number)=>{ return state.columnData.find(item=>item.id == id)}},
     getArticleById:(state) =>{return (id:number) =>{return state.articleData.filter(item=>item.id == id)}}
   }
 })
 

 export default store