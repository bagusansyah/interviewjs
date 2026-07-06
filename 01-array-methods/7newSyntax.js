import { product } from './4shopping-cart.js';

function cariProduk(nama) {
    const result = product.find(product => product.name === nama);
    return result;
}

function hapusProduk(id) {
    const index = product.findIndex(product => product.id === id);
    return index;
}

function ambilNamaProduk() {
    const result = product.map(product => product.name);
    return result;
}

function produkMurah() {
    const result = product.filter(product => product.harga < 500000);
    return result;
}

function produkMahal() {
    const result = product.filter(product => product.harga > 500000);
    return result;
}

function produkQtyLebihDari1() {
    const result = product.filter(product => product.qty > 1);
    return result;
}

function produkHurufM() {
    const result = product.filter(product => product.name.startsWith("M"));
    return result;
}

function produkDiAtas1Juta() {
    const result = product.filter(product => product.harga > 1000000);
    return result;
}