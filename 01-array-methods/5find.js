function cariProduk(nama) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].name === nama) {
            return product[i];
        }
    }
    return null;
}

function cariIndexProduk(name) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].name === name) {
            return i;
        }
    }
    return -1;
}