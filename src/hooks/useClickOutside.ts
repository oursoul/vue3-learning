import {ref,onMounted,onUnmounted,Ref} from 'vue'

const useClickOutside = (elementRef:Ref<null|HTMLElement>) => {
  const isClickOutside = ref(false)
  onMounted(()=>{
    document.addEventListener('click',handler)
  })
  onUnmounted(()=>{
    document.removeEventListener('click',handler)
  })
  const handler = (e:MouseEvent) =>{
    if(elementRef.value){
      if(elementRef.value.contains(e.target as HTMLElement)){
        isClickOutside.value = false
      }else{
        isClickOutside.value = true
      }
    }
  }
  return isClickOutside
}

export default useClickOutside