let num1
let num2

function division(num1, num2) {
    return num1 / num2;
}
console.log(division(num1, num2));

do {
    num1 = parseInt(prompt("Añade un numero"));

    num2 = parseInt(prompt("Añade otro numero"));
    alert(division(num1, num2));
} while (num2 != 0);