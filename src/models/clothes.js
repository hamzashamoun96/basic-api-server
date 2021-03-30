'use strict';
const uuid = require('uuid').v4;

class Clothes {
    constructor() {
        this.dbCloth = [];
    }
    create(obj) {
        const record = {
            id: uuid(),
            data: obj,
        };
        this.dbCloth.push(record)
        return record;
    }

    read(id) {
        if (id) {
            return this.dbCloth.find((record) => record.id === id);
        }else {
            return this.dbCloth;
        }

    }

    update(id,obj){
        for(let i = 0;i<this.dbCloth.length; i++){
            if(this.dbCloth[i].id === id){
                this.dbCloth[i].data = obj;
                return this.dbCloth[i];
            }
        }
    }
    delete(id){
        this.dbCloth = this.dbCloth.filter((person)=> person.id !==id);
        return this.dbCloth;
    }
}

module.exports = Clothes;