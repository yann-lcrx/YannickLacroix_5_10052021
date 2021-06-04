//import Teddy from '.js/teddy.js'
//import TeddyManager from 'js/teddy.js'
//import countItems from './js/cartmanager'

function getAllTeddies() {
    let teddyUrl = new URL('file:///C:/Users/vg-ad/OneDrive/Documents/WEB/Projet%205%20-%20orinoco/JWDP5/product.html')
    fetch('http://localhost:3000/api/teddies/')
    .then(data => data.json())
    .then(jsonTeddyList => {
        for (let jsonTeddy of jsonTeddyList) {
                let teddy = new Teddy(jsonTeddy);
                teddy.setTeddyURL(teddyUrl)
                teddy.createPreview(teddyUrl)
        }
    })
    .catch(function(err) {
        console.error(err)
    })
}

countItems()
getAllTeddies()