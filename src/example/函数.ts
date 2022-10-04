console.log('函数')

let adds: (x:number, y: number) => number
adds = (arg1: number, arg2: number): number => arg1 + arg2

// 接口定义函数类型
interface Adds1 {
    (x: number, y: number): number
}
type Adds2 = (x: number, y: number) => number
let addFun: Adds2
addFun = (x: number, y: number) => x + y

// 可选参数
// addFunc = (arg1: number, arg2: number, arg3?: number) => arg1 + arg2
type AddFunction = (x: number, y: number, z?: number) => number
let addFunction: AddFunction
addFunction = (x: number, y:number) => x + y
addFunction = (x: number, y:number, z:number) => x + y + z

// 默认参数
addFunction = (x: number, y:number, z = 3) => x + y + z
addFunction(1, 2)

// 操作符
// const handleData = (arg1: number, ...args: number[]): void => {
//     //
// }

// 函数重载
function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item) => Number(item))
    }
}

console.log(handleData('123'))
console.log(handleData(123))