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
