localStorage.removeItem('cartList')

document
    .querySelector('.customerName')
    .innerText = localStorage.getItem('name')

document
    .querySelector('.totalPrice')
    .innerText = (localStorage.getItem('itemSum')/ 100).toFixed(2) + ' €'

document
    .querySelector('.email')
    .innerText = localStorage.getItem('email')

document
    .querySelector('.orderID')
    .innerText = localStorage.getItem('orderID')

document
    .querySelector('.btn--backToIndex')
    .addEventListener('click', function() {
        location.assign('index.html')
    })