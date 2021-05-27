function clearOrderInfo() {
    localStorage.removeItem('name')
    localStorage.removeItem('orderID')
    localStorage.removeItem('itemSum')
    localStorage.removeItem('email')
}

function getOrderInfo() {
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
}

getOrderInfo()

document
    .querySelector('.btn--backToIndex')
    .addEventListener('click', function() {
        clearOrderInfo()
        location.assign('index.html')
    })

for (let link of document.getElementsByTagName('nav')) {
    link.addEventListener('click', clearOrderInfo)
}