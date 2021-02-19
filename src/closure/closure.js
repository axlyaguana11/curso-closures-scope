// Vamos a crear una alcancía
const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`Money Box: ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

// Debería retornar 15, pero no lo hace
// Ahora lo vamos a hacer

const moneyBox = () => {
    let saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money Box: ${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)