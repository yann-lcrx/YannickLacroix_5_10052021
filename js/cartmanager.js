document.querySelector('.itemCount').innerText = getCart().length

let itemSum = 0

localStorage.removeItem('name')
localStorage.removeItem('orderID')
localStorage.removeItem('itemSum')

function addToCart(teddyId) {
    let cartList = getCart();
    cartList.push(teddyId);
    saveCart(cartList);
    location.reload();
}

function getCart() {
    let cartList = localStorage.getItem('cartList');
    if (cartList == null) {
        return [];
    } else {
        return JSON.parse(cartList)
    }
}

function saveCart(cartList) {
    localStorage.setItem('cartList', JSON.stringify(cartList))
}