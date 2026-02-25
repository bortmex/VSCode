// Дан массив food и коллекция players. 
// Создайте одну общую функцию сортировки, которая бы позволяла сортировать food по алфавиту от А-Я, 
// а также игроков коллекции по ключу surname. И отсортируйте данные массивы, с помощью созданной функции.

const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players = [
    {
        id: 1,
        name: 'Cristiano',
        surname: 'Ronaldo',
        club: 'Al-Nassr',
    },
    {
        id: 2,
        name: 'Lamine',
        surname: 'Yamal',
        club: 'Barcelona',
    },
    {
        id: 3,
        name: 'Jude',
        surname: 'Bellingham',
        club: 'Real Madrid',
    },
    {
        id: 4,
        name: 'Bruno',
        surname: 'Fernandes',
        club: 'Manchester United',
    },
    {
        id: 5,
        name: 'Ousmane',
        surname: 'Dembele',
        club: 'PSG',
    },
];


function sortA(a, b) {
    return a > b ? 1 : a < b ? -1 : 0; 
}

const newFood = food.sort(sortA);
console.log(newFood);

const newPlayers = players.sort((a, b) => sortA(a.surname, b.surname));
console.log(newPlayers);