// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';
//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(number * index);
});
