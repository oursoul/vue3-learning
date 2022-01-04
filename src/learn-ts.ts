// 1类和接口
interface Video{
  playVide(src:string):void;
}
interface Music{
  playMusic(scr:string):void;
}
// 接口的继承
interface VideoAndMusic extends Music,Video{

}
// 类实现接口
class mp3 implements Music{
  playMusic(scr: string): void {
      
  }
}

class tv implements VideoAndMusic{
  playVide(src: string): void {
      
  }
  playMusic(scr: string): void {
      
  }
}

// 2枚举，加入const变为常量枚举，提高性能；
enum Direction{
  up,
  down,
  left,
  right
}
// 双向赋值
console.log(Direction[0])//up
console.log(Direction.up)//0

// 3泛型generics,<>以及占位符(使用的时候才确定类型)
function getOrigin<T>(val:T):T{
  return val
}
const res = getOrigin(111)
// 交换两者的值
function swap<T,U>(a:T,b:U):[U,T]{
  return [b,a]
}
const res2 = swap(1,2)

// 约束泛型,extends关键字的使用
interface GetLengthProps{
  length:number;
}
function getLength<T extends GetLengthProps>(val:T):T{
  console.log(val.length)
  return val
}
const res3 = getLength('10')

// 泛型在接口的使用
class Queue<T>{
  private data= []
  push(item:T){
    return this.data.push(item)
  }
  pop(){
    return this.data.shift()
  }
}
const queue = new Queue<string>()
queue.push('123')
queue.pop().length()

interface ObjProps<T,U>{
  key:T;
  value:U
}
let obj:ObjProps<string,number> = {key:'test',value:11}
let arr:Array<number> = [1,2,3]
let arr2:number[] = [2,4,5]

// 类型别名（type）
type StrOrNumber = string | number
// 字面量
type test = 'left' | 'right'
let direction: test = 'left'
// 交叉类型
interface NameProps{
  name:string;
}
type Aperson = NameProps & {age:number}
let person1:Aperson = {name:'harry',age:17}

// 使用第三方库的情况,有第三方的声明文件 @types/jquery
declare var jQuery:(selector:string)=>any
jQuery('.need')

// function testDeclare(){

// }
// 这种错误并不是类型错误，而是找不到成员变量的错误
declare var testDeclare:()=>void
const a = window.testDeclare()

// 定义类型太宽泛会报错
// var b:Array = []

// 
interface User{
  name:string;
  age:number;
  // 定义函数
  say(name:string):void;
}
const user = {
  name:'test',
  age:13,
  say(name:string){
    console.log(name)
  }
}
// 默认参数
type A<T = string> = Array<T>;
// const aa: A = [1]; // type 'number' is not assignable to type 'string'.
const bb: A = ["1"]; // ok
const cc: A<number> = [1]; // ok

// 1.一些混淆写法
// 1.1箭头函数
let mySum:(x:number,y:number)=>number = function(x:number,y:number):number{
  return x+y
}
// 1.2接口内的小括号,指的是函数声名
interface Person{
  (age:number,name:string):boolean;
}
let person:Person = (age:number,name:string)=>{
  return true
}
// 2泛型
// 2.1使用interface和type定义自己的类型；使用& |逻辑运算符对类型
// 进行操作，从而生成新的类型；提供泛型定义的时候不指定类型，
// 在调用的时候指定具体的参数

// 理解：对值进行编程，泛型对类型进行编程

// 2.2泛型第一个例子id函数
// 
type isString = (args:string)=>string
type isNumber = (args:number)=>number
// 这种联合类型只能使用在interface上
// type together = isNumber | isString
// const id:together = (args)=>args
// id('sg')
const id:isNumber = (args)=>args
id(111)
function id1<T>(args:T):T{
  return args
}
id1<string>('sss')

// 2.3泛型约束,如果直接将参数限定为Sizeable类型，会有类型丢失的风险
interface Sizeable{
  size:number
}
function trace<T extends Sizeable>(args:T):T{
  console.log(args.size);
  return args
}

// 3常见的泛型
// 3.1集合类
const a1:Array<string> = ['11','22']
// 3.2React.FC起别名
// type FC<P = {}> = FunctionComponent<P>

// 4类型推导和默认参数
// 4.1类型推导仅仅是在初始化的时候进行推导
let a2 = 'test'
a2.includes('i')
// a2 = 1,报错
id1('aaa')//泛型页支持类型推导

// 5默认参数
type B<T=string> = Array<T>

const b1:B = ['123']
const b2:B<Number> = [123]






