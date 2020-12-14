const pass = (name: string, age:number,bust:number) => {
  age < 24 && bust >= 90 && console.log(name+'进入面试')
  age > 24 || (bust < 90 && console.log(name+'淘汰'))
}

pass('chen',18,100)

const view = (name: string, age:number,bust:number) => {
  console.log(name);
}

view('chen2',29,100)

//重复类型注解 定义成为统一的接口
interface Girl {
  name: string,
  age: number,
  bust: number,
  waistline?: number, //可选值
  [propname:string]: any, // 属性名字符串，值是任意类型
  say():string
}

const girl:Girl = {
  name: 'chenc',
  age:15,
  bust: 100,
  waistline: 22,
  sex:1,
  say() {
    console.log('good');
    return 'good'
  }
} 

const pass2 = (girl:Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name+'进入面试')
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name+'淘汰'))
}

const view2 = (girl:Girl) => {
  console.log(girl.name);
  console.log(girl.waistline);
  console.log(girl.sex);
  girl.say()
}

pass2(girl)
view2(girl)


// type类型可以直接给类型  type Girl = string  接口必须是对象