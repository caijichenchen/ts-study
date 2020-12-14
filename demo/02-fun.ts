function say():void {
  console.log(11);
}

say()

const sayHello:() => void = () => {
  console.log('hello');
}

sayHello()

// const objFun: () => void = ({name:string,age:number}) {
//   console.log(name,age);
// }

// objFun({name:'chen',age:23})
function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}

const three = add({ one: 1, two: 2 });