// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";
//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(number * index);
});

//- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const resultDivisible = numbers.map((number, index) => {
  return number / index + 2;
});
console.log(resultDivisible);

//- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const words = ["casa", "mama", "anillo", "bebe"];

const wordsUpperCase = words.map((word) => {
  return word.toUpperCase();
});
console.log(wordsUpperCase);

//- Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.
const wordsAndLetter = ["casa", "cama", "anillo", "bebe", "c"];

const resultWordsAndLetter = wordsAndLetter.filter((word) => {
  return word[0] === "c";
});
console.log(resultWordsAndLetter);

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultTenNumbers = tenNumbers.reduce((acc, number) => {
  return acc + number;
});
console.log(resultTenNumbers);

//- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo

const SquareAndCube = tenNumbers.forEach((number) => {
  console.log(
    `Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
      number,
      3
    )}`
  );
});
