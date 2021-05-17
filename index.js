let teddyUrl = new URL('file:///C:/Users/vg-ad/OneDrive/Documents/WEB/Projet%205%20-%20orinoco/JWDP5/product.html')

fetch('http://localhost:3000/api/teddies/')
    .then(data => data.json())
    .then(jsonTeddyList => {
        for (let jsonTeddy of jsonTeddyList) {
            let teddy = new Teddy(jsonTeddy);
            teddyUrl.searchParams.set('id', teddy._id)
            document.querySelector('.teddyList').innerHTML += `<a href="${teddyUrl}" class="teddyList__item card shadow mb-3">
                                                                    <img alt="ours en peluche" src=${teddy.imageUrl}>
                                                                    <div class="card-body pb-1">
                                                                        <h3 class="h5">${teddy.name}</h3>
                                                                        <p>${teddy.getFormatedPrice()}</p>
                                                                    </div>
                                                                </a>
                                                                `
        }
    })