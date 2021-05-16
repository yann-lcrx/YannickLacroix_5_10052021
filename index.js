fetch('http://localhost:3000/api/teddies/')
    .then(data => data.json())
    .then(jsonTeddyList => {
        for (let jsonTeddy of jsonTeddyList) {
            let teddy = new Teddy(jsonTeddy);
            document.querySelector('.teddyList').innerHTML += `<div class="teddyList__item card shadow">
                                                                    <div>
                                                                        <img src=${teddy.imageUrl}>
                                                                        <div class="card-body">
                                                                            <h3>${teddy.name}</h3>
                                                                            <p>${teddy.getFormatedPrice()}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                `
        }
    })