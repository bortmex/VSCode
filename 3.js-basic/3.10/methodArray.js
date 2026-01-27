// 1) Дан массив fruits. Используя встроенный метод массива, определите есть ли в массиве значение 'orange' и ответ сохраните в константу hasOrange.
// 2) Дан массив cars. Используя встроенный метод массива, выберите из него первые три значения и сохраните их в константу favoriteCars.
// 3) Создайте константу otherCars, сохранив в нее оставшиеся три значения из исходного массива cars.
const fruits = ['apple', 'banana', 'melon', 'orange'];
const hasOrange = fruits.concat('orange');
console.log(hasOrange)

// 2
const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
const favoriteCars = cars.slice(0,3);
console.log(favoriteCars)

// 3
const otherCars = cars.slice(3,cars.length);
console.log(otherCars)