// Object
const develop = {
    name: 'Vasiliy',
    surname: 'Петров',
    age: 30,
    skills: ['JavaScript', 'TypeScript', 'CSS'],
    isMaried: false,
    addAge() {
        develop.age++
        console.log(this)
    }
}

console.log(develop);
develop.addAge()


// Дан объект person. Добавьте ему два метода:
// 1. greeting - вызов метода должен выводить в консоль "Hello"
// 2. changeSurname - метод должен принимать новое имя и изменять значение свойства surname исходного объекта.
const person = {
    name: 'Anna',
    surname: 'Dance',
    age: 18,
    greeting() {
        console.log('Hello')
    },
    changeSurname(newName) {
        this.name = newName
    }
};

console.log(person);
person.greeting();
person.changeSurname("Света");
console.log(person);