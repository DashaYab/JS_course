
function canSmoke(age) {
    if (age >= 18) {
        return "Можна курити";
    } else {
        return "Не можна курити";
    }
}

var age1 = 20;
var age2 = 16;

console.log(canSmoke(age1)); 
console.log(canSmoke(age2)); 
