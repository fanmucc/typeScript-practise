/*
* 手动实现Pick类型
* Pick - 从类型定义的属性中，选取指定的一组属性，并返回一个新的定义
* 参数2
* Pick<指定的类型, 类型>
* */
type MyPicks<T, K extends keyof T> = {
    [key in K]: T[key]
}

/*
* 手动实现Readonly
* Readonly - 将类型定义中的属性，都设置成已读属性
* 参数1
* Readonly<类型>
* */
type MyReadOnlys<T> = {
    readonly [key in keyof T]: T[key]
}



