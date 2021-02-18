const helloWorld = () => {
    const hello = 'Hello World'
    console.log(hello)
}

helloWorld()


// Otro ejemplo
var scope = 'I am global'

const functionScope = () => {
    const scope = 'I am just local'
    const func = () => scope
    console.log(func())
}

functionScope()
console.log(scope)
