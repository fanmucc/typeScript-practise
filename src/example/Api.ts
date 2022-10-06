console.log('Ts高级类型')
// keyof
// extends
/*
* 循环取 interface 的属性名
* */
interface KeyOfDemo {
    x: number | string;
    y: number;
}

const getKeyOfProps =<T extends  KeyOfDemo, K extends keyof KeyOfDemo>(data: T, name: K): T[K] => {
    return data[name]
}

console.log(getKeyOfProps({
    x: '===',
    y: 456
}, 'x'))

// Record
/*
* 以 typeof 格式快速创建一个类型，次类型包含一组指定的属性且都是必填
* */
type Coord = Record<'x' | 'y', number>
// 等同于
type Coords = {
    x: number;
    y: number;
}

// Partial
/*
* 将类型定义的所有属性都修改为可选属性
* */
type Coord1 = Partial<Record<'x' | 'y', number>>
// 等同于
type Coord1s = {
    x?: number;
    y?: number;
}
// Readonly
/*
* 将类型定义的所有属性都修改为只读属性
* */
type Coord2 = Readonly<Record<'x' | 'y', number>>
// 等同于
type Coord2s = {
    readonly  x: number;
    readonly  y: number;
}
// Pick
/*
* 从类型定义的属性中，选取指定一组属性，返回一个新的类型定义
* */
type Coord3 = Record<'x' | 'y', number>;
type Coord3X = Pick<Coord, 'x'>;

// 等用于
type Coord3Xs = {
    x: number;
}
// 手动实现 Pick
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

// 手动实现 Record
type MyRecord<K extends keyof any, T> = {
    [key in K]: T
}

// 手动显示 Readonly
type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}
type Reads = {
    x: number;
    y: number;
}

type NewReads = MyReadonly<Reads>
// let objs: NewReads = {
//     x: 123,
//     y: 456
// }
// objs.x = 789

