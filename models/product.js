
const fs= require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getproductsFromFile = callback => {
    fs.readFile(p,(err,data)=>{
        try {
            const products = JSON.parse(data);
            callback(products);
        }catch (e) {
            console.log("Error parsing data:", e);
            callback([]);
        }
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getproductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log("Error in writing to file:", err);
                }
            });
        })
    }

    static fetchAll(callback) {
        getproductsFromFile(callback)       
    }
}