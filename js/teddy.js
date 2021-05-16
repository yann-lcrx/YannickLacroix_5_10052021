class Teddy{
    constructor(jsonTeddy) {
        jsonTeddy && Object.assign(this, jsonTeddy);
    }
    
    getFormatedPrice(teddy) {
        return this.price / 100 + ' €'
    }
}

class TeddyManager {
    constructor(teddyList){
        this.teddyList = teddyList
    }
}