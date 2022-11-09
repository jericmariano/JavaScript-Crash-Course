let cash = 505;
let price = 5050; 
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here\'s ${difference} dollars change`)
}
else if (cash === price) {
    console.log('you paid the exact amount')
}
else {
    console.log(`not enough money - you owe ${difference * -1} dollars`)
}