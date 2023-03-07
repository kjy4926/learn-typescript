interface User {
  age: number,
  name: string,
  getUser(): User
}

const jy: User = {
  age: 28,
  name: 'jinyong',
  getUser(){ return this }
}

console.log(jy.getUser())

interface SumFunction {
  (a : number, b: number): number
}

const sum: SumFunction = (a, b): number => {
  return a+b
}

// 인덱싱
interface StringArray {
  [index: number]: string
}

const arr: StringArray = ['a', 'b', 'c']

// 딕셔너리
interface StringRegexDictionary {
  [key: string]: RegExp
}

const obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// 인터페이스 확장
interface Person {
  name: string,
  age: number,
}

interface Developer extends Person {
  language: string,
}

const dev: Developer = {
  name: 'kjy',
  age: 28,
  language: 'java'
}