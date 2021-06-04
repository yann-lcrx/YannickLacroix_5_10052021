export function countItems() {
    document.querySelector('.itemCount').innerText = getCart().length
};

export function addToCart(teddyId) {
    let cartList = getCart();
    cartList.push(teddyId);
    saveCart(cartList);
    location.reload();
}

export function getCart() {
    let cartList = localStorage.getItem('cartList');
    if (cartList == null) {
        return [];
    } else {
        return JSON.parse(cartList)
    }
}

export function saveCart(cartList) {
    localStorage.setItem('cartList', JSON.stringify(cartList))
}