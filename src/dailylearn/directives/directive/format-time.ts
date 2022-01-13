import dayjs from 'dayjs'
export default function(app){
  app.directive("format-time",{
    mounted(el){
     console.log(el.textContent);
     let timestamp = parseInt(el.textContent)
     //  转成毫秒
     if(el.textContent.length ==10){
       timestamp = timestamp*1000
     }
     el.textContent = dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")
    }
  })

}