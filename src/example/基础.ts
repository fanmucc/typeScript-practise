// 布尔类型
let bol: boolean = false
// 数值类型
/**
 * 支持2进制 8进制 16进制
 * */
let nums: number = 1
// 字符串类型
let str: string = '123'
// void 什么类型都不是
const alertText = (text: string): void => {
    console.log(text)
}
alertText('void类型')
// 任意类型 any
let anys: any = 123
anys = '123'
// null 和 undefined
// null 和 undefined 是所有类型的子集
let n: null
let un: undefined
let num1: number = un
// 数组类型
let arr: number[]
let arr2: Array<number>
let arr3: (string | number)[]  // 字符串或者字符串类型  联合类型


// 元祖类型 固定长度，固定类型
let tuple: [string, number, boolean]
tuple = ['1', 1, false]


// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
console.log(Roles.SUPER_ADMIN, '枚举')
/*
* 可以自定义序列号
* 如果自定义序列号，则自定义后面的枚举值序列号自动加一，前面的不变
* */
enum Roles1 {
    SUPER_ADMIN=1,
    ADMIN=5,
    USER
}
console.log(Roles1.ADMIN, '自定义枚举索引')

// never类型  永远不存在的类型 是任何类型的子类型  never类型不能赋值其他类型  其他类型可以赋值never类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}
// 或者是死循环 都是never类型

// object类型
/**
 *
 * */
let obj = {
    name: 'ts'
}
function getObj(obj: object) : void {
    console.log(obj)
}
getObj({})

// 类型断言 强行指定
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (target as string).length
    } else {
        return target.toString().length
    }
}


