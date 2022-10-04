console.log('泛型')
// 简单使用
// const getArray= <T>(value: T, times: number = 5): T[] => {
//     // return new Array(times).fill(value)
//     return [value]
// }
// console.log(getArray<number>(2, 3))
// 泛型变量
const getArray = <T, U>(param1: T, param2: U, times = 3): Array<[T, U]> => {
    return new Array(times).fill([[param1, param2]])
}
console.log(getArray<string, number>('123', 456, 5))

// 类型别名泛型
type GetTypeArray = <T>(arg: T, times: number) => T[]
let getTypeArray: (arg: number, time: number) => InterGetArray<number> = <T>(arg: T, time: number) => new Array(time).fill(arg)
console.log(getTypeArray<number>(123, 2))
// 接口泛型
interface InterGetArray {
    <T>(arg: T, time: number): T[]
}

let interGetArray = (arg: number, time: number): InterGetArray => new Array(time).fill(arg)
console.log(interGetArray(123, 2))

// 泛型类型

// 泛型约束
interface ValueLength {
    length: number
}
const newgetArray = < T extends ValueLength>(arg: T, times: number): T[] => {
    return Array(times).fill(arg)
}

newgetArray([1,2,3], 3)
// newgetArray(123, 3)  数值没有Length属性


// 在泛型约束中使用类型参数
// keyof 遍历  K extends keyof T  k继承遍历后的T的属性
const getProps = <T, K extends keyof T>(obj:T, propsName: K): T[K] => {
    return obj[propsName]
}
const objs = {
    a: 'a',
    b: 'b'
}
getProps(objs, 'a')
// getProps(objs, 'c')   // objs上没有c属性
