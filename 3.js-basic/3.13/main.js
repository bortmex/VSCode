var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(answer) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if (this.correctAnswer === answer) {
            alert('Правильно')
        } else if(this.tries== 0) {
            alert('Попытки кончились')
        } else {
            this.tries--;
            alert('Ответ не правильный, осталось попыток ' + this.tries)
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    }
}