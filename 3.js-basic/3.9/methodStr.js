// 1) Даны две строки correctAnswer и userAnswer. 
// Необходимо привести обе строки к нижнему регистру и проверить содержит ли userAnswer в себе строку correctAnswer. 
// Булевый ответ сохранить в переменную isCorrect.
let correctAnswer = 'JavaScript';
const userAnswer = ' javaScript! ';
const isCorrect = false; // TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.

console.log(correctAnswer === userAnswer);
correctAnswer = ' ' + correctAnswer.slice(0, 1).toLowerCase() + correctAnswer.slice(1) + '! ';
console.log(correctAnswer === userAnswer)

// 2) Дана переменная salary с числовым значением. Необходимо создать переменную salaryFixed, 
// в которой исходное числовое значение округлено до двух знаков после запятой.
const salary = 15000.2085;
console.log(salary.toFixed(2));     