// first assignment 
function myName(callback) {
    console.log("Hello, my name is Kenan and I study @HYF");
    callback();
};

function myHobby() {
    console.log("\nI like gaming");
};

myName(myHobby);
// end first assignment

// second assignment
function dividableOnThree() {
    console.log("Yes, it's dividable on 3");
};
function dividableOnFive() {
    console.log("Yes, it's dividable on 5");
};

function myFunc(x, y, func1, func2) {
    let newArr = new Array(x, 2, 3, 4, 5, 6, 7, 8, y);
    for (let index = 0; index < newArr.length; index++) {
        if (newArr[index] % 3 === 0) {
            func1();
        };
        if (newArr[index] % 5 === 0) {
            func2();
        };

    };
};
myFunc(1, 9, dividableOnThree, dividableOnFive);
// end second assignment

// third assignment
function repeatStringNumTimes(str, num) {
    for (let index = 0; index < num; index++) {
        console.log(str);
    };
    let index = 0;
    while (index < num) {
        console.log(str);
        index++;
    };
    let i = 0;
    do {
        console.log(str);
        i++;
    } while (i < num);
    return str;
}

repeatStringNumTimes("abc", 3);
/*notice : when leaving the do loop with the var index it only gives back one result because
has already reached 3 in the previous while loop
so leaving it with index will give you one iteration only*/
// end third assignment

// fourth assignment
let Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

let MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;
};

// end fourth assignment

// fifth assignment
function multiplyAll(arr) {
    let product = 1;
    for (let index = 0; index < arr.length; index++) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[index][i] * 2);
        }
    };
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// end fifth assignment

// seventh assignment
let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

/*Pass by value does not change the value of the passed argument meanwhile passing an argument by
Reference change the value of it (in case of Arrays and Objects).
That's why the value of x wasn't touched because it was passed by its value.*/

// end seventh assignment