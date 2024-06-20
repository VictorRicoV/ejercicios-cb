// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';
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

const words = ['casa', 'mama', 'anillo', 'bebe'];

const wordsUpperCase = words.map(word => {
  return word.toUpperCase();
});
console.log(wordsUpperCase);

//- Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.
const wordsAndLetter = ['casa', 'cama', 'anillo', 'bebe', 'c'];

const resultWordsAndLetter = wordsAndLetter.filter(word => {
  return word[0] === 'c';
});
console.log(resultWordsAndLetter);

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultTenNumbers = tenNumbers.reduce((acc, number) => {
  return acc + number;
});
console.log(resultTenNumbers);

//- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo

const SquareAndCube = tenNumbers.forEach(number => {
  console.log(`Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`);
});

//- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsToUpper = word => {
  const vowels = 'aeiou';
  const wordToArray = word.split('');
  const finalWord = wordToArray.reduce((acc, letter) => {
    if (vowels.includes(letter)) {
      return acc + letter.toUpperCase();
    }
    return acc + letter;
  }, '');
  console.log(finalWord);
};
vowelsToUpper('callejon');

//- Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOdd = numbers => {
  const even = [];
  const odd = [];

  numbers.forEach(numbers => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const result = randomNumber * numbers;

    if (result % 2 === 0) even.push(result);
    else odd.push(result);
  });
  console.log(numbers);
  console.log(odd);
  console.log(even);
};

evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//- Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()

const initialAndLastLetter = array => {
  const newArray = array.flatMap(array => {
    const arrayUpperCase = array.toUpperCase();
    return [arrayUpperCase.charAt(0), arrayUpperCase.charAt(array.length - 1)];
  });
  console.log(newArray);
};

initialAndLastLetter(['ella', 'es', 'callaita', 'pero', 'pal']);

//- Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const greaterThanFive = numbers => {
  const result = numbers.filter(number => {
    return number > 5;
  });
  console.log(result);
};
greaterThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//- Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const wordsOfNumberLength = (words, number) => {
  const result = words.filter(word => {
    return word.length === number;
  });
  console.log(result);
};

wordsOfNumberLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

//- Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

const divisorNumbers = (numbers, divisor) => {
  const result = numbers.filter(number => {
    return number % divisor === 0;
  });
  console.log(result);
};
divisorNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
