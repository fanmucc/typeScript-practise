console.log('收敛类型')
// function padLeft(padding: number | string, input: string): string {
//     return " ".repeat(padding) + input
// }
// typeof类型守卫
/*
* 使用typeof 类型守卫，判断参数是什么类型进行单独处理
* 类型有：
* string
* number
* bigint
* boolean
* symbol
* undefined
* object
* function
* */
function padLeft(padding: number | string, input: string): string {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + input
    }
    return padding + input
}

console.log(padLeft(2, '3'))

// 真实性缩小
/*
* js中可以通过 &&、||、if、!等操作符来判断类型  同时也可以通过== != === !==来缩小类型
* 返回false的有
* 0
* NaN
* ""
* 0n
* null
* undefined
* */
function getUserOnlineMessage(numUsersOnline: number): string {
    if (numUsersOnline) {
        return `这里走到了true`
    }
    return `这里走到了false`
}
console.log(getUserOnlineMessage(1))
// 防止null或者undefined
function printAll(strs: string | string[] | null): void {
    if (strs && typeof strs === 'object') {
        console.log(strs)
    } else if (typeof strs === 'string') {
        console.log(strs)
    }
}
printAll(['123'])

// in
/*
* in 操作符
* 通过in来判断 一个对象是否具有待名称属性
* */
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}
function move(animal: Fish | Bird): void {
    if ('swim' in animal) {
        console.log('fish')
    } else {
        console.log('bird')
    }
}

console.log(move({
    swim: () => {
        console.log('测试测试')
    }
}))

type Fish1 = { swim: () => void };
type Bird1 = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move1(animal: Fish1 | Bird1 | Human) {
    if ("swim" in animal) {
        animal;
    } else {
        animal;
    }
}

// instanceof
/*
* 检查一个值 是否是另一个值的实例
* */
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log('为时间实例')
    } else {
        console.log('是字符串')
    }
}

// 控制流分析
function example() {
    let x: string | number | boolean;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    } else {
        x = 100;
        console.log(x);
    }
    return x;
}

// 类型谓语
type Fish2= {
    swim: () => void;
    name: string;
}
type Bird2 = {
    fly: () => void;
    name: string;
}

declare function getSmallPet(): Fish2 | Bird2;

function isFish2(pet: Fish2 | Bird2): pet is Fish2 {
    return (pet as Fish2).swim !== undefined;
}

// let zoo: (Fish2 | Bird2)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
// const underWater1: Fish2[] = zoo.filter(isFish2)
// console.log(underWater1, '===underWater1')
// const underWater2: Fish[] = zoo.filter(isFish2) as Fish2[]
// console.log(underWater2, '===underWater2')
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish2 => {
//     if (pet.name === 'sharkey') return false
//     return isFish2(pet)
// })

// 穷举
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}
// ---cut---
type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

console.log(getArea({
    kind: 'circle',
    radius: 123
}))