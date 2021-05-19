let cartList = getCart();
console.log(cartList)

for (let i of cartList) {
    fetch('http://localhost:3000/api/teddies/' + i)
    .then(data => data.json())
    .then(jsonTeddy => {
        let teddy = new Teddy(jsonTeddy);
        document.querySelector('.teddyCart').innerHTML += `<div class="teddyCart__item card d-flex flex-row mb-2">
                                                                <img src="${teddy.imageUrl}" alt="ours en peluche">
                                                                <div class='d-flex card-body flex-row justify-content-between'>
                                                                    <div>
                                                                        <p class='h3'>${teddy.name}</p>
                                                                    </div>
                                                                    <p class="text-secondary h5"><strong>${teddy.getFormatedPrice()}</strong></p>
                                                                </div>
                                                            </div>`
    })
}