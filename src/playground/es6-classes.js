// // class Person {
// //     constructor(name = 'Anonymous', age, isHuman) {
// //         this.name = name;
// //         this.age = age || 'Unknown';
// //         this.isHuman = isHuman;
// //     }

// //     getBio() {
// //         return `${this.name} is ${this.age} years old. Is he human ? That's ${this.isHuman}`
// //     }
// // }

// // const me = new Person('Alek', 26, false);

// // const other = new Person();
// // console.log(me.getBio())

// class Person {
//     constructor(name = 'Anonymous', age = 0) {
//         this.name = name;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hi, I'm ${this.name}`
//     }

//     getDescription() {
//         return `${this.name} is ${this.age} years old.`
//     }
// }


// class Student extends Person {
//     constructor(name, age, major) {
//         super(name, age)
//         this.major = major;
//     }

//     hasMajor() {
//         return !!this.major
//     }

//     getDescription() {
//         let description = super.getDescription();

//         if (this.hasMajor()) {
//             description += ` His/Her major is ${this.major}`
//         }
//         return description;
//     }
// }

// class Traveler extends Person {
//     constructor(name, age, homeLocation) {
//         super(name, age)
//         this.homeLocation = homeLocation;
//     }
//     getNewGreeting() {
//         let greeting = super.getGreeting();

//         if (this.getGreeting()) {
//             greeting += `. I'm visiting ${this.homeLocation}`;
//         } else {
//             return greeting;
//         }
//     }
// }

// const me = new Traveler('Alek', 26, 'Linguistics');
// console.log(me.getNewGreeting())

// const other = new Traveler();
// console.log(other)


class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting()

        if (this.homeLocation) {
            greeting += ` I'm visiting ${this.homeLocation}`
        }

        return greeting;
    }
}

const me = new Traveler('Alek', 26, 'Skopje');
console.log(me.getGreeting())


const other = new Traveler();
console.log(other.getGreeting())