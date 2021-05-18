let productUrl = new URL(window.location.href);
let productId = (productUrl.searchParams.toString()).slice(3)

fetch('http://localhost:3000/api/teddies/' + productId)
    .then(data => data.json())
    .then(jsonTeddy => {
        let teddy = new Teddy(jsonTeddy);
        document.querySelector('.teddyPage').innerHTML += `<img src="${teddy.imageUrl}" alt="ours en peluche">
                                                                <div class="card-body">
                                                                    <h1 class="h2">${teddy.name}</h1>
                                                                    <p class="h5">Prix: <span class="text-secondary">${teddy.getFormatedPrice()}</span></p>
                                                                    <p>Nos prix incluent la TVA</p>
                                                                    <strong>Description de l'article</strong>
                                                                    <p>${teddy.description}</p>
                                                                    <select name="colorSelect" class="teddyPage__colorSelect">
                                                                    
                                                                    </select>
                                                                    <button class="btn--addToCart btn-primary">Ajouter au panier</button>
                                                                </div>`
        for (color of teddy.colors) {
                document.querySelector('.teddyPage__colorSelect').innerHTML += '<option>' + color + '</option>'
        }
        document
            .querySelector('.btn--addToCart')
            .addEventListener('click', function() {
                localStorage.setItem("id", productId)
                location.reload
    });
    }
)


