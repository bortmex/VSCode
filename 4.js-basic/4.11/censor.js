// Создайте функцию censor, которая не принимает аргументов. 
// Функция должна возвращать новую функцию, принимающую опционально 1 или 2 параметра (оба - строки).
// Когда возвращаемая функция принимает 2 параметра, то она ничего не возвращает, 
// а сохраняет полученные значения как пару (пара - это массив с двумя значениями).
// Когда возвращаемая функция принимает 1 параметр, то она возвращает полученную строку, 
// заменив в ней все слова, согласно ранее сохранённым парам.
// Пример использования:
// const changeScene = censor();
// changeScene('PHP', 'JS');
// changeScene('backend', 'frontend');
// console.log(changeScene('PHP is the most popular programming language for backend web-development')); // должно распечатать 'JS is the most popular programming language for frontend web-development'

function censor() {

    // const obj = {};
    // const censoredArr = []; // [['str1', 'str2'], ['str3', 'str4']]
    const array = []
    
    const message = (first, second = '') => {
        if (second !== '') {
            // censoredArr.push([str1, str2])
            // obj[str1] = str2; // Динамически меняем str1, присваивая ему значение str2 и заполняя объект
            array[array.length] = first;
            array[array.length] = second;
        } else {
            
            // for (let key in obj) {
            //     str1 = str1.replaceAll(key, obj[key]);
            // }
            // return str1;
            for (let i = 0; i < array.length; i = i+2) {
                first = first.replaceAll(array[i], array[i+1]);
            }
            return first;
        }
    }
    return message;
}

const changeScene = censor();

changeScene('PHP', 'JS');

changeScene('backend', 'frontend');

console.log(changeScene('PHP is the most popular programming language for backend web-development'));
