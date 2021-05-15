class Teddy{
    constructor(jsonTeddy) {
        jsonTeddy && Object.assign(this, jsonTeddy);
    }
}

class TeddyManager {
    constructor(teddyList){
        this.teddyList = teddyList
    }
}