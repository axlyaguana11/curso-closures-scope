//Un loop
const anotherFunct = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}

anotherFunct()