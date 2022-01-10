import { customRef } from "vue";

export default function(val){
  let timer = null

  return customRef((track,trigger)=>{
    // track依赖，trigger触发更新
    return{
      get(){
        // 收集依赖
        track()
        return val
      },
      set(newVal){
        clearTimeout(timer)
        timer = setTimeout(()=>{
          val = newVal
          trigger()
        },1000)
        
      }
    }
  })

}