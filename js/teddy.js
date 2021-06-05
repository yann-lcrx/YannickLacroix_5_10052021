export class Teddy{
    constructor(jsonTeddy) {
        jsonTeddy && Object.assign(this, jsonTeddy);
    }
    getFormatedPrice() {
        return (this.price / 100).toFixed(2) + ' €'
    }
    setTeddyURL(URL) {
        URL.searchParams.set('id', this._id)
    }
    //Format HTML des teddys sur la page d'accueil
    createPreview(URL) {
        document.querySelector('.teddyList').innerHTML += `<a href="${URL}" class="teddyList__item card shadow mb-3">
                                                                <img alt="ours en peluche" src=${this.imageUrl}>
                                                                <div class="card-body pb-1">
                                                                    <h3 class="h5">${this.name}</h3>
                                                                    <p>${this.getFormatedPrice()}</p>
                                                                </div>
                                                            </a>
                                                            `
    }
    //Format de la page produit
    createDescription() {
        document.querySelector('.teddyPage').innerHTML += `<img src="${this.imageUrl}" alt="ours en peluche">
                                                                    <div class="card-body">
                                                                        <h1 class="h2">${this.name}</h1>
                                                                        <p class="h5">Prix: <span class="text-secondary">${this.getFormatedPrice()}</span></p>
                                                                        <p>Nos prix incluent la TVA</p>
                                                                        <strong>Description de l'article</strong>
                                                                        <p>${this.description}</p>
                                                                        <select name="colorSelect" class="teddyPage__colorSelect">
                                                                        
                                                                        </select>
                                                                        <button class="btn--addToCart btn-primary">Ajouter au panier</button>
                                                                    </div>`
            for (let color of this.colors) {
                    document.querySelector('.teddyPage__colorSelect').innerHTML += '<option>' + color + '</option>'
            }
    }
    
    createCartItem() {
        document.querySelector('.teddyCart').innerHTML += `<div class="teddyCart__item card d-flex flex-row mb-2">
                                                                    <img src="${this.imageUrl}" alt="ours en peluche">
                                                                    <div class='d-flex card-body flex-row justify-content-between'>
                                                                        <div>
                                                                            <p class='h3'>${this.name}</p>
                                                                        </div>
                                                                        <p class="teddyCart__itemPrice text-secondary h5">${this.getFormatedPrice()}</p>
                                                                    </div>
                                                                </div>`
    }
}