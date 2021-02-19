// Se declaran variables dentro de un bloque, pero son globales (var)
const fruits = () => {
    if(true) {
        var fruit1 = 'apple'
        var fruit2 = 'banana'
        var fruit3 = 'guanabara'
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()
console.log(fruit1)

// Otro ejemplo
let x = 1
{
    let x = 2
    console.log(x)
}
console.log(x)

//Un loop
const anotherFunct = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}

anotherFunct()