var hello = 'Hello'
let world = 'Hello World'
const helloWorld = 'Hellow World!!!'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

// No puedes reasignar let ni const, solo var


// Esto es una mala práctica
const helloHello = () => {
    globalVar = 'Seu global'
}

helloHello()
console.log(globalVar)