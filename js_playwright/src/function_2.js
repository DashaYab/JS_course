//Звичайна функція
function canSmoke(age) {
    if (age >= 18) {
        return "Можна курити";
    } else {
        return "Не можна курити";
    }
}

// Функція через змінну:
var canSmoke = function(age) {
    if (age >= 18) {
        return "Можна курити";
    } else {
        return "Не можна курити";
    }
};

//Arrow function:
const canSmoke = (age) => {
    if (age >= 18) {
        return "Можна курити";
    } else {
        return "Не можна курити";
    }
};
