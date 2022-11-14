let arr = [1, 5, 10, 3];

// let newArr = arr.map( element => element * 100)

// console.log(newArr)

let newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * 100 // or newArr.push(arr[i] * 100)
}

console.log(newArr)