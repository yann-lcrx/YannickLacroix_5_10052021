import { Teddy } from './js/teddy.js'
import { countItems } from './js/cartmanager.js'
import { addToCart } from './js/cartmanager.js'

let productUrl = new URL(window.location.href);
let productId = (productUrl.searchParams.toString()).slice(3)

function generateTeddyPage() {
    fetch('http://localhost:3000/api/teddies/' + productId)
        .then(data => data.json())
        .then(jsonTeddy => {
            let teddy = new Teddy(jsonTeddy);
            teddy.createDescription()
            document
                .querySelector('.btn--addToCart')
                .addEventListener('click', function(evt) {
                    evt.stopPropagation
                    addToCart(productId)
                });
        })
        .catch(function(err) {
            console.error(err)
        })
}

countItems()
generateTeddyPage()