
// Функція, яка визначає, чи дозволено вам входити
function allowedToIn(name, age, department) {
    // Перевірка умов: ім'я не пусте, вік 18 або більше, і відділ вказаний
    if (name && age >= 18 && department) {
        return "Дозволено входити";
    } else {
        return "Вам не дозволено входити";
    }
}

// Приклад використання функції
var result1 = allowedToIn("John", 25, "IT");
var result2 = allowedToIn("", 20, "HR");
var result3 = allowedToIn("Alice", 17, "Marketing");
var result4 = allowedToIn("Dasha", 19);

console.log(result1); // Дозволено входити
console.log(result2); // Вам не дозволено входити
console.log(result3); // Вам не дозволено входити
console.log(result4); // Вам не дозволено входити