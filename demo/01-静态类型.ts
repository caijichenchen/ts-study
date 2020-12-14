const count:number = 12
count.toFixed(1)
console.log(count);

// 静态类型
const flag:boolean = false
const num:number = 13
const str:string = '22'


let list:number[] = [1,23]
let list2: Array<number> = [1,23,4]

let x: [string,number]
x = ['hello',2] // 元组类型

const fn1:() => void = (da:string = '11') => { // 函数没有返回值  void基本类型只能复制undefined null
  console.log(1)
}

let u:undefined = undefined
let n:null = null

enum Color {Red = 1,Green,Blue}
let c:Color = Color.Red
let a:string = Color[1]
console.log(c,a);

console.log(list2);
console.log(str);

// 自定义静态类型
interface Person {
  name: String,
  age: Number
}

const chen:Person = {
  name: '菜鸡陈',
  age: 12
}


// 对象类型
// 1.object
const obj1: {
  name: string,
  age: number
} = {
  name: 'giao',
  age: 13
}
// 2.array
const obj2:string[] = ['giao']
// 3.类
class Obj {}
const obj3:Obj = new Obj()
// 4.fun
const obj4:() => string = () => {
  return '22'
}