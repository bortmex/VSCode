//Loop break


while (true) {
    const age = +prompt('Сколько лет ало?');

    if (age) {
        alert('Welcome');
        break;
    }

    alert('Данные введены некорректно')
}

alert('End')