// number 1
const numbers = [1, 2, 3, 4];

let numbersFilter = numbers.filter(function (x) {
    if (x % 2 !== 0) {
        return x;
    }
});

let numbersMultiply = numbersFilter.map(function (x) {
    return x * 2;
});

console.log(numbersFilter);
console.log("The doubled numbers are ",numbersMultiply);
// end number 1

console.log("///////////////////////////////////////////")

// number 2
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);

let arrayWithHours = [];

let hours = tasks.map(function (x) {
    return arrayWithHours.push(x.name + " "+ x.duration/60 + " hour/s");  
});

console.log(arrayWithHours);

console.log("///////////////////////////////////////////");

let filteredHours = tasks.filter(function (x) {
    if (x.duration < 120) {
        return x;
    }
});

console.log(filteredHours);

console.log("///////////////////////////////////////////");

let pay = tasks.map(function (x) {
    return (x.name + " " + x.duration * 0.15 + " Euros");
});

console.log(pay);