let productUrl = new URL(window.location.href);
let productId = (productUrl.searchParams.toString()).slice(3)

fetch('http://localhost:3000/api/teddies/' + productId)
.then(data => data.json())
.then(teddy => {
        console.log(teddy)
    }
)