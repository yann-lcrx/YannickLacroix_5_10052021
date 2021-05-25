let products = getCart();
let itemSum = 0

function disableCartForm() {
    for (let input of document.querySelectorAll('.form input')) {
        input.disabled = true
        document
            .querySelector('.btn--order')
            .classList
            .replace('btn-primary', 'btn-outline-primary')
        document
            .querySelector('.btn--order')
            .setAttribute('value','Votre panier est vide !')
    }
}

function generateCart() {
    if (products.length > 0) {
        for (let item of products) {
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
    } else {
        disableCartForm()
    }
}

function confirmOrder() {
    var valid = true;
    for (let input of document.querySelectorAll('.form input')) {
        valid &= input.reportValidity()
        if (!valid) {
            input.classList.remove('is-valid')
            input.classList.add('is-invalid')
            break
        } else {
            input.classList.remove('is-invalid')
            input.classList.add('is-valid')
        }        
    }
    if (valid) {
        let contact = new ContactInfo(document.getElementById('firstName').value, document.getElementById('lastName').value, document.getElementById('address').value, document.getElementById('city').value, document.getElementById('email').value)
        let toSend = {contact, products}
        fetch('http://localhost:3000/api/teddies/order', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toSend)
        })
        .then(function(res) {
            if (res.ok) {
                return res.json()
            }
        })
        .then(function(value) {
            localStorage.setItem('orderID', value.orderId)
            localStorage.setItem('itemSum', itemSum)
            localStorage.setItem('name', value.contact.firstName)
            localStorage.setItem('email', value.contact.email)
            localStorage.removeItem('cartList')
            location.assign('confirmation.html')
        })
        .catch(function(err) {
            console.error(err)
        })
    }
}

generateCart()

document.querySelector('.btn--order').addEventListener('click', confirmOrder)