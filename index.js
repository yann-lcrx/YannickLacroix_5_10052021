fetch('http://localhost:3000/api/teddies/')
    .then(data => data.json())
    .then(jsonTeddyList => {
        for (let jsonTeddy of jsonTeddyList) {
            let teddy = new Teddy(jsonTeddy);
            document.querySelector('.teddyList').innerHTML += `<a class="teddyList__item card shadow mb-3">
                                                                    <img src=${teddy.imageUrl}>
                                                                    <div class="card-body pb-1">
                                                                        <h3 class="h5">${teddy.name}</h3>
                                                                        <p>${teddy.getFormatedPrice()}</p>
                                                                    </div>
                                                                </a>
                                                                `
        }
    })