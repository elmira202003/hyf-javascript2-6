function createBase(x) {
    if (x <= 10) {
        console.log(x + 6);
    } else if (x >= 21) {
        console.log(x + 6);
    }
};
let addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27

console.log("///////////////////////////////////////////////////////////////////////////////////////");

let letterArr = ["a", "b", "c", "d", "a", "e", "f", "c"];
function removeDuplicates() {
    let newArr = Array.from(new Set(letterArr));
    return newArr;
};
console.log(removeDuplicates());