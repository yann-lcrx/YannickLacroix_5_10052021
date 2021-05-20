let cartList = getCart();
let itemSum = 0

for (let item of cartList) {
    fetch('http://localhost:3000/api/teddies/' + item)
    .then(data => data.json())
    .then(jsonTeddy => {
        let teddy = new Teddy(jsonTeddy);
        document.querySelector('.teddyCart').innerHTML += `<div class="teddyCart__item card d-flex flex-row mb-2">
                                                                <img src="${teddy.imageUrl}" alt="ours en peluche">
                                                                <div class='d-flex card-body flex-row justify-content-between'>
                                                                    <div>
                                                                        <p class='h3'>${teddy.name}</p>
                                                                    </div>
                                                                    <p class="teddyCart__itemPrice text-secondary h5">${teddy.getFormatedPrice()}</p>
                                                                </div>
                                                            </div>`
        itemSum += teddy.price
        document.querySelector('.teddyCart__sum').innerHTML = (itemSum / 100).toFixed(2) + ' €'
    })
}

document.querySelector('.btn--order').addEventListener('click', function(evt) {
    var valid = true;
    for (let input of document.querySelectorAll('.form input')) {
        valid &= input.reportValidity()
        if (!valid) {
            evt.preventDefault
        }        
    }
    if (valid) {
        alert('Votre commande a bien été envoyée')
    }
})