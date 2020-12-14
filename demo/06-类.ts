class Person {
  say() {
    return 'say'
  }
  talk() {
    return 'talk'
  }
}

class Teacher extends Person {
  teach() {
    console.log('teach');
    return 'teach'
  }
  say() { // 重写
    console.log('teacher say');
    return 'teacher say'
  }
  talk() { // 继承父类改造
    console.log('teacher' + super.talk());
    return 'teacher' + super.talk()
  }
}

const chen = new Teacher()
chen.talk()
chen.teach()
chen.say()



// public 
// 默认public属性 内部外部都可以进行调用
class Public {
  public name:string;
  /**
   * say
   */
  public say() {
    console.log(this.name + 'say');
  }
  private age:number;  // 只允许内部调用
  protected sex:number // 只有在继承类才能被调用
}

class P2 extends Public { // sex可以
  saySex() {
    console.log(this.sex);
  }
}

const p = new Public()
p.name = 'chen'
// p.age = 2 // error
p.say()

const p1 = new P2()
// p1.sex = 1 // error
p1.saySex()

// super
class Person1{
  constructor(public name:string){}
}
class Student extends Person1 {
  constructor(public age:number) {
    super('chen')
  }
}
const s1 = new Student(18)
console.log(s1.name,s1.age);

// getter setter
class XiaoJieJie {
  public readonly _name:string // 只读
  constructor(private _age:number, name:string) {
    this._name = name
  }
  get age() {
    return this._age -10
  }
  set age(val:number) {
    this._age = val
  }
  // static不需要new
  static say() {
    console.log(111);
  }
}
XiaoJieJie.say()
const dajiao = new XiaoJieJie(28,'chen') 
dajiao.age = 25
console.log(dajiao.age);
console.log(dajiao);


// 抽象类 类似于私有?
// abstract 
