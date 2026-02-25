const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let orders = [];

function addToBasket(productId) {
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
    if (orders.findIndex(order => order.id === productId) !== -1) {
        alert('Данный товар уже есть в корзине.');
        return;
    } else {
        orders = [products.find(product => product.id === productId), ...orders]
        orders.sort((order1, order2) => order2.id - order1.id);
    }
    // TODO: если товар еще не в корзине, добавить его из массива products

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины
    const indexRemove = orders.findIndex(order => order.id === productId);
    if (indexRemove === -1) {
        return;
    } else {
        orders.splice(indexRemove, 1);
    }
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    // TODO: опишите функционал подсчета общей стоимости заказа

    const totalPrice = orders.reduce((acc, order) => {
        return acc + order.price;
    }, 0);
    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    orders.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}