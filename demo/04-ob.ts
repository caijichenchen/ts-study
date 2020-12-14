const list:{name:string,age:number}[] = [
  {name:'chen',age:1},
  {name:'chen1',age:1}
]

// 类型别名
type Person = { name:string, age:number }

const list2:Person[] = [
  {name:'chen',age:1},
  {name:'chen1',age:1}
]

class Madam {
  name: string;
  age: number
}

const list3:Madam[] = [
  {name:'chen',age:1},
  {name:'chen1',age:1}
]