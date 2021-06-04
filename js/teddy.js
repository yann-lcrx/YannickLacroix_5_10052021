class Teddy{
    constructor(jsonTeddy) {
        jsonTeddy && Object.assign(this, jsonTeddy);
    }
    getFormatedPrice() {
        return (this.price / 100).toFixed(2) + ' €'
    }
    setTeddyURL(URL) {
        URL.searchParams.set('id', this._id)
    }
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
}

class TeddyManager {
    constructor(teddyList){
        this.teddyList = teddyList
    }
}