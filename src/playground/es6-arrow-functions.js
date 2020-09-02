// const square = x => x * x;

// console.log(square(25));

// const divide = (x, y) => x / y;

// console.log(divide(50, 10))

// const getFirstName = str => str.split(' ')[0];

// console.log(getFirstName('Filip Ilievski'))

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(45, 24), ' Wink Wink')


const user = {
    name: 'Alek',
    cities: ['Skopje', 'Tokyo', 'Paris'],
    printPlacesLived: function () {
        return this.cities.map(city => `${this.name} has lived in ${city}`)
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    nums: [4, 5, 8, 10, 25],
    multiplyBy: Math.floor(Math.random() * 50),
    multiply() {
        return this.nums.map(num => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())