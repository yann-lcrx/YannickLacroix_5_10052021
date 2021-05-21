localStorage.removeItem('cartList')

document
    .querySelector('.customerName')
    .innerText = localStorage.getItem('name')

document
    .querySelector('.totalPrice')
    .innerText = (localStorage.getItem('itemSum')/ 100).toFixed(2) + ' €'

document
    .querySelector('.orderID')
    .innerText = localStorage.getItem('orderID')