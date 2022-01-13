<template>
  <div class="mt-5">
    composition api

    <h2>readonly</h2>
    {{ val }}
    <el-button type="danger" @click="changeVal"
      >change readonly value</el-button
    >

    <h2>shallowRef</h2>
    {{ obj }}
    <el-button type="primary" @click="changeObj">change shallowRef</el-button>

    <h2>自定义ref，防抖函数</h2>
    <!-- element会影响自定义ref,使用原生input可以解决 -->
    <!-- <el-input
      v-model="customVal"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
    ></el-input><br> -->
    <input type="text" v-model="customVal" />
    {{ customVal }}

    <h2>computed计算属性</h2>
    <div>{{ fullName }}</div>
    <el-button type="primary" @click="changeFullName"
      >test get and set in computed</el-button
    >

    <h2>watchEffect，watch</h2>
    <div>{{ watchName }}--{{ watchAge }}</div>
    <el-button type="info" @click="watchName += 'L'"
      >changeName(see console.log)</el-button
    >
    <el-button type="info" @click="changeAge">changeAge</el-button>

    <h2 ref="title">获取dom</h2><span>see the log</span>

    <h2>watch</h2>
    <div>{{info}}</div>
    <div>{{info2}}</div>
    <el-button type="info" @click="changeInfo">changeInfo(see log)</el-button>
    
    <h3>监听多个数据源（见log)</h3>


  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  readonly,
  ref,
  shallowRef,
  triggerRef,
  watch,
  watchEffect,
  getCurrentInstance
} from "vue";
import debounceRef from "./hook/useDebounceRef";
export default defineComponent({
  // 01第一个参数props(父组件传递过来的内容)，第二个参数ctx（attr(非prop属性),emit,slots（render()函数需要调用，一般使用Jsx））
  // 02readonly
  // readonly返回原生的只读代理(proxy的set方法被劫持，并且不能对其进行修改)
  setup() {
    const val = readonly(ref("dafa"));
    const changeVal = () => {
      val.value = "change";
    };

    // 03shallowRef浅层ref对象
    const obj = shallowRef({ name: "harry" });
    const changeObj = () => {
      obj.value.name = "change";
      // 手动触发修改
      triggerRef(obj);
    };

   // 自定义ref
    const customVal = debounceRef("hello,harry");

    const firstName = ref("harry");
    const lastName = ref("harr1");

    // 04computed返回值是ref对象
    // 4.1computed接受一个getter函数，返回一个不变的ref对象
    // 4.2接受一个具有get和set的对象，返回一个可读写的ref对象
    const fullName = computed({
      get() {
        return firstName.value + lastName.value;
      },
      set(newVal: string) {
        let arr = newVal.split(" ");
        firstName.value = arr[0];
        lastName.value = arr[1];
      },
    });
    const changeFullName = () => {
      fullName.value = "newharry newharry1";
    };

    // 05watchEffect,自动收集响应式的依赖,
    // 5.1会立即执行一次，过程中排查有无应用响应式的对象，后续监听
    const watchName = ref("harry");
    const watchAge = ref(18);
    let stop = watchEffect((onInvalidate) => {
      // 5.3watchEffect清除副作用
      // 监听过程中，可能发送网络请求，过程中age发生变化，需要清除到上一次的网络请求

      // 模拟网络请求
      const timer = setTimeout(() => {
        console.log("get success");
      }, 2000);
      onInvalidate(() => {
        //取消网络请求 request.cancel()
        clearTimeout(timer)
        console.log("清除副作用");
      });
      // 使用了watchName，会监听其的改变
      console.log("监听到了watchName的变化" + watchName.value);
      console.log(watchAge.value);
    });
    // 5.2停止监听
    const changeAge = () => {
      if (watchAge.value > 20) {
        stop();
      }
      watchAge.value++;
    };

    // 6获取dom
    const title = ref(null)
    // 6.1使用生命周期打印dom
    onMounted(()=>{
      console.log(title.value);
    })
    // 6.2使用watchEffect,若想要更新完再执行,需传入第二个参数flush:post（调整watchEffect的执行时机，挂载完成之后再执行）
    watchEffect(()=>{
      console.log(title.value);
    },{
      flush:'post'
    })

    // 7watch监听
    const info = reactive({name:'harry',age:22})
    const info2 = ref('ref的值获取到value')
    const changeInfo = ()=>{
      info.name = '1reactive对象获取到reactivea对象'
      info2.value = 'ref的值获取到value2'
      info.age = 23
    }
    // 7.1reactive对象获取到的newVal和oldVal获取的是reactivea对象
    // watch(info,(newVal,oldVal)=>{
    //   // 返回reactive对象
    //   console.log(newVal,oldVal);
    // })
    // watch(()=>{return {...info}},(newVal,oldVal)=>{
    //   //通过展开运算符  返回普通对象
    //   console.log(newVal,oldVal);
    // })
    // 7.2ref对象获取到本身值
    // watch(info2,(newVal,oldVal)=>{
    //   console.log(newVal,oldVal);
    // })
    // 7.3监听多个属性,info转化为普通对象(reactive默认是深度监听，如果解构之后，就不是深度监听，watch需要传递第三个参数)
    watch([()=>({...info}),info2],([newVal1,newVal2],[oldVal1,oldVal2])=>{
      console.log(newVal1,newVal2,oldVal1,oldVal2);
    },{
      deep:true,
      // 第一次自执行
      immediate:true
    })
    

    // 8.0使用自定义插件
    const instance = getCurrentInstance()
    console.log('使用自定义插件',instance?.appContext.config.globalProperties.$testName)

    return {
      val,
      changeVal,
      obj,
      changeObj,
      customVal,
      fullName,
      changeFullName,
      watchName,
      watchAge,
      changeAge,
      title,
      changeInfo,
      info,
      info2
    };
  },
});
</script>


<style lang="stylus" scoped>
h2 {
  margin-top: 30px;
}
</style>