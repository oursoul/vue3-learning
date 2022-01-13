import { def } from "@vue/shared"

export default{
  install(app){
    app.config.globalProperties.$testName='harry'
    console.log(app)
  }
}

