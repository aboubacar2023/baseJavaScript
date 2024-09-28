import hello1 from './exportDefault.js'

export const somme = (items) => items.reduce((acc, item) => acc + item, 0)

export const hello2 = hello1
