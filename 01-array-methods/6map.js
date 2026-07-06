function ambilNamaProduk() {
    return product.map(product => product.name);
}

function produkMahal() {
    let result = [];
    for (let i = 0; i < product.length; i++) {
        if(product[i].harga > 700000) {
            result.push(product[i]);
        }
    }
    return result;
}

function produkQtyBanyak() {
    let result = [];
    for (let i = 0; i < product.length; i++) {
        if(product[i].qty > 1) {
            result.push(product[i]);
        }
    }
    return result;
}

function productAwalanM(){
    let result = [];
    for (let i = 0; i < product.length; i++) {
        if(product[i].name.startsWith("M")){
            result.push(product[i]);
        }
    }
    return result;
}