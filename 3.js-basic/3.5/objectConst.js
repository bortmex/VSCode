//Дан объект htmlDiv. Используя цикл for..in выведите в консоль все значения ключей данного объекта.
const htmlDiv = {
    className: 'column',
    rel: 'main',
    id: 'block',
};

for(let prop in htmlDiv) {
    console.log(htmlDiv[prop])
}

const array = [1, 2, 4, 5, 6]
console.log("-------");

for(let prop in array) {
    console.log(array[prop])
}

console.log("-------");

for(let value of array) {
    console.log(value)
}