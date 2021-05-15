fetch('http://localhost:3000/api/teddies/')
    .then(data => data.json())
    .then(jsonTeddyList => {
        for (let jsonTeddy of jsonTeddyList) {
            let teddy = new Teddy(jsonTeddy);
            document.querySelector('.container').innerHTML += `<div class="teddyList__item .shadow-sm">
                                                                    <img src=${teddy.imageUrl}>
                                                                    <div>
                                                                        <h3>${teddy.name}</h3>
                                                                        <p>${teddy.price}</p>
                                                                    </div>
                                                                </div>
                                                                `
        }
    })