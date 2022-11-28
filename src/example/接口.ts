console.log('接口')
// 基本用法
// 可选属性
interface NameInfo {
    readonly firstName: string;  // 只读属性
    lastName: string;
    age?: number; // 可选类型
    [prop: string]: any; // 索引签名 表示一个属性名为string类型，ts类型为number
}
const getFullName = ({firstName, lastName, age}: NameInfo): string => {
    return `${firstName} ${lastName} 等于 ${age || ''}`
}
// const getFullName = ({firstName, lastName}: {firstName: string, lastName: string}): string => {
//     return `${firstName} ${lastName}`
// }
console.log(getFullName(({
    firstName: '前',
    lastName: '后',
})))

// 可选类型
console.log(getFullName(({
    firstName: '前',
    lastName: '后',
    age: 20,
})))

// 多余属性检查
// 第一种 强制类型转换，as 强制认为是NameInfo类型
console.log(getFullName(({
    firstName: '前',
    lastName: '后',
    age: 20,
    a: '多余属性'
}) as NameInfo))
// 第二种为 多余属性检查
// 第三种为 类型兼容性
// 绕开多余属性检查
/**
 * 类型兼容性
 * const b = a ;
 * b里面的属性a必须有，而b里面的属性a不一定有
 * */
const vegetableInfo = {
    firstName: '前',
    lastName: '后',
    age: 20,
    a: '多余属性',
    c: 123
}
getFullName(vegetableInfo)
// 只读属性
// 数组的只读
interface ArrInter {
    0: number;
    readonly 1: string;
}
let arr1: ArrInter = [1, 'a']
// arr[1] = 2
// 函数类型
interface  AddFunc {
    (num1: number, num2: number): number
}
// 也可以使用type类型
type AddFuncType = (num1: number, num2: number) => number
const add: AddFunc = (a, b): number => a + b
const add1: AddFunc = (a, b): number => a + b
console.log(add(1,1), add1(2,2))
// 索引类型
interface  RoleDic {
    [id: number]: string; // 定义属性名必须为数值类型，值为字符串类型
}
const role1: RoleDic = {
    0: '123',
}
// 继承接口
interface Vegetables {
    color: string;
}
// 继承vegetables类型
interface Tomato extends Vegetables{
    radius: number;
}
interface Carrot {
    length: number
}
// 混合类型接口
interface Counter {
    (): void;
    count: number
}
const getCounter = (): Counter => {
    const c = () => {c.count++}
    c.count = 0
    return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
