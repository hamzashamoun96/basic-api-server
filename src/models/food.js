'use strict';
const uuid = require('uuid').v4;

class Food {
    constructor() {
        this.dbfood = [];
    }
    create(obj) {
        const record = {
            id: uuid(),
            data: obj,
        };
        this.dbfood.push(record)
        return record;
    }

    read(id) {
        if (id) {
            return this.dbfood.find((record) => record.id === id);
        }else {
            return this.dbfood;
        }

    }

    update(id,obj){
        for(let i = 0;i<this.dbfood.length; i++){
            if(this.dbfood[i].id === id){
                this.dbfood[i].data = obj;
                return this.dbfood[i];
            }
        }
    }
    delete(id){
        this.dbfood = this.dbfood.filter((person)=> person.id !==id);
        return this.dbfood;
    }
}

module.exports = Food;