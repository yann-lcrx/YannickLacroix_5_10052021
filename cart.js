import { Teddy } from './js/teddy.js'
import { countItems } from './js/cartmanager.js'
import { getCart } from './js/cartmanager.js'
import { ContactInfo } from './js/order.js'

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

function getCartItems() {
    for (let item of products) {
        fetch('http://localhost:3000/api/teddies/' + item)
        .then(data => data.json())
        .then(jsonTeddy => {
            let teddy = new Teddy(jsonTeddy);
            teddy.createCartItem()
            itemSum += teddy.price
            document.querySelector('.teddyCart__sum').innerHTML = (itemSum / 100).toFixed(2) + ' €'
        })
    }
}

function validateUserInput() {
    var valid = true;
    for (let input of document.querySelectorAll('.form input')) {
        valid &= input.reportValidity()
        if (!valid) {
            //le champ devient rouge
            input.classList.remove('is-valid')
            input.classList.add('is-invalid')
            break
        } else {
            //le champ devient vert
            input.classList.remove('is-invalid')
            input.classList.add('is-valid')
        }        
    }
    if (valid) {
        return true
    }
}

function confirmOrder() {
    validateUserInput()
    if (validateUserInput()) {
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

function checkCartLength(){
    if (products.length > 0) {
        getCartItems()
        document.querySelector('.btn--order').addEventListener('click', confirmOrder)
    } else {
        disableCartForm()
    }
}

countItems()
checkCartLength()