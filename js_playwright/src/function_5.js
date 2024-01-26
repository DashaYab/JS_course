function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(reverse("Ihor")); // Виведе "rohI"


function isPalindrome(str) {
    const reversedWord = str.split('').reverse().join('');
    return str === reversedWord;
}

console.log(isPalindrome("level")); // Виведе true
console.log(isPalindrome("trust")); // Виведе false


function getPaired(arr) {
    const pairedNumbers = arr.filter(num => num % 2 === 0);
    return pairedNumbers.reverse();
}

console.log(getPaired([1, 2, 3, 4, 5, 6])); // Виведе [6, 4, 2]
